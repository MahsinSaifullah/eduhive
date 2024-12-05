import { menuItems } from '@/constants/menuItems';
import { role } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const Menu = () => {
  return (
    <aside className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            return (
              item.visible.includes(role) && (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 py-2 text-gray-500"
                >
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={20}
                    height={20}
                  />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              )
            );
          })}
        </div>
      ))}
    </aside>
  );
};

export default Menu;
