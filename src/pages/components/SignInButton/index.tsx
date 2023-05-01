import {signIn, signOut, useSession} from 'next-auth/react'

export function SignInButton(){
  const { data: session } = useSession()

  return(
    session ? (
      <button className='btn-style-none' onClick={() => signOut()}>{session.user.name}</button>
    ) : (
      <button className='btn-style-none' onClick={()=>signIn('github')}>Log In</button>
    )
  )
}