'use client'

import { GitHubIcon } from "./github-icon"
import { useTheme } from "next-themes"

export function GitHubSignInButton() {
	const { theme } = useTheme()
	const githubIconVariant = theme === 'light' ? 'dark' : 'light'

	return (
		<button className={'flex justify-center items-center gap-3 w-auto max-w-96 h-10 cursor-pointer border border-[#8e918f] rounded-[4px] text-sm font-roboto tracking-[0.25px] px-3 relative bg-[#131314] group'}>
			<div className={'absolute inset-0 hover:bg-white duration-[218ms] opacity-[0.08] hover:opacity-[0.08] group-focus:bg-white group-focus:opacity-[0.12]'}></div>
			<GitHubIcon variant={githubIconVariant} />Sign in with GitHub
		</button>
	)
}