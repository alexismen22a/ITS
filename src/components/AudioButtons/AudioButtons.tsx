import React from 'react';

import { useAppSelector } from 'src/hooks/redux';
import AudioBtn from 'src/components/AudioButtons/AudioBtn/AudioBtn';
import AddAudioButton from 'src/components/AudioButtons/AddAudioBtn/AddAudioBtn';
import { selectButtons } from 'src/components/AudioButtons/audioButtonsSlice';

export default function AudioButtons() {
  const buttons = useAppSelector(selectButtons);

  return (
    <>
      {buttons.map((btn) => {
        return <AudioBtn key={btn.id} btn={btn}></AudioBtn>;
      })}
      <AddAudioButton />
    </>
  );
}
