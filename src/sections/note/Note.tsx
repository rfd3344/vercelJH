'use client';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shadcn/ui/tabs';
import { Textarea } from '@shadcn/ui/textarea';


export default function Note() {

  const [notes, setNotes] = useState<any>({});
  const [tab, setTab] = useState('Temp');

  useEffect(() => {
    fetch('/api/mongo/note').then(async resp => {
      const notes = await resp.json();
      const nextNotes = _.keyBy(notes, '_id');
      setNotes(nextNotes);
    });

  }, []);

  const handleBlur = (_id = 0, content = '') => {
    if (notes[_id].content === content) return;

    fetch('/api/mongo/note', {
      method: 'PATCH',
      body: JSON.stringify({ _id, content }),
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
        <Tabs
          value={tab}
          className='[&_button]:px-1 gap-0'
          onValueChange={(value: any) => setTab(value)}
        >
          <TabsList className="flex w-full justify-between [&_button]:w-full ">
            {_.values(notes).map((item: any) => (
              <TabsTrigger key={item.title} value={item.title}>
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {_.values(notes).map((item: any) => (
            <TabsContent key={item.title} value={item.title}
              forceMount
              hidden={item.title !== tab}
            >
              <Textarea
                rows={20}
                defaultValue={item.content}
                onInput={handleInput}
                onBlur={(e) => handleBlur(item._id, e.target.value)}
              />
            </TabsContent>
          ))}
        </Tabs>


      </div>
    </section>
  );
}
