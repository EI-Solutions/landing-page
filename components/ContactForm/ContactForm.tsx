import { useTranslations } from "next-intl"
import { ChangeEvent, ChangeEventHandler, FocusEvent, FormEvent, useEffect, useState } from "react";
import FormInput from "./FormInput"

const ContactForm = () => {
    const t = useTranslations('ContactForm')
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [errorData, setErrorData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    })

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement> & ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (formData.firstName || formData.lastName || formData.email || formData.message) {
            console.log(formData);
        }
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement> & FocusEvent<HTMLTextAreaElement>) => {
        const input = event.target
        if (!input.value) {
            setErrorData({
                ...errorData,
                [input.name]: t('requiredError')
            })
        } else if (input.name == 'email' && !input.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            setErrorData({
                ...errorData,
                [input.name]: t('emailError')
            })
        } else {
            setErrorData({
                ...errorData,
                [input.name]: ''
            })
        }
    }


    return (
        <div className=" pt-20 p-5">
            <div className="flex flex-col lg:flex-row p-10">
                <div className="lg:basis-1/2 text-black p-5">
                    <p className="text-6xl font-bold text-ei-green">{t('title')}</p>
                    <p className="text-2xl">{t('description')}</p>
                    <p className="text-2xl font-bold">{t('description-bold')}</p>
                </div>
                <div className="p-10 lg:basis-1/2 bg-ei-dark-green">
                    <div className="text-xl font-bold p-5">{t('send-request')}</div>
                    <form onSubmit={handleSubmit}>
                        <span className="flex flex-row">
                            <FormInput label={t('first')} error={errorData.firstName} name="firstName" handleChange={handleChange} handleBlur={handleBlur} />
                            <FormInput label={t('last')} error={errorData.lastName} name="lastName" handleChange={handleChange} handleBlur={handleBlur} />
                        </span>
                        <FormInput label={t('email')} error={errorData.email} name="email" handleChange={handleChange} handleBlur={handleBlur} />
                        <FormInput label={t('message')} error={errorData.message} name="message" isMultiline className="h-64" handleChange={handleChange} handleBlur={handleBlur} />
                        <button type="submit" className="bg-ei-green text-white p-2 m-2 rounded-lg">{t('submit')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
