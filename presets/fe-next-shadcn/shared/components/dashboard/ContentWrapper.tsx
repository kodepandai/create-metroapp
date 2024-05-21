import { cn } from "shared/utils";

export default function ContentWrapper({
    children,
    className,
}: React.PropsWithChildren<{ className?: string }>) {
    return (
        <div
            className={cn(
                "flex flex-1 rounded-lg border border-dashed shadow-sm p-2",
                className,
            )}
        >
            {children}
        </div>
    );
}
