'use server';

/**
 * @fileOverview An AI agent to generate a highlight reel of best video projects.
 *
 * - generateHighlightReel - A function that handles the highlight reel generation process.
 * - GenerateHighlightReelInput - The input type for the generateHighlightReel function.
 * - GenerateHighlightReelOutput - The return type for the generateHighlightReel function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateHighlightReelInputSchema = z.object({
  videoProjectDescriptions: z
    .string()
    .describe("A detailed description of the user's video projects, including key features and accomplishments."),
  desiredReelLengthSeconds: z
    .number()
    .int()
    .positive()
    .describe('The desired length of the highlight reel in seconds.'),
  targetAudience: z.string().describe('The target audience for the highlight reel.'),
});
export type GenerateHighlightReelInput = z.infer<typeof GenerateHighlightReelInputSchema>;

const GenerateHighlightReelOutputSchema = z.object({
  reelSummary: z.string().describe('A summary of the generated highlight reel.'),
  suggestedClips: z.array(z.string()).describe('A list of suggested video clips to include in the highlight reel, with descriptions of why they are suitable.'),
});
export type GenerateHighlightReelOutput = z.infer<typeof GenerateHighlightReelOutputSchema>;

export async function generateHighlightReel(input: GenerateHighlightReelInput): Promise<GenerateHighlightReelOutput> {
  return generateHighlightReelFlow(input);
}

const generateHighlightReelPrompt = ai.definePrompt({
  name: 'generateHighlightReelPrompt',
  input: {schema: GenerateHighlightReelInputSchema},
  output: {schema: GenerateHighlightReelOutputSchema},
  prompt: `You are an expert video editor creating highlight reels for your clients.

You will take descriptions of the video projects and suggest a list of clips to include in a highlight reel. The highlight reel should be tailored to the target audience.

Video Project Descriptions: {{{videoProjectDescriptions}}}
Desired Reel Length (seconds): {{{desiredReelLengthSeconds}}}
Target Audience: {{{targetAudience}}}

Based on the project descriptions, desired reel length, and target audience, generate a reel summary and suggest clips to be used.

Reel Summary: Briefly summarize the overall theme and focus of the highlight reel.
Suggested Clips: List specific clips from the video projects that would be most impactful for the highlight reel. For each clip, provide a brief description of the clip and why it's suitable for the reel.
`,
});

const generateHighlightReelFlow = ai.defineFlow(
  {
    name: 'generateHighlightReelFlow',
    inputSchema: GenerateHighlightReelInputSchema,
    outputSchema: GenerateHighlightReelOutputSchema,
  },
  async input => {
    const {output} = await generateHighlightReelPrompt(input);
    return output!;
  }
);
