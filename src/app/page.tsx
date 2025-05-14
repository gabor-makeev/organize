import { GoogleSignInButton } from "@/components/ui/GoogleSignInButton/google-sign-in-button"
import { GitHubSignInButton } from "@/components/ui/GitHubSignInButton/github-sign-in-button"
import { SignInForm } from "@/components/ui/sign-in-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={'flex flex-col sm:items-center justify-center gap-24 px-2.5 sm:px-0'}>
      <h1 className={"self-center text-2xl underline hover:no-underline"}>Organize</h1>
      <div className={"sm:w-96"}>
        <SignInForm />
        <div className="flex justify-center">
          <Link href={"/signup"}>
            <Button variant={"link"}>
              Create an account
            </Button>
          </Link>
        </div>
        <div className="mt-4 text-center">
          Or
        </div>
        <div className={'flex flex-col items-center gap-4 sm:flex-row mt-4'}>
          <GoogleSignInButton />
          <GitHubSignInButton />
        </div>
      </div>
    </div>
  );
}
