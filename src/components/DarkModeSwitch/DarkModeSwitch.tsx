"use client";

import { Switch } from "@headlessui/react";
import { oneLine } from "common-tags";
import { useTheme } from "next-themes";
import type { CSSProperties, FC } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useNoSsr } from "../../hooks";
import { cn } from "../../utils/cn";

export interface DarkModeSwitchProps {
	className?: string;
	style?: CSSProperties;
}

export const DarkModeSwitch: FC<DarkModeSwitchProps> = ({ className, style }) => {
	const { theme, setTheme } = useTheme();
	const noSsr = useNoSsr();

	const checked = theme === "dark";

	return (
		<Switch
			checked={checked}
			className={cn(
				oneLine`
					inline-flex
					h-12
					w-12
					cursor-pointer
					items-center
					justify-center
					rounded-lg
					border
					border-gray-200
					bg-slate-50
					transition-colors
					duration-200
					ease-in-out
					hover:bg-slate-100
					focus:outline-none
					focus-visible:ring-2
					focus-visible:ring-blue-300
					focus-visible:ring-opacity-75
					active:bg-slate-200
					dark:border-gray-700/75
					dark:bg-slate-900
					dark:hover:bg-slate-600/25
					dark:focus-visible:ring-white
					dark:active:bg-slate-400/25
				`,
				className
			)}
			onChange={(newChecked) => {
				setTheme(newChecked ? "dark" : "light");
			}}
			style={style}
		>
			{noSsr(
				checked ? (
					<HiOutlineMoon className="size-6 text-black dark:text-sky-500" height={24} width={24} />
				) : (
					<HiOutlineSun className="size-6 text-black dark:text-sky-500" height={24} width={24} />
				)
			)}
		</Switch>
	);
};
