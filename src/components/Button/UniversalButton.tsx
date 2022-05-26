import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './universalButton.module.css'

type UniversalButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    name?: string
}

const UniversalButton: React.FC<UniversalButtonPropsType> = (
    {
        className,
        disabled,
        onFocus,
        onKeyPress,
        onClick,
        name,
        ...restProps
    }) => {
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        onKeyPress && onKeyPress(e)
    }
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        onClick && onClick(e)
    }

    const buttonStyle = disabled?`${s.button} ${s.dis}`:s.button


    return (
        <button
                className = {buttonStyle}
                onKeyPress={onKeyPressHandler}
                onClick={onClickHandler}
                /*className={s.button}*/
                {...restProps}>{name}
        </button>
    );
};

export default UniversalButton;