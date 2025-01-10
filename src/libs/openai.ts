import OpenAI from 'openai';

import { publicEnv } from 'src/core/envConfig';

// ref1: https://platform.openai.com/docs/guides/rate-limits?context=tier-free#usage-tiers


const openai = new OpenAI({
  apiKey: publicEnv().OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});


export const openAiChat = async (messages: any) => {

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    max_tokens: 150,
    messages,
  }).catch(e => {
    console.warn('OpenAI chat', e);
    return e;
  });


  return completion;
};


export const example = async () => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      { 'role': 'user', 'content': 'describe sydney' },
    ],
  });

  return completion;
};