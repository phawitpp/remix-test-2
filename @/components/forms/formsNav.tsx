import { Link, useLocation } from "@remix-run/react";

import { cn } from "@/lib/utils";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export function FormsNav({ className, items, ...props }: SidebarNavProps) {
  const pathname = useLocation();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={
            pathname.pathname === item.href
              ? "flex items-center px-4 py-2 font-medium text-base rounded-lg text-white bg-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors duration-200"
              : "flex items-center px-4 py-2 font-medium text-base rounded-lg text-white hover:bg-neutral-800 hover:text-white transition-colors duration-200"
          }
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
