'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Wand2, Sparkles, Loader2, ClipboardCopy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { handleGenerateHighlightReel, handleGetStyleSuggestions } from '@/app/actions';
import type { GenerateHighlightReelOutput, StyleSuggestionsOutput } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const highlightReelSchema = z.object({
  videoProjectDescriptions: z.string().min(20, 'Please provide a more detailed description of your projects.'),
  desiredReelLengthSeconds: z.coerce.number().int().positive('Please enter a positive number for the reel length.'),
  targetAudience: z.string().min(3, 'Please describe your target audience.'),
});

const styleAssistSchema = z.object({
  videoDescription: z.string().min(10, 'Please provide a description of your video.'),
  targetAudience: z.string().min(3, 'Please describe your target audience.'),
});


export default function AIStudio() {
  const { toast } = useToast();

  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: 'Copied!',
      description: message,
    });
  };

  function HighlightReelGenerator() {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<GenerateHighlightReelOutput | null>(null);
    const form = useForm<z.infer<typeof highlightReelSchema>>({
      resolver: zodResolver(highlightReelSchema),
      defaultValues: {
        videoProjectDescriptions: '',
        desiredReelLengthSeconds: 60,
        targetAudience: '',
      },
    });

    function onSubmit(values: z.infer<typeof highlightReelSchema>) {
      startTransition(async () => {
        const res = await handleGenerateHighlightReel(values);
        if (res.error) {
           toast({ title: "Error", description: res.error, variant: 'destructive' });
        } else {
          setResult(res);
        }
      });
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>Highlight Reel Generator</CardTitle>
          <CardDescription>
            Let AI create a compelling summary and suggest clips for your best projects.
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="videoProjectDescriptions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Descriptions</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your video projects, their goals, and key moments..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="desiredReelLengthSeconds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reel Length (seconds)</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="targetAudience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Target Audience</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Tech startups, young families" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Generate Reel Idea
              </Button>
            </CardFooter>
          </form>
        </Form>
        {isPending && <div className="p-6 text-center"><Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" /></div>}
        {result && (
          <div className="p-6 border-t">
            <h3 className="text-xl font-semibold mb-4">Generated Highlight Reel Plan</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold flex items-center">Reel Summary <Button variant="ghost" size="icon" className="ml-2 h-6 w-6" onClick={() => copyToClipboard(result.reelSummary, "Summary copied to clipboard.")}><ClipboardCopy className="h-4 w-4" /></Button></h4>
                <p className="text-muted-foreground">{result.reelSummary}</p>
              </div>
              <div>
                <h4 className="font-bold">Suggested Clips</h4>
                <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
                  {result.suggestedClips.map((clip, index) => (
                    <li key={index}>{clip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </Card>
    );
  }

  function StyleAssistant() {
    const [isPending, startTransition] = useTransition();
    const [result, setResult] = useState<StyleSuggestionsOutput | null>(null);
    const form = useForm<z.infer<typeof styleAssistSchema>>({
      resolver: zodResolver(styleAssistSchema),
      defaultValues: { videoDescription: '', targetAudience: '' },
    });

    function onSubmit(values: z.infer<typeof styleAssistSchema>) {
      startTransition(async () => {
        const res = await handleGetStyleSuggestions(values);
        if (res.error) {
           toast({ title: "Error", description: res.error, variant: 'destructive' });
        } else {
          setResult(res);
        }
      });
    }

    return (
      <Card>
        <CardHeader>
          <CardTitle>Style Assist</CardTitle>
          <CardDescription>Get AI-driven style suggestions to make your video pop.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="videoDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video Content Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., A fast-paced travel vlog through Tokyo..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Audience</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Adventure seekers, foodies" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                Get Suggestions
              </Button>
            </CardFooter>
          </form>
        </Form>
        {isPending && <div className="p-6 text-center"><Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" /></div>}
        {result && (
          <div className="p-6 border-t">
            <h3 className="text-xl font-semibold mb-4">Style Suggestions</h3>
            <div className="space-y-4">
               <div>
                <h4 className="font-bold">Suggested Styles</h4>
                <ul className="list-disc list-inside mt-2 space-y-2 text-muted-foreground">
                  {result.styleSuggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold flex items-center">Reasoning <Button variant="ghost" size="icon" className="ml-2 h-6 w-6" onClick={() => copyToClipboard(result.reasoning, "Reasoning copied to clipboard.")}><ClipboardCopy className="h-4 w-4" /></Button></h4>
                <p className="text-muted-foreground">{result.reasoning}</p>
              </div>
            </div>
          </div>
        )}
      </Card>
    );
  }


  return (
    <section id="ai-studio" className="py-16 sm:py-24 bg-card animate-in fade-in-0 duration-1000">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">AI Studio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Leverage the power of AI to jumpstart your creative process.
          </p>
        </div>
        <Tabs defaultValue="reel-generator" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="reel-generator">
              <Wand2 className="mr-2 h-4 w-4" /> Highlight Reel Generator
            </TabsTrigger>
            <TabsTrigger value="style-assist">
              <Sparkles className="mr-2 h-4 w-4" /> Style Assist
            </TabsTrigger>
          </TabsList>
          <TabsContent value="reel-generator" className="mt-6">
            <HighlightReelGenerator />
          </TabsContent>
          <TabsContent value="style-assist" className="mt-6">
            <StyleAssistant />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
