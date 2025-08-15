'use server';

import { z } from 'zod';
import { generateHighlightReel } from '@/ai/flows/generate-highlight-reel';
import { getStyleSuggestions } from '@/ai/flows/style-suggestions';
import type { GenerateHighlightReelInput, StyleSuggestionsInput } from '@/lib/types';

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


export async function handleGenerateHighlightReel(input: GenerateHighlightReelInput) {
  try {
    const result = await generateHighlightReel(input);
    return result;
  } catch (error) {
    console.error('Error generating highlight reel:', error);
    return { error: 'Failed to generate highlight reel. Please try again.' };
  }
}

export async function handleGetStyleSuggestions(input: StyleSuggestionsInput) {
  try {
    const result = await getStyleSuggestions(input);
    return result;
  } catch (error) {
    console.error('Error getting style suggestions:', error);
    return { error: 'Failed to get style suggestions. Please try again.' };
  }
}
