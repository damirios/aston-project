import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { formValidity } from "../utilitieFunctions/formValidity";
import { Input } from "./UIComponents/Input";
import { addNewUserToLocalStorage, addOnlineStatusOnLS } from "../utilitieFunctions/localStorageActions";
import { loggedIn } from "../features/user/userSlice";

export function SignInUpPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errorFields, setErrorFields] = useState({
        login: 'valid', // or empty or occupied
        password: 'valid', // or doesNotMatch or empty
        confirm: 'valid' // or doesNotMatch or empty
    });

    function handleSignIn(e) {
        e.preventDefault();

        const form = e.target.closest('form');
        const formStatus = formValidity(form); // {login: status, password: status, confirm: status}
        
        setErrorFields(formStatus);
        if (!Object.values(formStatus).includes('empty') && !Object.values(formStatus).includes('doesNotMatch')) {
            const formData = new FormData(form);

            const login = formData.get('login');
            const password = formData.get('password');
            const enteringUser = {login, password};

            const registeredUsers = JSON.parse(localStorage.getItem('users'));
            
            if (Object.keys(registeredUsers).includes(enteringUser.login)) {
                const currentUser = registeredUsers[enteringUser.login];
                if (currentUser.password === password) {
                    dispatch(loggedIn());
                    addOnlineStatusOnLS(currentUser);
                    navigate('/');
                } else {
                    setErrorFields({
                        ...formStatus,
                        password: 'wrongPassword',
                        confirm: 'wrongPassword'
                    });
                }
            } else {
                setErrorFields({
                    ...formStatus,
                    login: 'wrongLogin'
                });
            }
        }
    }
    
    function handleSignUp(e) {
        e.preventDefault();
        
        const formStatus = formValidity(e.target.closest('form')); // {login: status, password: status, confirm: status}
        
        setErrorFields(formStatus);
        if (!Object.values(formStatus).includes('empty') && !Object.values(formStatus).includes('doesNotMatch')) {
            const form = e.target.closest('form');
            const formData = new FormData(form);

            const login = formData.get('login');
            const password = formData.get('password');
            const newUser = {login, password};

            const LSContent = JSON.parse(localStorage.getItem('users'));

            if (!LSContent) {
                addNewUserToLocalStorage(newUser, true);
            } else {
                if (Object.keys(LSContent.users).includes(login)) {
                    setErrorFields({
                        ...formStatus,
                        login: 'occupied'
                    });
                } else {
                    addNewUserToLocalStorage(newUser);
                }
            }
        }
    }

    return (
        <div className="sign-page content">
            <div className="container">
                <form className="sign-page__form">
                    <Input type='text' fieldname='login' error={errorFields.login}/>
                    <Input type='password' fieldname='password' error={errorFields.password}/>
                    <Input type='password' fieldname='confirm' error={errorFields.confirm}/>
                    <div className="sign-page__buttons">
                        <button onClick={handleSignIn} className="sign-page__signin">Войти</button>
                        <button onClick={handleSignUp} className="sign-page__signup">Зарегистрироваться</button>
                    </div>
                </form>
            </div>
        </div>
    );
}