export class AppError extends Error {
  constructor(message: string, public statusCode: number = 500) {
    super(message);
    this.name = 'AppError';
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof AppError) {
    return { message: error.message, statusCode: error.statusCode };
  }
  return { message: 'An unexpected error occurred', statusCode: 500 };
};