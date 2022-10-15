import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import styles from 'src/components/Form/Form.module.scss';
import type { CreateBtnFormValues } from 'src/components/Modal/ModalAddBtn/ModalAddBtn';
import type { EditBtnFormValues } from 'src/components/Modal/ModalEditBtn/ModalEditBtn';

type SubmitHandler = (data: Object, e: React.FormEvent<HTMLFormElement>) => void;
type SubmitHandlerError = (errors: Object, e: React.FormEvent<HTMLFormElement>) => void;

interface FormProps {
  children: JSX.Element | Array<JSX.Element>;
  submit: SubmitHandler;
  submitErrors?: SubmitHandlerError;
}

export default function Form({ children, submit, submitErrors }: FormProps): JSX.Element {
  const methods = useForm<CreateBtnFormValues | EditBtnFormValues>();

  return (
    <FormProvider {...methods}>
      <form className={styles.container} onSubmit={methods.handleSubmit(submit, submitErrors)}>
        {children}
      </form>
    </FormProvider>
  );
}
