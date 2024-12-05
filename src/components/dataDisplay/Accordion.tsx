import React, { useState, useEffect } from 'react';
import _ from 'lodash';


import { Accordion as AccordionFlowbite, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';


export default function Accordion({
  defaultExpandIndex,
  data = [], // [{ summary: 'summary', details: 'details' }]
  onChange = (index = 0) => { },
  ...rest
}: any) {


  return (
    <AccordionFlowbite>
      {data.map((item: any) => (
        <AccordionPanel key={item.summary}>
          <AccordionTitle className='py-3 [&_h2]:text-h5' >{item?.summary}</AccordionTitle>
          <AccordionContent>
            {item?.details}
          </AccordionContent>
        </AccordionPanel>
      ))}


    </AccordionFlowbite>
  );
}
