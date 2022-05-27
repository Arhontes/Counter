import React, {ChangeEvent, useState} from 'react';
import s from './counter.module.css'
import UniversalButton from "../Button/UniversalButton";
import Display from "../Display/Display";
import IncAndReset from "../IncAndReset/IncAndReset";


function Counter() {
    const [value, setValue] = useState<number>(0)
    const maxValue = 5
    const minValue = 0

    const incHandler = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }

    return (
        <div className={s.counter}>
            <Display value={value}/>
            <IncAndReset value={value} maxValue={maxValue} minValue={minValue} incHandler={incHandler} setNum={setValue}/>
        </div>
    );
}

export default Counter;

