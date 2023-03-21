import React from 'react';
import MainAccount from './MainAccount/main-account';
import './style.css';

function MyAccount(props) {
    return (
        <div className='account-container max-w-[1320px] m-auto px-[15px] w-full'>
            <MainAccount />
        </div>
    );
}

export default MyAccount;