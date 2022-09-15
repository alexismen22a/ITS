import React, { useState } from "react";

import AudioBtn from "./AudioBtn/AudioBtn";
import AddAudioButton from "./AddAudioBtn/AddAudioBtn";

export default function AudioButtons() {
  const [buttons, setButtons] = useState(
    new Array(12).fill({ img: "/galery/example.png" })
  );
  return (
    <>
      {buttons.map((btn, index) => {
        return (
          <AudioBtn
            key={index}
            imgUrl={btn.img}
            data-type="botonazo"
          ></AudioBtn>
        );
      })}
      <AddAudioButton />
    </>
  );
}
