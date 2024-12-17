
import React from 'react';

import { Modal } from 'flowbite-react';

/*******
 * popup dialog modal
 *
 */
export default function Dialog({
  title = '',
  size = 'md',
  open = false,
  dismissible = false,
  onClose = null,
  children,
  ...rest
}: any) {

  return (
    <section>
      <Modal show={open} onClose={onClose} dismissible={dismissible} {...rest} >
        <Modal.Header className='ml-4 [&_h3]:text-h4'>
          {title}
        </Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
      </Modal>
    </section>
  );

}
