import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import { useAppSelector, useAppDispatch } from 'src/hooks/redux';
import styles from 'src/components/Modal/ModalAddBtn/ModalAddBtn.module.scss';
import { setText, setRecord, setImport } from 'src/components/Modal/ModalAddBtn/audioOptionsSlice';
import {
  setGallery,
  setImport as setImageImport,
  setNone,
} from 'src/components/Modal/ModalAddBtn/imageOptionSlice';
import TextInput from 'src/components/Inputs/TextInput/TextInput';
import FieldsetGroup from 'src/components/Inputs/FieldsetGroup/FieldsetGroup';
import RadioInput from 'src/components/Inputs/FieldsetGroup/RadioInput/RadioInput';
import SwitchRenderer from 'src/components/SwitchRenderer/SwitchRenderer';

interface CreateBtnFormValues {
  name: string;
  audioOption: 'AudioRead' | 'AudioRecord' | 'AudioImport';
  imageOption: 'GalleryImage' | 'ImportImage' | 'NoImage';
}

export default function AddBtnModal() {
  const methods = useForm<CreateBtnFormValues>();
  const audiOption = useAppSelector((state) => state.audioOptions.value);
  const imageOption = useAppSelector((state) => state.imageOptions.value);
  const dispatch = useAppDispatch();

  const CreateAudioBtn: SubmitHandler<CreateBtnFormValues> = (data) => {
    console.log(data);
  };

  return (
    <>
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
            name="audioOption"
            className={styles.fieldsetAudio}
            legend="select an option for the audio"
            registerAs={true}
          >
            <RadioInput
              id="AddBtnAudioRead"
              value="AudioRead"
              checked={audiOption === 'text'}
              onChange={() => dispatch(setText())}
            >
              Read from text
            </RadioInput>
            <RadioInput
              id="AddBtnAudioRecord"
              value="AudioRecord"
              checked={audiOption === 'record'}
              onChange={() => dispatch(setRecord())}
            >
              record audio
            </RadioInput>
            <RadioInput
              id="AddBtnAudioImport"
              value="AudioImport"
              checked={audiOption === 'import'}
              onChange={() => dispatch(setImport())}
            >
              import from file
            </RadioInput>
          </FieldsetGroup>
          <SwitchRenderer validate={audiOption}>
            <TextInput
              id="textToAudio"
              className={styles.audiOption}
              placeholder="text to read goes here"
              type="secondary"
              case="text"
            />
          </SwitchRenderer>
          <FieldsetGroup
            name="imageOption"
            className={styles.fieldsetImage}
            legend="select an option for the picture"
            registerAs={true}
          >
            <RadioInput
              id="AddBtnGalleryImage"
              value="GalleryImage"
              checked={imageOption === 'gallery'}
              onChange={() => dispatch(setGallery())}
            >
              Select from our gallery
            </RadioInput>
            <RadioInput
              id="AddBtnImportImage"
              value="ImportImage"
              checked={imageOption === 'import'}
              onChange={() => dispatch(setImageImport())}
            >
              import Image
            </RadioInput>
            <RadioInput
              id="AddBtnNoImage"
              value="NoImage"
              checked={imageOption === 'none'}
              onChange={() => dispatch(setNone())}
            >
              Let us choose for you
            </RadioInput>
          </FieldsetGroup>
          {/* <SwitchRenderer validate={imageOption}></SwitchRenderer> */}
        </form>
      </FormProvider>
    </>
  );
}
