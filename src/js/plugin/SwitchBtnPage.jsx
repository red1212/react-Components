import React, { useState,useEffect } from 'react';
import { Switch } from 'antd';

const SwitchBtn = (props)=>{
   const [val,setVal] = useState(true)
   useEffect(()=>{
    if(props && props.value !=undefined){
      setVal(props.val)
    }
   },[])

  const onChange = (checked) => {
    if(props && props.switchChange){
      props.switchChange(checked)
    }
  };

  return(
    <Switch checked={val} onChange={onChange} />
  )
};

export default SwitchBtn;