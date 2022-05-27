import React, {useState} from 'react';
import s from "../Counter/counter.module.css";

type DisplayPropsType = {
    value:number
    maxValue:number
}

function Display(props:DisplayPropsType) {

    const overLimit = props.maxValue<=props.value
    const displayStyle = `${s.count} ${overLimit && s.limit}`
    return (
        <div className={s.display}>
            <div className={displayStyle}>{overLimit?`The limit has been reached`:props.value} </div>
        </div>
    );
}

export default Display;