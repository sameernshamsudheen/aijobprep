import { SignIn} from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <SignIn routing="path" path="/sign-in"  fallbackRedirectUrl="/app"/>
    </main>
  );
}
