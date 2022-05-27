import React, {ChangeEvent, useState} from 'react';
import s from './counter.module.css'
import Display from "../Display/Display";
import IncAndReset from "../IncAndReset/IncAndReset";


type CounterPropsType ={
    maxValue:number
    minValue:number
    currentValue:number
    incHandler:()=>void
    setValue:(minValue:number)=>void
}

function Counter(props:CounterPropsType) {



    return (
        <div className={s.counter}>
            <Display maxValue={props.maxValue} value={props.currentValue}/>

            <IncAndReset value={props.currentValue}
                         maxValue={props.maxValue}
                         minValue={props.minValue}
                         incHandler={props.incHandler}
                         resetValue={props.setValue}/>
        </div>
    );
}

export default Counter;

