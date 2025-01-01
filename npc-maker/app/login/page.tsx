'use client'
import { Auth } from '@supabase/auth-ui-react'
import { createClient } from '@/utils/supabase/client'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Header from '../../components/header'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/dashboard')
      }
    }
    checkSession()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        router.push('/dashboard')
      }
    })
    return () => {
      subscription?.unsubscribe()
    }
  }, [supabase, router])


  return (
    <div>
      <Header titleText="Login to NPC Maker" />
      <div className='h-screen items-center justify-center flex'>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google']}
          view='sign_in'
        />
      </div>
    </div>
  )
}