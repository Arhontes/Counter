import React, {ChangeEvent, useState} from 'react';
import s from './counter.module.css'
import UniversalButton from "../Button/UniversalButton";
import Display from "../Display/Display";
import IncAndReset from "../IncAndReset/IncAndReset";


function Counter() {
    const [num, setNum] = useState<number>(0)
    const maxValue = 5
    const minValue = 0

    const incHandler = () => {
        if (num < maxValue) {
            setNum(num + 1)
        }
    }
    /*const onKeyPressHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if (e.key === "+") {
            incHandler()
        } else if (e.key === "-" && num > 0) {
            setNum(num - 1)
        }
    }*/


    return (
        <div className={s.counter}>
            <Display value={num}/>
            <IncAndReset value={num}
                         maxValue={maxValue}
                         minValue={minValue}
                         incHandler={incHandler}
                         setNum={setNum}/>
        </div>

    );
}

export default Counter;

