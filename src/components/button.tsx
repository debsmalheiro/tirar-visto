
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
}

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
    const baseClasses = "w-fit flex items-center justify-center rounded-full font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

    const variantClasses = {
        primary: "bg-slate-800 text-white hover:bg-slate-700",
        secondary: "bg-yellow-01 text-neutral-01 hover:bg-gray-300",
        outline: "border border-gray-500 text-gray-900 bg-transparent hover:border-slate-700",
    };

    const classes = clsx(
        baseClasses,
        variantClasses[variant],
        className
    );

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
