import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from './ui/button';
import React from 'react';
import { LayoutDashboard, PenBox } from 'lucide-react';
import { checkUser } from '@/lib/checkUser';

const Header = async () => {
  await checkUser();
  return (
    <nav className="fixed top-0 w-full py-2 px-3 border-b bg-white">
      <div className="flex align-middle">
        <div className="justify-start pl-4">
          <Link href={'/'}>App Logo</Link>
        </div>
        <div className="ml-auto">
          <SignedOut>
            <Link href={'/sign-in'} className="flex items-center gap-2">
              <Button>Login</Button>
            </Link>
          </SignedOut>
          <div className="flex items-center space-x-3">
            <SignedIn>
              <Link href={'/dashboard'}>
                <Button>
                  <LayoutDashboard />
                  <span className="hidden md:inline">DashBoard</span>
                </Button>
              </Link>
              <Link href={'/transaction/create'} className="flex items-center gap-2">
                <Button>
                  <PenBox />
                  <span className="hidden md:inline">Add Transaction</span>
                </Button>
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
