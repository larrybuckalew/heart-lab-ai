import { prisma } from '../utils/db';
import { PatientSchema } from '../utils/validation/schemas';
import logger from '../utils/logger';

export class Patient {
  static async create(data: any) {
    try {
      const validatedData = PatientSchema.parse(data);
      
      const patient = await prisma.patient.create({
        data: validatedData
      });

      logger.info('Patient created', { patientId: patient.id });
      return patient;
    } catch (error) {
      logger.error('Error creating patient', { error, data });
      throw error;
    }
  }

  static async update(id: string, data: any) {
    try {
      const validatedData = PatientSchema.partial().parse(data);
      
      const patient = await prisma.patient.update({
        where: { id },
        data: validatedData
      });

      logger.info('Patient updated', { patientId: id });
      return patient;
    } catch (error) {
      logger.error('Error updating patient', { error, id, data });
      throw error;
    }
  }

  static async delete(id: string) {
    try {
      await prisma.patient.delete({
        where: { id }
      });

      logger.info('Patient deleted', { patientId: id });
    } catch (error) {
      logger.error('Error deleting patient', { error, id });
      throw error;
    }
  }

  static async findById(id: string) {
    try {
      const patient = await prisma.patient.findUnique({
        where: { id }
      });

      return patient;
    } catch (error) {
      logger.error('Error finding patient', { error, id });
      throw error;
    }
  }

  static async findAll(options: {
    page?: number;
    limit?: number;
    search?: string;
  }) {
    try {
      const { page = 1, limit = 10, search } = options;
      const skip = (page - 1) * limit;

      const where = search ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { email: { contains: search, mode: 'insensitive' } }
        ]
      } : {};

      const [patients, total] = await Promise.all([
        prisma.patient.findMany({
          where,
          skip,
          take: limit,
          orderBy: { createdAt: 'desc' }
        }),
        prisma.patient.count({ where })
      ]);

      return {
        data: patients,
        pagination: {
          total,
          pages: Math.ceil(total / limit),
          currentPage: page,
          perPage: limit
        }
      };
    } catch (error) {
      logger.error('Error finding patients', { error, options });
      throw error;
    }
  }
}