'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { clsx } from 'clsx'
import { GitHubIcon } from './github-icon'

export function GitHubSignInButton() {
	const [mounted, setMounted] = useState(false)
	const { theme } = useTheme()
	const router = useRouter()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const githubIconVariant = theme === 'light' ? 'dark' : 'light'

	return (
		<button
			onClick={() => router.push('/dashboard')}
			className={clsx(
				'flex items-center gap-3 max-w-[398px] h-10 cursor-pointer border rounded-[4px] text-sm font-roboto tracking-[0.25px] px-3 relative group',
				theme === 'dark' && 'border-[#8e918f] bg-[#131314]',
				theme === 'light' && 'duration-[218ms] border-[#747775] bg-white hover:shadow-[0_1px_2px_0_rgba(60,64,67,.30),0_1px_3px_1px_rgba(60,64,67,.15)]'
			)}
		>
			<div
				className={clsx(
					'absolute inset-0 duration-[218ms] opacity-[0.08] hover:opacity-[0.08] group-focus:opacity-[0.12]',
					theme === 'dark' && 'hover:bg-white group-focus:bg-white',
					theme === 'light' && 'hover:bg-[#303030] group-focus:bg-[#303030]'
				)}
			></div>
			<GitHubIcon variant={githubIconVariant} />
			<span className={"grow"}>Sign in with GitHub</span>
		</button>
	)
}