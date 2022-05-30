import React, {ChangeEvent, useEffect, useState} from 'react';
import Counter from "./components/Counter/Counter/Counter";
import Settings from "./components/Settings/Settings";
import s from "./App.module.css";


function CounterOrSettings() {
    const [onSettings, setOnSettings] = useState(false)
    const [minMaxValue, setMinMaxValue] = useState([10, 10])
    const [minValue, maxValue] = minMaxValue
    useEffect(() => {
        setMinMaxValue(getMinMaxValueFromLocalStorage())
    }, [])

    const [value, setValue] = useState<number>(10)
    useEffect(() => {
        let valueAsString = localStorage.getItem("value")
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])
    useEffect(() => {
        setValueToLocalStorage()
    }, [value])


    const incHandler = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }
    const setMaxValueHandler = (el: ChangeEvent<HTMLInputElement>) => {
        if (+el.currentTarget.value > minValue) {
            const tempMaxValue = parseInt(el.currentTarget.value)
            setMinMaxValue([minValue, tempMaxValue])
        }
    }
    const setMinValueHandler = (el: ChangeEvent<HTMLInputElement>) => {
        if (+el.currentTarget.value < maxValue) {
            const tempMinValue = parseInt(el.currentTarget.value)
            setMinMaxValue([tempMinValue, maxValue])
        }
    }

    const getMinMaxValueFromLocalStorage = () => {
        let minMaxFromLocalStorage = localStorage.getItem("MinMaxValue")
        let newMinMax: Array<number> = []
        if (minMaxFromLocalStorage) JSON.parse(minMaxFromLocalStorage, (k, v) => {
            k !== "" && newMinMax.push(parseInt(v))
        })
        return newMinMax
    }
    const setSettingsToLocalStorage = () => {
        window.confirm("Do you wanna sent settings?")
        localStorage.setItem("MinMaxValue", JSON.stringify(minMaxValue))
    }
    const setValueToLocalStorage = () => {
        localStorage.setItem("value", JSON.stringify(value))
    }

    const imagPath = "https://cdn-icons.flaticon.com/png/128/3876/premium/3876036.png?token=exp=1653925644~hmac=15d39837fa1c92d7026f01ce8e4c934b"
    const imgStyle = {

        "align": "right",
        "width": "20px",
        "height": "20px"
    }
    return (
        <span>
            {
                onSettings
                    ?
                    <div> <img style={imgStyle} onClick={()=>setOnSettings(!onSettings)} src={imagPath} alt=""/>
                        <Settings
                            minValue={minValue}
                            maxValue={maxValue}
                            setMaxValueHandler={setMaxValueHandler}
                            setMinValueHandler={setMinValueHandler}
                            setSettingsToLocalStorage={setSettingsToLocalStorage}/>

                    </div>
                    :
                    <div>
                        <img style={imgStyle} onClick={()=>setOnSettings(!onSettings)} src={imagPath} alt=""/>
                        <Counter
                            maxValue={maxValue}
                            minValue={minValue}
                            incHandler={incHandler}
                            setValue={setValue}
                            currentValue={value}/>

                    </div>
            }
        </span>
    );
}

export default CounterOrSettings;