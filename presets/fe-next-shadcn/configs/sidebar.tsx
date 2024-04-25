import { cva } from "class-variance-authority";
import { Home, Package, Package2Icon, ShoppingCart } from "lucide-react";
import { cn } from "shared/utils";

export interface SidebarMenu {
  label: string;
  href: string;
  icon: (active: boolean) => React.ReactNode;
}

const menuVariant = cva("h-5 w-5", {
  variants: {
    active: {
      false: "text-muted",
      true: "text-primary",
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const sidebar  = {
  brand: <Package2Icon className="h-6 w-6"/>,
  navigations: [
    {
      label: "Dashboard",
      href: "/admin",
      icon: (active) => <Home className={cn(menuVariant({ active }))} />,
    },
    {
      label: "Form Example",
      href: "/admin/order",
      icon: (active) => (
        <ShoppingCart className={cn(menuVariant({ active }))} />
      ),
    },
  ] satisfies SidebarMenu[],
} as const;
