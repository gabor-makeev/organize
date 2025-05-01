import { GoogleSignInButton } from "@/components/ui/GoogleSignInButton/google-sign-in-button"
import { GitHubSignInButton } from "@/components/ui/GitHubSignInButton/github-sign-in-button"

export default function Home() {
  return (
    <div className={'flex flex-col items-center justify-center gap-24'}>
      <h1><a href="#" className={'text-2xl underline hover:no-underline'}>Organize</a></h1>
      <div className={'flex flex-col gap-4 sm:flex-row'}>
        <GoogleSignInButton />
        <GitHubSignInButton />
      </div>
    </div>
  );
}
