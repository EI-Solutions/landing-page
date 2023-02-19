import { useTranslations } from 'next-intl';
import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';
import FormInput from './FormInput';
import emailjs from '@emailjs/browser';

interface FieldData {
  [key: string]: string;
}

const ContactForm = () => {
  const t = useTranslations('ContactForm');

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  } as FieldData;

  const [formData, setFormData] = useState(defaultValues);

  const [errorData, setErrorData] = useState(defaultValues);

  const [submitError, setSubmitError] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement> & ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    let error = '';
    for (const key in formData) {
      error = currentError(key, formData[key]);
      if (error) {
        setErrorData((prevErrorData) => {
          return {
            ...prevErrorData,
            [key]: error,
          };
        });
      }
    }
    if (
      errorData.firstName ||
      errorData.lastName ||
      errorData.email ||
      errorData.message ||
      error
    ) {
      setSubmitError(true);
      setTimeout(() => {
        setSubmitError(false);
      }, 300);
      return;
    }
    emailjs
      .send(
        'service_eo3z2h6',
        'template_qu8ghxp',
        formData,
        'fKyPHu0d9EbF-dJVa'
      )
      .then(() => {
        setSubmitMessage(t('submitSuccessMessage'));
      })
      .catch(() => {
        setSubmitMessage(t('submitErrorMessage'));
      });
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement> & FocusEvent<HTMLTextAreaElement>
  ) => {
    const input = event.target;
    setErrorData({
      ...errorData,
      [input.name]: currentError(input.name, input.value),
    });
  };

  const currentError = (field: string, value: string): string => {
    if (!value) {
      return t('requiredError');
    } else if (
      field == 'email' &&
      !value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      return t('emailError');
    }
    return '';
  };

  return (
    <div className="pt-20 p-5 container">
      <div className="flex flex-col lg:flex-row sm:p-10">
        <div className="lg:basis-1/2 text-black p-5">
          <p className="text-6xl font-bold text-ei-green">{t('title')}</p>
          <div className="text-black text-2xl">
            {t.rich('description', {
              bold: (chunk) => (
                <p>
                  <b>{chunk}</b>
                </p>
              ),
            })}
          </div>
        </div>
        <div className="p-5 sm:p-10 lg:basis-1/2 w-full bg-ei-dark-green">
          <div className="text-xl font-bold p-5">{t('request')}</div>
          <form onSubmit={handleSubmit}>
            <span className="flex flex-col lg:flex-row">
              <FormInput
                label={t('first')}
                error={errorData.firstName}
                name="firstName"
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
              <FormInput
                label={t('last')}
                error={errorData.lastName}
                name="lastName"
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </span>
            <FormInput
              label={t('email')}
              error={errorData.email}
              name="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <FormInput
              label={t('message')}
              error={errorData.message}
              name="message"
              isMultiline
              className="h-64"
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
            <button
              type="submit"
              className={`bg-ei-green text-white px-5 p-2 m-2 rounded-lg ${
                submitError ? 'animate-wiggle bg-red-400' : ''
              }`}
            >
              {t('submit')}
            </button>
          </form>
          <div>
            <p className="text-white text-left">{submitMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
