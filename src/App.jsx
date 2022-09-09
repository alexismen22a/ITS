import React, {useState, useEffect} from "react";
import { Device } from "@capacitor/device";
import Container from "./components/Container.jsx"

export default function App() {
    const [info, setInfo] = useState({});

    useEffect(()=> {
        const getDeviceInfo = async function() {
            return await Device.getInfo()
        }
        setInfo(getDeviceInfo())
    }, [])
        
//    if (info.platform === 'ios' || info.platform === 'android'){ 
    return (
        <>
            <Container>
                <h1>Hello world</h1>
            </Container>
        </>
    )
    // }else {
    // return (
    //     <>
    //         <h1>Web</h1>
    //     </>
    // )
//   }
}
