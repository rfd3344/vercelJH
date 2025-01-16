'use client';
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Textarea } from 'flowbite-react';
import Accordion from 'src/components/dataDisplay/Accordion';
import { supabase } from 'src/libs/supabase';




export default function Note() {

  const [notes, setNotes] = useState([]);

  const handleBlur = (id: any, content = '') => {
    supabase.from('note').update({ content }).eq('id', id).then(resp => {
      console.warn(resp);
    });
  };
  useEffect(() => {
    supabase.from('note').select().order('id').then((resp: any) => {

      const nextNotes = resp.data.map((item: any) => ({
        summary: item.title,
        details: (
          <Textarea
            defaultValue={item.content}
            rows={8}
            onBlur={(e) => handleBlur(item.id, e.target.value)}
          />
        ),
      }));
      setNotes(nextNotes);
    });
  }, []);


  return (
    <div>

      <section id="Note" className=' mt-2'>
        <Accordion
          defaultExpandIndex={3}
          data={notes}
        />


      </section>
    </div>

  );
}
