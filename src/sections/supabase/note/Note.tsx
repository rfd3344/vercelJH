'use client';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Tabs, Textarea } from 'flowbite-react';

import { supabase } from 'src/libs/supabase';


export default function Note() {

  const [notes, setNotes] = useState([]);


  useEffect(() => {
    supabase.from('note').select().order('id').then((resp: any) => {
      setNotes(resp.data);
    });
  }, []);

  const handleChange = (id = 0, content = '') => {
    // console.warn('id', content, id);
    supabase.from('note').update({ content }).eq('id', id);
  };


  const handleInput = (e: any) => {
    const target = e.target;
    // console.warn(target.scrollHeight);
    if (target.scrollHeight < 500 || target.scrollHeight > 800) {
      return;
    }
    target.style.height = `${target.scrollHeight}px`;
  };

  return (

    <section id="Note" className='mt-2'>
      <div>
        <Tabs variant="fullWidth" className='[&_button]:px-1 gap-0'>
          {notes.map((item: any) => (
            <Tabs.Item key={item.id} title={item.title} >
              <Textarea
                rows={20}
                defaultValue={item.content}
                onInput={handleInput}
                // onChange={_.debounce((e) => handleChange(item.id, e.target.value), 2000)}
                onBlur={(e) => handleChange(item.id, e.target.value)}
              />
            </Tabs.Item>
          ))}
        </Tabs>

      </div>



    </section>


  );
}
