'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof contactSchema>) {
  const parsed = contactSchema.safeParse(values);
  if (!parsed.success) {
    return { success: false, error: 'Invalid input.' };
  }
  // In a real app, you'd send an email or save to a database here.
  console.log('New contact form submission:', parsed.data);
  return { success: true };
}
