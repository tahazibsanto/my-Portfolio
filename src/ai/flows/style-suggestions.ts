'use server';
/**
 * @fileOverview An AI agent that generates style suggestions for video reels based on current trends.
 *
 * - getStyleSuggestions - A function that generates style suggestions for video reels.
 * - StyleSuggestionsInput - The input type for the getStyleSuggestions function.
 * - StyleSuggestionsOutput - The return type for the getStyleSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const StyleSuggestionsInputSchema = z.object({
  videoDescription: z
    .string()
    .describe('A description of the video reel content.'),
  targetAudience: z
    .string()
    .describe('The target audience for the video reel.'),
});
export type StyleSuggestionsInput = z.infer<typeof StyleSuggestionsInputSchema>;

const StyleSuggestionsOutputSchema = z.object({
  styleSuggestions: z
    .array(z.string())
    .describe('A list of style suggestions for the video reel.'),
  reasoning: z
    .string()
    .describe('The AI’s reasoning for the style suggestions.'),
});
export type StyleSuggestionsOutput = z.infer<typeof StyleSuggestionsOutputSchema>;

export async function getStyleSuggestions(input: StyleSuggestionsInput): Promise<StyleSuggestionsOutput> {
  return styleSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'styleSuggestionsPrompt',
  input: {schema: StyleSuggestionsInputSchema},
  output: {schema: StyleSuggestionsOutputSchema},
  prompt: `You are a creative consultant who generates style suggestions for video reels based on current trends.

  Given the following video reel description and target audience, provide a list of style suggestions that would make the video more visually appealing and engaging.

  Video Description: {{{videoDescription}}}
  Target Audience: {{{targetAudience}}}

  Consider current trends in video editing, color grading, music, and overall aesthetic.
  Also explain your reasoning for why the styles apply.

  Format your output as a JSON object with 'styleSuggestions' and 'reasoning' fields.`,
});

const styleSuggestionsFlow = ai.defineFlow(
  {
    name: 'styleSuggestionsFlow',
    inputSchema: StyleSuggestionsInputSchema,
    outputSchema: StyleSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
