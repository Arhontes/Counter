import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
export type SettingsPropsType={
    maxValue:number
    minValue:number
    setMaxValueHandler:(el:ChangeEvent<HTMLInputElement>)=>void
    setMinValueHandler:(el:ChangeEvent<HTMLInputElement>)=>void
    setSettingsToLocalStorage:()=>void
}

function Settings(props:SettingsPropsType) {


    return (
        <div className={s.settings}>
            <div className={s.inputZone}>
                <div className={s.setZone}>
                    <div className={s.description}>Max Value</div>
                    <div><input onChange={props.setMaxValueHandler} value={props.maxValue} type={"number"}/></div>
                </div>
               <div className={s.setZone}>
                   <div className={s.description}>Min Value</div>
                   <input onChange={props.setMinValueHandler}  value={props.minValue} type={"number"}/>
               </div>

            </div>

            <div className={s.setButton}>
                <button onClick={props.setSettingsToLocalStorage}>Set</button>
            </div>

        </div>
    );
}

export default Settings;