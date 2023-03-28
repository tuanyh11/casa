import React from 'react';
import { Breadcrumb } from '../../Components';
import Login from './Login/Login';
import { isUserLoggedIn } from './Login/utils/function';
import MainAccount from './MainAccount/main-account';
import './style.css';

function MyAccount(props) {
    const auth = isUserLoggedIn();
    return (
        <>
            <Breadcrumb label={'my account'} />
            <div className='account-container max-w-[1320px] m-auto px-[15px] w-full'>
                {/* <MainAccount /> */}
                {
                    auth !== null ? (
                        <MainAccount />
                    ) : (

                        <Login />
                    )
                }
            </div>
        </>

    );
}

export default MyAccount;