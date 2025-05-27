import Link from 'next/link'
import React from 'react'

function Login() {
  return (
    <div>
      <input type="text" placeholder='email' />
      <input type="password" placeholder='password' />
      <button>login</button>
      <br />
      <Link href="/auth/register">Register</Link>
    </div>
  )
}

export default Login
