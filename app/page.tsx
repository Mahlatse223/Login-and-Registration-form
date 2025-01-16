'use client'; // Ensure the component runs on the client side

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For App Router

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Ensure the code runs only on the client
    router.push('/login-reg/login');
  }, [router]);

  return (
    <main>
      {/* You can display a loading message or any content here */}
      <p>Redirecting...</p>
    </main>
  );
};

export default Page;
