'use client';
import _ from 'lodash';
import { useForm as useReactHookForm, UseFormReturn } from 'react-hook-form';

/************************************************************************************************
 * isDirty should be managed manually
 * @arg editor - initial values
 * @arg args - check https://react-hook-form.com/api/useform
 *
 *
 */
export function useForm(editor = {}, args = {}) {
  const {
    control,
    formState,
    getValues,
    handleSubmit,
    clearErrors,
    ...form
  }: UseFormReturn = useReactHookForm({
    values: editor,
    resetOptions: {
      keepIsSubmitted: true,
      keepDirty: true,
      keepErrors: true,
      // keepSubmitCount: boolean;
      // keepDirtyValues: boolean;
      // keepDirty: boolean;
      // keepValues: true,
      // keepDefaultValues: boolean;
      // keepTouched: boolean;
      // keepIsValid: boolean;
    },
    // reValidateMode: 'onChange',
    // criteriaMode: 'all',
    ...args,
  });

  const formObj = {
    control,
    errors: formState.errors,
    getValues,
    clearErrors,
  };

  return {
    ...form,
    handleSubmit,
    formObj,
    getValues,
    formState,
    clearErrors,
    isDirty: formState.isDirty,
  };
}
