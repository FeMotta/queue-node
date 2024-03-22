import { ZodError } from 'zod';

import prisma from '../../config/prisma';

import Queue from '../lib/Queue';

import { UserSchema } from '../schemas/userSchema';

export default {
  async index(req, res) {
    const users = await prisma.users.findMany();

    return res.json(users);
  },

  async store(req, res) {
    try {
      const { name, email } = UserSchema.parse(req.body);

      const user = await prisma.users.create({
        data: {
          name,
          email,
        },
      });

      await Queue.add('RegistrationMail', { user });

      return res.json(user);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.errors });
      }

      if (error.code === 'P2002') {
        return res.status(400).json({ error: 'Email já existe' });
      }

      return res.status(500).json({ error: 'Internal server error' });
    }
  },
};
