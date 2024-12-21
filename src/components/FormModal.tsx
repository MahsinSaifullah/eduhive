'use client';
import Image from 'next/image';

type FormModalProps = {
  table:
    | 'teacher'
    | 'student'
    | 'parent'
    | 'subject'
    | 'class'
    | 'lesson'
    | 'exam'
    | 'assignment'
    | 'result'
    | 'attendance'
    | 'event'
    | 'announcement';
  type: 'create' | 'update' | 'delete';
  data?: any;
  id?: number;
};

const FormModal: React.FC<FormModalProps> = ({ type }) => {
  const buttonSize = type === 'create' ? 'w-8 h-8' : 'w-7 h-7';
  const buttonBgColor =
    type === 'create' ? 'bg-lemon' : type === 'update' ? 'bg-sky' : 'bg-lilac';
  return (
    <>
      <button
        className={`${buttonSize} flex items-center justify-center rounded-full ${buttonBgColor}`}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>
    </>
  );
};

export default FormModal;
