import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { createAccount } from '../../../../../api';

function RegisterForm(props) {
    const [showPass, setshowPass] = useState('hide');
    const [show, setShow] = useState('hide');

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassWord] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { mutate } = useMutation(createAccount,
        {
            onSuccess: () => {
                navigate("/my-account")
            }
        })

    const handleShowPass = (event) => {
        if (showPass == "show") {
            setshowPass("hide");
        } else {
            setshowPass("show");
        }
    }
    const handleShow = (event) => {
        if (show == "show") {
            setShow("hide");
        } else {
            setShow("show");
        }
    }


    let data = {
        'email': email,
        'password': password,
        'confirmPassword': confirmPassword
    }
    const handleSubmit = (e) => {
        mutate(data)
        // console.log(data);
    }
    return (
        <div className='login-content  w-3/4 px-[15px] '>
            <div className='mess-login'></div>
            <h2>Register</h2>
            <form method='post'>
                <div className='login-email'>
                    <label for="username">
                        Username or email address&nbsp;
                        <span className="required">*</span>
                    </label>
                    <input type='text' autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='login-pass'>
                    <label for="password">
                        Password&nbsp;
                        <span className="required">*</span>
                    </label>
                    <div className='password-input'>
                        {
                            show === 'show' ? (
                                <input type='text' autoComplete="current-password"
                                    onChange={(e) => setPassWord(e.target.value)}
                                />
                            ) : (
                                <input type='password' autoComplete="current-password"
                                    onChange={(e) => setPassWord(e.target.value)}
                                />
                            )
                        }

                        <span onClick={handleShow}>
                            <i className="fa-solid fa-eye"></i>
                        </span>
                    </div>

                </div>
                <div className='login-pass'>
                    <label for="password">
                        Confirm password&nbsp;
                        <span className="required">*</span>
                    </label>
                    <div className='password-input'>
                        {
                            showPass === 'show' ? (
                                <input type='text' autoComplete="current-password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            ) : (
                                <input type='password' autoComplete="current-password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            )
                        }

                        <span onClick={handleShowPass}>
                            <i className="fa-solid fa-eye"></i>
                        </span>
                    </div>

                </div>

                <div className='form-row-list'>
                    <div className='btn-login'
                        onClick={handleSubmit}>save</div>
                </div>

            </form>
        </div>
    );
}

export default RegisterForm;