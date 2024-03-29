import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createContact } from '../../../api';

function ContactForm(props) {
    // const [mess, setMess] = useState();
    const [commentData, setCommentData] = useState('');

    // const [loading, setLoading] = useState('')

    const defaultValues = {
        email: '',
        name: '',
        subject: '',
        message: ''
    }

    const {
        register,
        handleSubmit,
        watch,
        formState,
        reset,
        setValue,
        unregister
    } = useForm({
        defaultValues
    });

    const { mutate, data } = useMutation(createContact, {
        onSuccess: () => {
            setCommentData('Thank you for your message. It has been sent.')
            reset(defaultValues)
        },
        onError: () => {

        }
    })

    const { errors, isSubmitting } = formState

    console.log(formState.defaultValues)

    const onSubmit = (data) => {

        return new Promise(resolve => {
            setTimeout(() => {
                console.log(data);
                // setCommentData('Thank you for your message. It has been sent.')
                resolve();
                mutate(data);
            }, 3000);
        });

    };
    const isError = Object.keys(errors).length > 0
    useEffect(() => {
        if (!isError) setCommentData(null)
    }, [isError])

    return (
        <>
            <div className='contact-form-page'>
                <div className='flex flex-wrap w-full'>
                    <div className='form-item w-1/3 relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <input placeholder='Your Name'
                                {...register("name", { required: true })} />
                            {
                                errors.name &&
                                <p className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>This field is required</p>
                            }
                        </span>
                    </div>
                    <div className='form-item w-1/3  relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <input
                                type='email'
                                placeholder='Your Email'
                                {...register("email", {
                                    required: true,
                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                                })}
                            />
                            {errors.email ? (
                                errors.email.type === "pattern" ? (
                                    <p className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>The e-mail address entered is invalid.</p>
                                ) : (

                                    <p className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>This field is required</p>
                                )
                            ) : (null)}

                        </span>
                    </div>
                    <div className='form-item w-1/3 relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <input
                                placeholder='Your Subject'
                                {...register("subject", { required: true })} />
                            {
                                errors.subject && <p className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>This field is required</p>
                            }
                        </span>
                    </div>
                    <div className='form-item w-full relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <textarea
                                cols={40}
                                rows={10}
                                placeholder='Your Message'
                                {...register("message", { required: true })} />
                            {errors.message && <p className='text-[#dc3232] text-[14px] font-normal leading-[24px] block'>This field is required</p>}
                        </span>
                    </div>
                    <div className='form-item-submit w-full relative px-[15px] text-center'>
                        <input
                            type='submit'
                            value='Send Message'
                            onClick={handleSubmit(onSubmit)}
                        />
                        <span className={`loading ${isSubmitting === true ? 'visible' : 'invisible'}`}></span>
                    </div>
                </div>
            </div>
            {
                isError ? (
                    <div className='response-output'>One or more fields have an error. Please check and try again.</div>
                ) : (
                    commentData !== null ? (<div className='response-output !border-[#46b450]'>{commentData}</div>) : (null)
                )
            }



        </>

    );
}

export default ContactForm;