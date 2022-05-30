import React from 'react';
import s from "../Counter/counter.module.css";
import UniversalButton from "../../Button/UniversalButton";

type IncAndResetPropsType = {
    value:number
    maxValue:number
    minValue:number
    incHandler:()=>void
    resetValue: (value:number)=>void

}

function IncAndReset(props:IncAndResetPropsType) {

    return (
        <div className={s.inputArea}>
            <UniversalButton disabled={props.value === props.maxValue} onClick={props.incHandler}
                             name={"inc"}></UniversalButton>
            <UniversalButton disabled={props.value === props.minValue} onClick={() => props.resetValue(props.minValue)} name={"reset"}></UniversalButton>
        </div>
    );
}

export default IncAndReset;