import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { createContact } from '../../../api';

function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorSubject, setErrorSubject] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [error, setError] = useState(false)

    const handleInputChangeName = (event) => {
        const value = event.target.value;
        setName(value);
        if (!value) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
    };
    const handleInputChangeEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
        if (!value) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
    };
    const handleInputChangeSubject = (event) => {
        const value = event.target.value;
        setSubject(value);
        if (!value) {
            setErrorSubject(true);
        } else {
            setErrorSubject(false);
        }
    };
    const handleInputChangeMessage = (event) => {
        const value = event.target.value;
        setMessage(value);
        if (!value) {
            setErrorMessage(true);
        } else {
            setErrorMessage(false);
        }
    };

    const { mutate } = useMutation(createContact)

    let content = {
        'name': name,
        'email': email,
        'subject': subject,
        'message': message,
    }

    const handleSubmit = () => {
        if (content !== null && content.name !== '' && content.email !== '' && content.subject !== '' && content.message !== '') {
            console.log(content);
            mutate(content)
        }
        else {
            console.log('error');
            setError(true)
        }
    }
    return (
        <>
            <div className='contact-form-page'>
                <div className='flex flex-wrap w-full'>
                    <div className='form-item w-1/3 relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <input
                                type='text'
                                placeholder='Your Name'
                                onChange={handleInputChangeName}
                                value={name}
                            />
                            {errorName &&
                                <span className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>
                                    The field is required.
                                </span>
                            }
                        </span>
                    </div>
                    <div className='form-item w-1/3  relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <input
                                type='email'
                                placeholder='Your Email'
                                onChange={handleInputChangeEmail}
                                value={email}
                            />
                            {errorEmail &&
                                <span className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>
                                    The field is required.
                                </span>
                            }
                        </span>
                    </div>
                    <div className='form-item w-1/3 relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <input
                                type='text'
                                placeholder='Your Subject'
                                onChange={handleInputChangeSubject}
                                value={subject}
                            />
                            {errorSubject &&
                                <span className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>
                                    The field is required.
                                </span>
                            }
                        </span>
                    </div>
                    <div className='form-item w-full relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <textarea
                                cols={40}
                                rows={10}
                                placeholder='Your Message'
                                onChange={handleInputChangeMessage}
                                value={message}
                            />
                            {errorMessage &&
                                <span className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>
                                    The field is required.
                                </span>
                            }
                        </span>
                    </div>
                    <div className='form-item-submit w-full relative px-[15px] text-center'>
                        <input
                            type='submit'
                            value='Send Message'
                            onClick={handleSubmit}
                        // disabled={!loading}

                        />
                        <span className='loading '></span>
                    </div>
                </div>
            </div>
            {
                error && <div className='response-output'>
                    One or more fields have an error. Please check and try again.
                </div>
            }

        </>

    );
}

export default ContactForm;