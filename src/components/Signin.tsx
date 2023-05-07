'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import SignButton from './ui/SignButton';


type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
}

export default function Signin({providers, callbackUrl}: Props) {
  return (
    <>
      {Object.values(providers).map(({name, id}) => (
      <SignButton
        key={id}
        text={`Login ${name}`}
        onClick = {() => signIn(id, {callbackUrl: callbackUrl})}
        style='page'
      />
      ))}
    </>
  );
}

