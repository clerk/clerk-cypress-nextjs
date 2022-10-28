import { withServerSideAuth } from "@clerk/nextjs/ssr";

export const getServerSideProps = withServerSideAuth(async ({ req }) => {
  const { sessionId, getToken } = req.auth;
  const sessionToken = await getToken();

  return {
    props: {
      signedIn: sessionId != null,
      sessionToken: sessionToken,
      sessionId: sessionId,
    },
  };
});

export default function Page({ signedIn, sessionToken, sessionId }) {
  return (
    <>
      <h1>{signedIn ? "Signed in" : "Signed out"}</h1>
      <div>sessionId: {sessionId}</div>
      <div>sessionToken: {sessionToken}</div>
    </>
  );
}
