import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Sizes = "full" | "small";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Sizes;
  children: ReactNode;
}

export const CustomButton = ({
  className,
  children,
  size = "full",
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      {...rest}
      className={twMerge(
        "flex items-center gap-2 px-3 justify-center text-white font-primary bg-theme-primary",
        size === "full" && "py-2.5 rounded-xl tracking-wide",
        size === "small" && "text-sm py-1 rounded-lg",
        className,
      )}
    >
      {children}
    </button>
  );
};
