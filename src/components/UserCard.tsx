import { Role } from '@/constants/types';
import Image from 'next/image';

type UserCardProps = {
  role: Role;
};

const UserCard: React.FC<UserCardProps> = ({ role }) => {
  return (
    <div className="rounded-2xl odd:bg-lilac even:bg-lemon flex-1 p-4 min-w-[130px]">
      <div className="flex justify-between">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">2,832</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{`${role}s`}</h2>
    </div>
  );
};

export default UserCard;
