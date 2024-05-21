import { cva } from "class-variance-authority";
import { Home, FormInput, Package2Icon, Table2 } from "lucide-react";
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
  brand: <Package2Icon className="h-6 w-6" />,
  navigations: [
    {
      label: "Dashboard",
      href: "/admin",
      icon: (active) => <Home className={cn(menuVariant({ active }))} />,
    },
    {
      label: "Form Example",
      href: "/admin/form",
      icon: (active) => <FormInput className={cn(menuVariant({ active }))} />,
    },
    {
      label: "Datatable Example",
      href: "/admin/table",
      icon: (active) => <Table2 className={cn(menuVariant({ active }))} />,
    },
  ] satisfies SidebarMenu[],
} as const;
