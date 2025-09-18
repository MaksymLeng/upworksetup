import { ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
    variant?: "primary" | "secondary" | "outline";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
    const base =
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition-colors";
    const map = {
        primary: "bg-primary text-light hover:opacity-90",
        secondary: "bg-secondary text-dark hover:opacity-90",
        outline: "border border-primary text-dark hover:bg-primary hover:text-light",
    } as const;

    return <button className={`${base} ${map[variant]} ${className}`} {...props} />;
}
