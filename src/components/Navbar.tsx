'use client';

import Link from 'next/link';
import BellIcon from './ui/icons/BellIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SignButton from './ui/SignButton';
import { useSession, signIn, signOut } from 'next-auth/react';
import Avatar from './ui/Avatar';


const menu = [
  {
    href: '/news',
    name: 'NEWS'
  },
  {
    href: '/style',
    name: 'STYLE'
  },
  {
    href: '/free',
    name: 'FREE'
  },
]

export default function Navbar() {
  const {data: session} = useSession();
  const user = session?.user;

  return (
    <div>
      <nav className='flex justify-between items-center px-6 py-2'>
        <Link href='/'>
          <h1 className='text-2xl font-bold'>TRENDIT</h1>
        </Link>
        <ul className='flex gap-4 items-center'>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {item.name}
              </Link>
            </li>
          ))}      
        </ul>
        <div className='flex gap-4 items-center'>
          <SearchIcon />
          {session ? (
            <>
              <BellIcon />
              {user && (
              <Link href={`/user/${user.username}`}>
                <Avatar image={user.image} />
              </Link>
              )}
              <SignButton text='Logout' onClick={() => signOut()}/>
            </>
          ) : (
            <SignButton text='Login' onClick={() => signIn()}/>
          )}
        </div>    
      </nav>
    </div>
  );
}
 
