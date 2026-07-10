
import { z } from 'zod';

const registerSchema = z.object({
  nom: z.string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .trim(),

  email: z.string()
    .email({ message: "Invalid email address format" }),

  password: z.string()
    .min(6, { message: "Password must be at least 6 characters long" }),

  role: z.enum(['admin', 'commissaire', 'arbitre', 'consultation'], {
    errorMap: () => ({
      message: "Role must be one of: admin, commissaire, arbitre, consultation"
    })
  })
});

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z.string().min(1, { message: "Password is required"})
});

export const validateRegister = (req, res, next) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    const errorMessages = result.error.errors.map(err => err.message);

    return res.status(400).json({
      error: 'Validation failed',
      details: errorMessages
    });
  }

  req.body = result.data;
  next();
};

