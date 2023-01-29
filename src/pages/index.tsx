import { Inter } from '@next/font/google'
import Head from 'next/head'
import App from '@/components/App'
import { MainNavigationItemName } from '@/components/navigations/MainNavigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <App selectedIndex={MainNavigationItemName.HOME} />
    </>
  )
}
