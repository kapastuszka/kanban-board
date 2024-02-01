import cn from "classnames";
import { ButtonHTMLAttributes } from "react";
import css from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

export default function Button({
	text,
	type = "button",
	className,
	...rest
}: ButtonProps) {
	return (
		<button type={type} {...rest} className={cn(css.button, className)}>
			{text}
		</button>
	);
}
