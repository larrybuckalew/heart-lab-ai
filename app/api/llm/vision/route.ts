import { NextRequest, NextResponse } from 'next/server';
import { LLM_CONFIG } from '@/app/config/llm';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;
    const prompt = formData.get('prompt') as string;
    const provider = formData.get('provider') as string || LLM_CONFIG.defaults.provider;
    const model = formData.get('model') as string || getVisionModel(provider);

    if (!image || !prompt) {
      return NextResponse.json({ error: 'Missing image or prompt' }, { status: 400 });
    }

    // Check file size and format
    if (image.size > LLM_CONFIG.features.vision.maxSize) {
      return NextResponse.json({ error: 'Image too large' }, { status: 400 });
    }

    const imageType = image.type.split('/')[1];
    if (!LLM_CONFIG.features.vision.supportedFormats.includes(imageType)) {
      return NextResponse.json({ error: 'Unsupported image format' }, { status: 400 });
    }

    // Convert image to base64
    const imageBuffer = await image.arrayBuffer();
    const base64Image = Buffer.from(imageBuffer).toString('base64');

    // Format request based on provider
    const requestBody = formatVisionRequest(provider, prompt, base64Image, model);

    const response = await fetch(getLLMEndpoint(provider), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getLLMApiKey(provider)}`,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`Vision API error: ${response.status}`);
    }

    const data = await response.json();
    const formattedResponse = formatVisionResponse(provider, data);

    // Log usage
    await logVisionUsage(provider, {
      promptTokens: data.usage?.prompt_tokens || 0,
      completionTokens: data.usage?.completion_tokens || 0,
      imageSize: image.size,
      model: model,
    });

    return NextResponse.json(formattedResponse);
  } catch (error) {
    console.error('Vision processing error:', error);
    return NextResponse.json({ error: 'Vision processing failed' }, { status: 500 });
  }
}

function getVisionModel(provider: string): string {
  switch (provider) {
    case 'openai':
      return 'gpt-4-vision-preview';
    case 'claude':
      return 'claude-3-opus-20240229';
    case 'perplexity':
      return 'pplx-70b-online';
    default:
      throw new Error(`No vision model available for provider: ${provider}`);
  }
}