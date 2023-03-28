import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../../../api';
import '../style.css';
import { setAuth } from '../utils/function';

function Content(props) {
    const [show, setShow] = useState('hide');
    const handleShow = (event) => {
        if (show == "show") {
            setShow("hide");
        } else {
            setShow("show");
        }
    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const { data: dataUser } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: () => getUser()

    // })
    // console.log(dataUser);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("http://localhost:4000/account?username=" + username + "&password=" + password)
            .then((response) => {
                if (response.data.length > 0) {
                    console.log('done');
                    setAuth(response.data)
                    navigate('/')

                } else {
                    console.log('error');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className='login-content  w-3/4 px-[15px] '>
            <div className='mess-login'></div>
            <h2>Login</h2>
            <form method='post'>
                <div className='login-email'>
                    <label for="username">
                        Username or email address&nbsp;
                        <span className="required">*</span>
                    </label>
                    <input type='text' autoComplete="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            ) : (
                                <input type='password' autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            )
                        }

                        <span onClick={handleShow}>
                            <i className="fa-solid fa-eye"></i>
                        </span>
                    </div>

                </div>

                <div className='form-row-list'>


                    <label className="remember">
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                        <span>Remember me</span>
                    </label>
                    <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="743285772f" />
                    <input type="hidden" name="_wp_http_referer" value="/my-account/" />
                    <div className='btn-login' onClick={handleSubmit}>Log in</div>
                </div>
                <div className='form-register'>
                    <p className='register'>
                        <Link to='/register' >No account? Create one here?</Link>
                    </p>
                    <p className='lost-password'>
                        <a href='#' >Lost your password?</a>
                    </p>
                </div>


            </form>
        </div>
    );
}

export default Content;