import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json({ error: 'No query provided' }, { status: 400 })
  }

  try {
    const response = await fetch(`https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}`, {
      headers: {
        'X-Subscription-Token': process.env.BRAVE_SEARCH_API_KEY || ''
      }
    })

    const data = await response.json()
    const results = data.web.results.map((result: any) => ({
      title: result.title,
      link: result.url,
      snippet: result.description
    }))

    return NextResponse.json({ results })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'Search failed' }, { status: 500 })
  }
}