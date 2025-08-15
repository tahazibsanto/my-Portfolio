export interface Video {
  id: number;
  title: string;
  thumbnailUrl: string;
  videoUrl: string;
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
