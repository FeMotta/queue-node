import { z } from 'zod';

export const UserSchema = z.object({
  name: z.string().min(1, { message: 'Nome é obrigatório' }),
  email: z.string().email({ message: 'Formato do email inválido' }),
});
