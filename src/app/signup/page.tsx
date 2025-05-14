import Link from "next/link";
import { SignUpForm } from "@/components/ui/sign-up-form";
import { Button } from "@/components/ui/button";

export default function SignUp() {
	return (
		<div className={'flex flex-col sm:items-center justify-center gap-24 px-2.5 sm:px-0'}>
			<h1 className={"self-center text-2xl underline hover:no-underline"}>Organize</h1>
			<div className={"sm:w-96"}>
				<p className={"text-xl"}>Create an account</p>
				<SignUpForm />
				<div className="flex justify-center">
					<Link href={"/"}>
						<Button variant={"link"}>
							Log in
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}