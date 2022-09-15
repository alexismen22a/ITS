import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import styles from './AddBtnModal.module.scss';
import TextInput from '../../Inputs/TextInput/TextInput';
import FieldsetGroup from '../../Inputs/FieldsetGroup/FieldsetGroup';
import RadioInput from '../../Inputs/FieldsetGroup/RadioInput/RadioInput';

export default function AddBtnModal() {
  const methods = useForm();
  function CreateAudioBtn(data) {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
    <form className={styles.container} onSubmit={methods.handleSubmit(CreateAudioBtn)}>
      <TextInput
        id="AddBtnName"
        label="name for the new button:"
        className={styles.textInput}
        placeholder="Run, Hug, etc..."
        registerAs="name"
      />
      <FieldsetGroup
        id="AddBtnAudio"
        className={styles.fieldset}
        legend="select an option for the audio"
      >
        <RadioInput
          id="AddBtnAudioRead"
          registerAs='AudioRead'
        >
          Read from text
        </RadioInput>
        <RadioInput
          id="AddBtnAudioRecord"
          registerAs='audioRecord'
        >
          record audio
        </RadioInput>
        <RadioInput
          id="AddBtnAudioImport"
          registerAs='audioImport'
        >
          import from file
        </RadioInput>
      </FieldsetGroup>
      
    </form>
    </FormProvider>
  );
}
