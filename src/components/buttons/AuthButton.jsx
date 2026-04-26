'use client';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {

  const session = useSession();

  return (
    <div>
      {session.status === "authenticated" ? (
        <>
          <button onClick={() => signOut()} className="btn btn-primary btn-outline">Log Out</button>
        </>
      ) : (
        <>
          <Link
            className="btn btn-primary btn-outline font-bold"
            href={"/login"}
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButton;
