"use client";
import config from "config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "shared/utils";

export default function Sidebar() {
  const pathname = usePathname();
  return config.sidebar.navigations.map((menu) => {
    const isActive = pathname?.includes(menu.href || "");
    return (
      <Link
        key={menu.href}
        href={menu.href}
        className={cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-secondary/60",
          isActive && "bg-secondary/60 text-primary",
        )}
      >
        {menu.icon && menu.icon(isActive)}
        {menu.label}
      </Link>
    );
  });
}
