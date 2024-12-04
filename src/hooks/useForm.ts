// import { useState, useMemo } from 'react';
// import _ from 'lodash';
// import { useForm as useReactHookForm } from 'react-hook-form';

// /************************************************************************************************
//  * isDirty should be managed manually
//  * @arg editor - initial values
//  * @arg args - check https://react-hook-form.com/api/useform
//  *
//  *
//  * @return {Object} { formObj, isDirty,setIsDirty ...rest }
//  *
//  *
//  */
// export default function useForm(editor = {}, args = {}) {
//   const {
//     control,
//     formState,
//     handleSubmit: handleFormSubmit,
//     ...form
//   } = useReactHookForm({
//     values: editor,
//     resetOptions: {
//       keepIsSubmitted: true,
//       keepDirty: true,
//       keepErrors: true,
//       // keepSubmitCount: boolean;
//       // keepDirtyValues: boolean;
//       // keepDirty: boolean;
//       // keepValues: true,
//       // keepDefaultValues: boolean;
//       // keepTouched: boolean;
//       // keepIsValid: boolean;
//     },
//     // reValidateMode: 'onChange',
//     // criteriaMode: 'all',
//     ...args,
//   });

//   const formObj = {
//     control,
//     errors: formState.errors,
//   };

//   const handleSubmit = (onValid: (data: any) => void) =>
//     handleFormSubmit((data) => {
//       form.reset(editor, { keepDirty: false });
//       onValid(data);
//     });

//   return {
//     ...form,
//     handleSubmit,
//     formObj,
//     formState,
//     isDirty: formState.isDirty,
//   };
// }
