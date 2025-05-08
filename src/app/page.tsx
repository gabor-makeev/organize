import { GoogleSignInButton } from "@/components/ui/GoogleSignInButton/google-sign-in-button"
import { GitHubSignInButton } from "@/components/ui/GitHubSignInButton/github-sign-in-button"
import { SignInForm } from "@/components/ui/sign-in-form";

export default function Home() {
  return (
    <div className={'flex flex-col sm:items-center justify-center gap-24 px-2.5 sm:px-0'}>
      <h1 className={"self-center"}><a href="#" className={'text-2xl underline hover:no-underline'}>Organize</a></h1>
      <div>
        <SignInForm />
        <div className="mt-4 text-center">
          Or
        </div>
        <div className={'flex flex-col gap-4 sm:flex-row mt-4'}>
          <GoogleSignInButton />
          <GitHubSignInButton />
        </div>
      </div>
    </div>
  );
}
