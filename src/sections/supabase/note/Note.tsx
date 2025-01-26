'use client';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcn/ui/tabs';
import { Textarea } from '@shadcn/ui/textarea';

import { supabase } from 'src/libs/supabase';


export default function Note() {

  const [notes, setNotes] = useState<any>({});


  useEffect(() => {
    supabase.from('note').select().eq('active', true).order('id').then((resp: any) => {
      const nextNotes = _.keyBy(resp.data, 'id');
      setNotes(nextNotes);
    });
  }, []);

  const handleBlur = (id = 0, content = '') => {
    if (notes[id].content === content) return;

    supabase.from('note').update({ content }).eq('id', id).select().then((resp: any) => {
      const data = resp?.data[0];
      setNotes({
        ...notes,
        [data.id]: data,
      });
    });
  };


  const handleInput = (e: any) => {
    const target = e.target;

    if (target.scrollHeight < 500 || target.scrollHeight > 800) {
      return;
    }

    target.style.height = `${target.scrollHeight}px`;
  };

  return (
    <section id="Note" className='mt-2'>

      <div>
        <Tabs defaultValue="✍️ Temp" className='[&_button]:px-1 gap-0'>
          <TabsList className="flex w-full justify-between [&_button]:w-full ">
            {_.values(notes).map((item: any) => (
              <TabsTrigger key={item.title} value={item.title}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {_.values(notes).map((item: any) => (
            <TabsContent key={item.title} value={item.title}>
              <Textarea
                rows={20}
                defaultValue={item.content}
                onInput={handleInput}
                onBlur={(e) => handleBlur(item.id, e.target.value)}
              />
            </TabsContent>
          ))}
        </Tabs>

      </div>
    </section>
  );
}
