import React from 'react';
// import React, { useState, useEffect } from 'react';
// import { Device } from '@capacitor/device';

import ErrorBoundary from 'src/components/ErrorBoundaries/ErrorBoundaries';
import Container from 'src/components/Container/Container';
import OptionsBtn from 'src/components/OptionsBtn/OptionsBtn';
import AudioButtons from 'src/components/AudioButtons/AudioButtons';

// interface DeviceInfo {
//   model: string;
//   platform: 'ios' | 'android' | 'web';
//   operatingSystem: 'ios' | 'android' | 'windows' | 'mac' | 'unknown';
//   osVersion: string;
//   manufacturer: string;
//   isVirtual: boolean;
//   webViewVersion: string;
// }

export default function App() {
  //   const [info, setInfo] = useState<Promise<DeviceInfo>>();

  //   useEffect(() => {
  //     const getDeviceInfo = async function (): Promise<DeviceInfo> {
  //       return await Device.getInfo();
  //     };
  //     setInfo(getDeviceInfo());
  //   }, []);

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
