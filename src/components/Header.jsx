import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from './ui/button';
import React from 'react';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full">
      <div className="flex">
        <div className="justify-start pl-4">App logo</div>
        <div className="ml-auto">
          <SignedOut>
            <SignInButton />
            <Link href={'/sign-in'} className="flex items-center gap-2">
              <Button>Log in</Button>{' '}
            </Link>
          </SignedOut>
          <div className="flex items-center space-x-3">
            <SignedIn>
              <Link href={'/dashboard'}>
                <Button>DashBoard</Button>
              </Link>
              <Link href={'/transaction/create'} className="flex items-center gap-2">
                <Button>Add Transaction</Button>
              </Link>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
