
import React from 'react';

import { Modal } from 'flowbite-react';

import {
  Dialog as DialogCN,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shadcn/ui/dialog';

/*******
 * popup dialog modal
 *
 */
export default function Dialog({
  title = '',
  size = 'md',
  open = false,
  dismissible = false,
  onOpenChange = null,
  children,
  trigger,
  ...rest
}: any) {

  return (
    <section id="Dialog" >

      <DialogCN open={open} onOpenChange={onOpenChange} dismissible={dismissible} {...rest} >
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent  >
          <DialogHeader >
            <DialogTitle> {title} </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          {children}
          <DialogFooter></DialogFooter>
        </DialogContent>

      </DialogCN>
    </section>
  );

}
