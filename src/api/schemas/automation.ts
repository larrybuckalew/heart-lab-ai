import { z } from 'zod';

export const automationSchemas = {
  invoice: z.object({
    documentUrl: z.string().url(),
    type: z.enum(['invoice', 'receipt', 'bill']),
    options: z.object({
      extractItems: z.boolean().default(true),
      validateTax: z.boolean().default(true),
      autoProcess: z.boolean().default(false)
    }).optional()
  }),

  customerService: z.object({
    content: z.string(),
    customerId: z.string().optional(),
    priority: z.enum(['low', 'medium', 'high']).default('medium'),
    category: z.enum([
      'general_inquiry',
      'technical_support',
      'billing',
      'feedback',
      'complaint'
    ]),
    attachments: z.array(z.object({
      url: z.string().url(),
      type: z.string()
    })).optional()
  }),

  inventory: z.object({
    action: z.enum(['check', 'update', 'reorder']),
    items: z.array(z.object({
      sku: z.string(),
      quantity: z.number().int(),
      location: z.string().optional()
    })),
    options: z.object({
      notifyLowStock: z.boolean().default(true),
      autoReorder: z.boolean().default(false),
      updateConnectedServices: z.boolean().default(true)
    }).optional()
  }),

  scheduling: z.object({
    type: z.enum(['appointment', 'meeting', 'service']),
    duration: z.number().int().min(15).max(480), // in minutes
    preferredDates: z.array(z.string().datetime()),
    participants: z.array(z.string().email()),
    location: z.union([
      z.string(),
      z.object({
        type: z.enum(['physical', 'virtual']),
        details: z.string()
      })
    ]),
    resources: z.array(z.string()).optional(),
    notes: z.string().optional()
  }),

  marketing: z.object({
    type: z.enum([
      'social_media_post',
      'email_campaign',
      'blog_post',
      'advertisement',
      'newsletter'
    ]),
    target: z.object({
      audience: z.string(),
      platform: z.string(),
      goals: z.array(z.string())
    }),
    preferences: z.object({
      tone: z.enum(['professional', 'casual', 'friendly', 'formal']),
      length: z.enum(['short', 'medium', 'long']),
      includeMedia: z.boolean().default(true)
    }),
    schedule: z.object({
      publishDate: z.string().datetime(),
      timezone: z.string(),
      repeat: z.enum(['none', 'daily', 'weekly', 'monthly']).default('none')
    }).optional()
  })
};