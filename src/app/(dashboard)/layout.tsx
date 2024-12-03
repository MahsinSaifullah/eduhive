import { PropsWithChildren } from 'react';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">l</div>
      <div className="w-[86%]  md:w-[92%] lg:w-[84%] xl:w-[86%]">r</div>
    </div>
  );
};

export default DashboardLayout;
