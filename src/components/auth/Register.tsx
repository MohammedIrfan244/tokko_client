import Link from 'next/link'
import React from 'react'

function Register() {
  return (
    <div>
      <input type="email" required placeholder='email'/>
      <input type="text" required placeholder='username'/>
      <input type="password" required placeholder='password'/>
      <button>Register</button>
      <br />
      <Link href="/auth/login" >Login</Link>
    </div>
  )
  
}

export default Register
