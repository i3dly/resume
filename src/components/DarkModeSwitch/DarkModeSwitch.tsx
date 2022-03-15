import { Switch } from "@headlessui/react";
import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { CSSProperties, FC } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

export interface DarkModeSwitchProps {
	className?: string;
	style?: CSSProperties;
}

export const DarkModeSwitch: FC<DarkModeSwitchProps> = ({ className, style }) => {
	const { theme, setTheme } = useTheme();

	const checked = theme === "dark";

	return (
		<Switch
			checked={checked}
			className={clsx(
				"dark:bg-slate-900 dark:hover:bg-slate-600/25 dark:active:bg-slate-400/25",
				"bg-slate-50 hover:bg-slate-100 active:bg-slate-200",
				"dark:focus-visible:ring-white",
				"focus-visible:ring-blue-300",
				"inline-flex items-center justify-center h-12 w-12",
				"border border-gray-200 dark:border-gray-700/75 rounded-lg",
				"transition-colors ease-in-out duration-200",
				"focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75",
				"cursor-pointer",
				className
			)}
			onChange={(newChecked) => {
				setTheme(newChecked ? "dark" : "light");
			}}
			style={style}
		>
			{checked ? (
				<HiOutlineMoon className="h-6 w-6 text-sky-500" height={24} width={24} />
			) : (
				<HiOutlineSun className="h-6 w-6 text-black" height={24} width={24} />
			)}
		</Switch>
	);
};
