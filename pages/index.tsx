import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Clerk-Cypress example</h1>
      <div>
        <SignedIn>
          <p>signed-in</p>
        </SignedIn>
        <SignedOut>
          <p>signed-out</p>
        </SignedOut>
      </div>
    </main>
  );
}
