import { useState } from "react";

function ErrorBlock(props) {
    if (props.error === 'valid') {
        return null;
    } else if (props.error === 'empty') {
        return (
            <div className="sign-page__input-error">
                Поле должно быть заполнено!
            </div>
        );
    } else if (props.error === 'occupied') {
        return (
            <div className="sign-page__input-error">
                Такой логин уже есть! Выберите другой
            </div>
        );
    } else if (props.error === 'wrongLogin') {
        return (
            <div className="sign-page__input-error">
                Пользователя с таким логином нет!
            </div>
        );
    } else if (props.error === 'wrongPassword') {
        return (
            <div className="sign-page__input-error">
                Неверный пароль!
            </div>
        );
    } else {
        return (
            <div className="sign-page__input-error">
                Пароли не совпадают!
            </div>
        );
    }
}

export function Input(props) {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
    }

    const {fieldname, type, error} = props;

    return(
        <div className={`sign-page__item sign-page__${fieldname}`}>
            <input value={value} onChange={handleChange} name={fieldname} type={type} 
                className={`sign-page__input ${error}`} placeholder={fieldname === 'confirm' ? 'confirm password' : fieldname} />
            <ErrorBlock error={error} />
        </div>
    );
}