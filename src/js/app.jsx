import React from "react";
import SwitchBtnPage from './plugin/SwitchBtnPage'
export default function App(){
    const switchChange=(val)=>{
        console.log('这里',val)
    }
    return(
        <SwitchBtnPage value={false} switchChange={switchChange}/>
    )
}