'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z.string().min(1, "This field is required").email(),
	password: z.string().min(1, "This field is required"),
})

export function SignUpForm() {
	const router = useRouter()
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: ""
		}
	})

	const onSubmit = (values: z.infer<typeof formSchema>) => {
		// login logic will take place here
		console.log("values submitted for registration:", values)

		router.push("/dashboard")
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className={"space-y-8 flex flex-col border rounded-md p-4"}>
				<FormField
					control={form.control}
					name={"email"}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name={"password"}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type={"submit"} variant={"outline"} className={"self-center"}>Sign up</Button>
			</form>
		</Form>
	)
}