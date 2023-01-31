import { ChangeEventHandler, FocusEventHandler } from 'react';

interface FormInputProps {
  label: string;
  name: string;
  isMultiline?: boolean;
  className?: string;
  error?: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement> &
    ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLTextAreaElement> &
    FocusEventHandler<HTMLInputElement>;
}

const FormInput = ({
  label,
  name,
  isMultiline,
  className,
  error,
  handleChange,
  handleBlur,
}: FormInputProps) => {
  const InputElement = isMultiline ? 'textarea' : 'input';
  return (
    <span className="flex flex-col p-2">
      <label htmlFor={name} className="text-subtitle-gray">
        {label}:
      </label>
      <InputElement
        type="text"
        className={`w-full text-black ${className} ${
          error ? 'shadow-red-700 shadow-inner bg-red-50 ' : ''
        }}`}
        id={name}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div>
        <p className="text-red-400 text-xs">{error}</p>
      </div>
    </span>
  );
};

export default FormInput;
