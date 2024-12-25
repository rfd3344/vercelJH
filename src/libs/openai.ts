import OpenAI from 'openai';

import { publicEnv } from 'src/core/envConfig';



const openai = new OpenAI({ apiKey: publicEnv().OPENAI_KEY });


export const example = async () => {

  const completion = await openai.chat.completions.create({
    model: 'text-embedding-ada-002',
    // store: true,
    messages: [
      {'role': 'user', 'content': 'write a haiku about ai'},
    ],
  });

  console.log(completion.choices[0].message);
  return completion;
};