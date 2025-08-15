export interface Video {
  id: number;
  title: string;
  description: string;
  thumbnailUrl: string;
  youtubeUrl: string;
  aiHint: string;
}

export type GenerateHighlightReelInput = {
  videoProjectDescriptions: string;
  desiredReelLengthSeconds: number;
  targetAudience: string;
};

export type GenerateHighlightReelOutput = {
  reelSummary: string;
  suggestedClips: string[];
};

export type StyleSuggestionsInput = {
  videoDescription: string;
  targetAudience: string;
};

export type StyleSuggestionsOutput = {
  styleSuggestions: string[];
  reasoning: string;
};
