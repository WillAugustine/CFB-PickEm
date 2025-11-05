import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  // Redirect to home if already logged in
  useEffect(() => {
    if (session) {
      router.replace("/");
    }
  }, [session, router]);

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>CFB Pick’Em Login</h1>
      <p>Sign in with Microsoft to continue.</p>
      <button
        onClick={() =>
          signIn("azure-ad", {
            callbackUrl: "/", // 👈 redirects to home after login
          })
        }
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        Sign in with Microsoft
      </button>
    </main>
  );
}
