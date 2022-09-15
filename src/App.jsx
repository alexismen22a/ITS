import React, { useState, useEffect } from 'react';
import { Device } from '@capacitor/device';

import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries.jsx';
import Container from './components/Container/Container.jsx';
import OptionsBtn from './components/OptionsBtn/OptionsBtn.jsx';
import AudioButtons from './components/AudioButtons/AudioButtons.jsx';

export default function App() {
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getDeviceInfo = async function () {
      return await Device.getInfo();
    };
    setInfo(getDeviceInfo());
  }, []);

  //    if (info.platform === 'ios' || info.platform === 'android'){
  return (
    <>
      <Container>
        <ErrorBoundary>
          <OptionsBtn />
        </ErrorBoundary>
        <ErrorBoundary>
          <AudioButtons />
        </ErrorBoundary>
      </Container>
    </>
  );
  // }else {
  // return (
  //     <>
  //         <h1>Web</h1>
  //     </>
  // )
  //   }
}
