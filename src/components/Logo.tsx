import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center gap-2 lg:justify-start"
    >
      <Image src="/logo.png" alt="eduhive logo" width={32} height={32} />
      <span className="hidden lg:block font-bold">EduHive</span>
    </Link>
  );
};

export default Logo;
