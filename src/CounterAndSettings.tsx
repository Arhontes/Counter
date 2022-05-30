import React, {ChangeEvent, useEffect, useState} from 'react';
import Counter from "./components/Counter/Counter/Counter";
import Settings from "./components/Settings/Settings";
import s from './App.module.css'



function CounterAndSettings() {

    const [minMaxValue,setMinMaxValue] = useState([10,10])
    const [minValue, maxValue] = minMaxValue
    useEffect(()=>{
        setMinMaxValue(getMinMaxValueFromLocalStorage())
    },[])

    const [value, setValue] = useState<number>(10)
    useEffect(()=>{
        let valueAsString = localStorage.getItem("value")
        if(valueAsString){
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    },[])
    useEffect(()=>{
        setValueToLocalStorage()
    },[value])


    const incHandler = () => {
        if (value < maxValue) {
            setValue(value+1)
        }
    }
    const setMaxValueHandler = (el:ChangeEvent<HTMLInputElement>)=>{
        if(+el.currentTarget.value>minValue){
            const tempMaxValue = parseInt(el.currentTarget.value)
            setMinMaxValue([minValue, tempMaxValue])
        }
    }
    const setMinValueHandler = (el:ChangeEvent<HTMLInputElement>)=>{
        if(+el.currentTarget.value < maxValue){
            const tempMinValue = parseInt(el.currentTarget.value)
            setMinMaxValue([tempMinValue, maxValue])
        }
    }

    const getMinMaxValueFromLocalStorage =()=>{
        let minMaxFromLocalStorage = localStorage.getItem("MinMaxValue")
        let newMinMax:Array<number> = []
        if(minMaxFromLocalStorage) JSON.parse(minMaxFromLocalStorage,(k,v)=>{
            k!==""&&newMinMax.push(parseInt(v))
        })
        return newMinMax
    }
    const setSettingsToLocalStorage = ()=>{
        localStorage.setItem("MinMaxValue",JSON.stringify(minMaxValue))
    }
    const setValueToLocalStorage = ()=>{
        localStorage.setItem("value",JSON.stringify(value))
    }


    return (
        <div className={s.counterAndSettings}>

            <Settings
                minValue={minValue}
                maxValue={maxValue}
                setMaxValueHandler={setMaxValueHandler}
                setMinValueHandler={setMinValueHandler}
                setSettingsToLocalStorage={setSettingsToLocalStorage}/>
            <Counter
                maxValue={maxValue}
                minValue={minValue}
                incHandler={incHandler}
                setValue={setValue}
                currentValue={value}/>

        </div>

    );
}

export default CounterAndSettings;