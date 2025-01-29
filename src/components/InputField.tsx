import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from 'react-hook-form';

type Props = {
  label: string;
  type?: string;
  name: string;
  defaultValue?: string | number | readonly string[];
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  register: UseFormRegister<any>;
};

const InputField: React.FC<Props> = ({
  label,
  type,
  name,
  defaultValue,
  error,
  inputProps,
  register,
}) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] rounded-md text-sm p-2"
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error?.message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
