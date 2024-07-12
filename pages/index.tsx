import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";

export default function Home() {
  const {user} = useUser();

  return (
    <main>
      <h1>Clerk-Cypress example</h1>
      <div>
        <SignedIn>
          <p>signed-in, {user?.id}</p>
        </SignedIn>
        <SignedOut>
          <p>signed-out</p>
        </SignedOut>
      </div>
    </main>
  );
}
