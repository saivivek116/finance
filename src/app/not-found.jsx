import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4">
      {' '}
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
