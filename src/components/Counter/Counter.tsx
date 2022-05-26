import React, {ChangeEvent, useState} from 'react';
import s from './counter.module.css'
import UniversalButton from "../Button/UniversalButton";


function Counter() {
    const [num, setNum] = useState<number>(0)


    const incHandler = () => {
        if (num < 5) {
            setNum(num+1)
        }
    }

    const onKeyPressHandler = (e:React.KeyboardEvent<HTMLButtonElement>)=>{
        if(e.key==="+"){
            incHandler()
        }
        else if(e.key==="-"&&num>0){
            setNum(num-1)
        }
    }


    return (

            <div className={s.counter}>

                <div className={s.display}>
                    <div className={`${s.count} ${num===5&&s.limit}`}> {num} </div>
                </div>

                <div className={s.inputArea}>
                   <UniversalButton onKeyPress={onKeyPressHandler} disabled={num === 5} onClick={incHandler} name={"inc"}></UniversalButton>
                   <UniversalButton disabled={num === 0} onClick={() => setNum(0)} name={"reset"}></UniversalButton>
                </div>

            </div>



    );
}

export default Counter;
