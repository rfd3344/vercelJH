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
    // model: 'text-embedding-3-small',
    // model: 'o1-preview',

    // store: true,
    messages: [
      { 'role': 'user', 'content': 'write a haiku about ai' },
    ],
  });

  console.log(completion.choices[0].message);
  return completion;
};