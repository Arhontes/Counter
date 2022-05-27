import React, {ChangeEvent, useState} from 'react';

export type SettingsPropsType={

}

function Settings(props:SettingsPropsType) {

    const [minMaxValue,setMinMaxValue] = useState([0,0])
    const [minValue, maxValue] = minMaxValue
    
    const setMaxValueHandler = (el:ChangeEvent<HTMLInputElement>)=>{
        if(+el.currentTarget.value>=minValue){
            const tempMaxValue = parseInt(el.currentTarget.value)
            setMinMaxValue([minValue, tempMaxValue])
        }
        else{
            alert("can't set maxValue")
        }


    }
    const setMinValueHandler = (el:ChangeEvent<HTMLInputElement>)=>{
        if(+el.currentTarget.value<maxValue){
            const tempMinValue = parseInt(el.currentTarget.value)
            setMinMaxValue([tempMinValue, maxValue])
        }
        else{
            alert("can't set minValue")
        }


    }


    return (
        <div>
            <input onChange={setMaxValueHandler} value={maxValue} type={"number"}/>
            <input onChange={setMinValueHandler}  value={minValue} type={"number"}/>
        </div>
    );
}

export default Settings;