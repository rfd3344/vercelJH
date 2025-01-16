'use client';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Tabs, Textarea } from 'flowbite-react';

import Accordion from 'src/components/dataDisplay/Accordion';
import { supabase } from 'src/libs/supabase';




export default function Note() {

  const [notes, setNotes] = useState([]);

  const handleBlur = (id: any, content = '') => {

    supabase.from('note').update({ content }).eq('id', id);
  };
  useEffect(() => {
    supabase.from('note').select().order('id').then((resp: any) => {
      setNotes(resp.data);
    });
  }, []);


  return (

    <section id="Note" className='mt-2'>
      <div>
        <Tabs variant="fullWidth" className='[&_button]:px-1 gap-0'>
          {notes.map((item: any) => (
            <Tabs.Item key={item.id} title={item.title} >
              <Textarea
                rows={16}
                defaultValue={item.content}
                onBlur={(e) => handleBlur(item.id, e.target.value)}
              />
            </Tabs.Item>
          ))}
        </Tabs>

      </div>



    </section>


  );
}
