import React from 'react';
import s from "../Counter/counter.module.css";

type DisplayPropsType = {
    value:number
}
function Display(props:DisplayPropsType) {
    return (
        <div className={s.display}>
            <div className={`${s.count} ${props.value === 5 && s.limit}`}> {props.value} </div>
        </div>
    );
}

export default Display;