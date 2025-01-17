'use client';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Tabs, Textarea } from 'flowbite-react';

import { supabase } from 'src/libs/supabase';


export default function Note() {

  const [notes, setNotes] = useState<any>({});


  useEffect(() => {
    supabase.from('note').select().order('id').then((resp: any) => {
      const nextNotes = _.keyBy(resp.data, 'id');
      setNotes(nextNotes);
    });
  }, []);

  const handleBlur = (id = 0, content = '') => {
    if(notes[id].content === content) return;

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
        <Tabs variant="fullWidth" className='[&_button]:px-1 gap-0'>
          {_.values(notes).map((item: any) => (
            <Tabs.Item key={item.id} title={item.title} >
              <Textarea
                rows={20}
                defaultValue={item.content}
                onInput={handleInput}
                onBlur={(e) => handleBlur(item.id, e.target.value)}
              />
            </Tabs.Item>
          ))}
        </Tabs>

      </div>
    </section>
  );
}
