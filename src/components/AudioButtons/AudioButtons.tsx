import React from 'react';

import AudioBtn from './AudioBtn/AudioBtn';
import AddAudioButton from './AddAudioBtn/AddAudioBtn';

interface Buttons {
  name: string;
  img: string;
}

export default function AudioButtons() {
  const buttons: Array<Buttons> = new Array(12).fill({ name: 'example', img: 'example.png' });
  return (
    <>
      {buttons.map((btn, index) => {
        return <AudioBtn key={`audioBtn${index}`} imgUrl={btn.img}></AudioBtn>;
      })}
      <AddAudioButton />
    </>
  );
}
