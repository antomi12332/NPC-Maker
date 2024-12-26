'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClient } from '@supabase/supabase-js'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Header from '../components/header'
import { login, signup } from './actions'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export default function Login() {
  return (
    <div>
      <Header titleText="Login to NPC Maker" />
      <div className='h-screen items-center justify-center flex'>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
        />
        <form>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
          <button formAction={login}>Log in</button>
          <button formAction={signup}>Sign up</button>
        </form>
      </div>
    </div>
  )
}