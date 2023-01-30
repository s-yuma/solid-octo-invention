import { FC } from 'react';
import Link from 'next/link';
import { useUser } from "@auth0/nextjs-auth0/client";


export default function Header() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <header>
        Welcome {user.name}<Link href="/api/auth/logout">ログアウト</Link>
      </header>
    );
  }

  return (
    <header>
      <Link href="/api/auth/login">ログイン</Link>
    </header>
  );
};

