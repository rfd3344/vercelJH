// import React from 'react';
// import _ from 'lodash';
// import { useForm } from 'src/hooks';
// import { Controller } from 'react-hook-form';

// export default function FormContoller({
//   name = '',
//   label,
//   rules,
//   formObj,
//   value = '',
//   onChange,
//   render,
//   ...rest
// }: IProps) {
//   const displayLabel = _.isString(label) ? label : _.startCase(name);

//   const controllerName = name || 'mock';
//   const mockForm = useForm({ [controllerName]: value });

//   // if (!formObj?.control) {
//   //   return render({
//   //     name,
//   //     label: displayLabel,
//   //     onChange: onChange,
//   //     defaultValue: value,
//   //     // onBlur: onBlur,
//   //     ...rest
//   //   });
//   // }
//   // console.warn(formObj, formFolk)

//   return (
//     <Controller
//       name={controllerName}
//       rules={rules}
//       control={formObj?.control || mockForm.formObj.control}
//       render={({ field }) =>
//         render({
//           ...field,
//           onChange: (e: ChangeEvent) => {
//             onChange(e);
//             field.onChange(e);
//           },
//           value: field.value || '',
//           label: displayLabel,
//           errorMessage: formObj?.errors[name]?.message,
//         })
//       }
//       {...rest}
//     />
//   );
// }

// type IProps = {
//   // name?: string;
//   // formObj?: any;
//   [key: string]: any;
// };
