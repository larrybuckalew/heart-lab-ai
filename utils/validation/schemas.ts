import { z } from 'zod';

export const PatientSchema = z.object({
  name: z.string().min(2).max(100),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  gender: z.enum(['male', 'female', 'other']),
  email: z.string().email().optional(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/).optional()
});

export const HealthMetricsSchema = z.object({
  patientId: z.string().uuid(),
  heartRate: z.number().int().min(0).max(300),
  bloodPressure: z.object({
    systolic: z.number().int().min(0).max(300),
    diastolic: z.number().int().min(0).max(300)
  }),
  oxygenSaturation: z.number().min(0).max(100),
  timestamp: z.string().datetime()
});

export const AnalysisRequestSchema = z.object({
  patientId: z.string().uuid(),
  dataType: z.enum(['ecg', 'heartRate', 'bloodPressure']),
  startDate: z.string().datetime(),
  endDate: z.string().datetime(),
  parameters: z.record(z.string(), z.unknown()).optional()
});

export type Patient = z.infer<typeof PatientSchema>;
export type HealthMetrics = z.infer<typeof HealthMetricsSchema>;
export type AnalysisRequest = z.infer<typeof AnalysisRequestSchema>;