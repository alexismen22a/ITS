import React, { useState, useEffect, useId } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { useAppSelector } from 'src/hooks/redux';
import styles from 'src/components/Modal/ModalEditBtn/ModalEditBtn.module.scss';
import Form from 'src/components/Form/Form';
import TextInput from 'src/components/Inputs/TextInput/TextInput';
import CustomImageChanger from 'src/components/Inputs/CustomImageChanger/CustomImageChanger';
import type { Button } from 'src/types';
import FieldsetGroup from 'src/components/Inputs/FieldsetGroup/FieldsetGroup';
import RadioInput from 'src/components/Inputs/FieldsetGroup/RadioInput/RadioInput';
import SubmitButton from 'src/components/Inputs/SubmitButton/SubmitButton';

export interface EditBtnFormValues {
  name: string;
}

interface ModalEditBtnProps {
  id: string;
}

const ModalEditBtn: (props: ModalEditBtnProps) => JSX.Element = function ({ id }): JSX.Element {
  const Button: Button = useAppSelector((state) => {
    const returnValue = state.buttons.store.find((btn) => btn.id === id);
    if (!returnValue) throw new Error('Button was not found');
    return returnValue;
  });
  const [nameInput, setNameInput] = useState('');
  const uniqueId = useId();

  useEffect(() => {
    setNameInput(Button.name);
  }, [Button]);

  const EditButton: SubmitHandler<EditBtnFormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form submit={EditButton}>
      <TextInput
        id={`${uniqueId}-BtnName`}
        label="edit the name:"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
        className={styles.nameInput}
        registerAs="name"
      />
      <CustomImageChanger className={styles.fieldsetImage} img={Button.img} name="imageSelection" />
      <FieldsetGroup
        name={`${uniqueId}-audioOption`}
        legend="edit audio:"
        registerAs={true}
        className={styles.fieldsetAudio}
      >
        <RadioInput id={`${uniqueId}-AddBtnAudioRead`} value="AudioRead">
          Read from text
        </RadioInput>
        <RadioInput id={`${uniqueId}-AddBtnAudioRecord`} value="AudioRecord">
          record audio
        </RadioInput>
        <RadioInput id={`${uniqueId}-AddBtnAudioImport`} value="AudioImport">
          import from file
        </RadioInput>
      </FieldsetGroup>
      <SubmitButton className={styles.submit} type="secondary">
        Confirm edit
      </SubmitButton>
    </Form>
  );
};

export default ModalEditBtn;
