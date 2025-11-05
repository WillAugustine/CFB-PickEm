import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main
      style={{
        fontFamily: "sans-serif",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Welcome to CFB Pick’Em</h1>

      {!session ? (
        <>
          <p>Please log in to make your picks and view your results.</p>
          <Link href="/login">
            <button
              style={{
                padding: "10px 20px",
                marginTop: "20px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </Link>
        </>
      ) : (
        <>
          <h2>Hello, {session.user?.name}!</h2>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Sign out
          </button>
        </>
      )}
    </main>
  );
}
