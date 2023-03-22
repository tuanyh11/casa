import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { buildErrorMessage } from 'vite';
import { createContact } from '../../../api';

function ContactForm(props) {
    const { mutate, error } = useMutation(createContact)
    // console.log(mutate());
    // const [loading, setLoading] = useState('')
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting }

    } = useForm();
    const onSubmit = (data) => {

        return new Promise(resolve => {
            setTimeout(() => {
                console.log(data);
                resolve();
                // mutate(data);
            }, 3000);
        });
    };
    // console.log(isSubmitted);
    return (
        <>
            <div className='contact-form-page'>
                <div className='flex flex-wrap w-full'>
                    <div className='form-item w-1/3 relative px-[15px]'>
                        <span className='mb-[30px] block'>
                            <input {...register("name", { required: true })} />
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
                            <input {...register("subject", { required: true })} />
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
            {/* {
                errors && (
                    <div className='response-output'>
                        One or more fields have an error. Please check and try again.
                    </div>
                )

            } */}

        </>

    );
}

export default ContactForm;