import { cva } from "class-variance-authority";
import { Home, Package, ShoppingCart } from "lucide-react";
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

export const sidebar = {
  navigations: [
    {
      label: "Dashboard",
      href: "/admin",
      icon: (active) => <Home className={cn(menuVariant({ active }))} />,
    },
    {
      label: "Order",
      href: "/admin/order",
      icon: (active) => (
        <ShoppingCart className={cn(menuVariant({ active }))} />
      ),
    },
    {
      label: "Products",
      href: "/admin/product",
      icon: (active) => <Package className={cn(menuVariant({ active }))} />,
    },
  ] satisfies SidebarMenu[],
} as const;
