import { useTranslations } from "next-intl"
import { ChangeEvent, ChangeEventHandler, FocusEvent, FormEvent, useEffect, useState } from "react";
import FormInput from "./FormInput"

interface FieldData {
    [key: string]: string;
}

const ContactForm = () => {
    const t = useTranslations('ContactForm')

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    } as FieldData);

    const [errorData, setErrorData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    } as FieldData);

    const [submitError, setSubmitError] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement> & ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        setErrorData({})
        for (const key in formData) {
            const error = currentError(key, formData[key])
            if (error) {
                setErrorData(prevErrorData => {
                    return {
                        ...prevErrorData,
                        [key]: error
                    }
                })
                setSubmitError(true)
                setTimeout(() => {
                    setSubmitError(false)
                }, 300)
            }
        }
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement> & FocusEvent<HTMLTextAreaElement>) => {
        const input = event.target
        setErrorData({
            ...errorData,
            [input.name]: currentError(input.name, input.value)
        })
    }

    const currentError = (field: string, value: string): string => {
        if (!value) {
            return t('requiredError')
        } else if (field == 'email' && !value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            return t('emailError')
        }
        return ''
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
                        <button type="submit" className={`bg-ei-green text-white p-2 m-2 rounded-lg ${submitError ? 'animate-wiggle bg-red-400' : ''}`}>{t('submit')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
