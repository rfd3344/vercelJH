
import React from 'react';

import { Modal } from "flowbite-react";

/*******
 * popup dialog modal
 *
 */
export default function Dialog({
  title = '',
  size = 'md',
  open = false,
  sx = {},
  onClose = null,
  preventOutsideClose = false,
  children,
  titleVariant = 'h6',
  ...rest
}) {

  return (
    <section>
      111
    </section>
  );
  // return (

  //   <DialogMui
  //     open={open}
  //     onClose={preventOutsideClose ? null : onClose}
  //     fullWidth={true}
  //     maxWidth={size}
  //     sx={{
  //       '& .MuiDialog-paper': {
  //         m: 2,
  //         // maxeight
  //         width: '100%',
  //       },
  //       ...sx,
  //     }}
  //     {...rest}
  //   >
  //     <DialogTitle>
  //       <Grid container justifyContent="space-between" wrap="nowrap">
  //         <Grid item width="100%">
  //           <Typography variant={titleVariant} sx={{ fontWeight: 'bold' }}>{title}</Typography>
  //         </Grid>
  //         <Grid item>
  //           {onClose && (
  //             <IconButton onClick={onClose}>
  //               <CloseIcon />
  //             </IconButton>
  //           )}
  //         </Grid>
  //       </Grid>

  //     </DialogTitle>
  //     <DialogContent
  //       sx={{
  //         // p:1
  //         // p: {
  //         //   md: 1
  //         // }

  //       }}
  //     >
  //       {children}
  //     </DialogContent>
  //   </DialogMui>
  // );
}
