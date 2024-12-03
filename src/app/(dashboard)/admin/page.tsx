import UserCard from '@/components/UserCard';

const AdminPage = () => {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row">
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard role="student" />
          <UserCard role="teacher" />
          <UserCard role="parent" />
          <UserCard role="staff" />
        </div>
      </div>
      <div className="w-full lg:w-1/3"></div>
    </div>
  );
};

export default AdminPage;
