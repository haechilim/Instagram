import { Inter } from '@next/font/google'
import Head from 'next/head'
import App from '@/components/App'
import { MainNavigationItemName } from '@/components/navigations/MainNavigation'
import HomeWorkspace from '@/components/workspace/HomeWorkspace'
import { Provider } from 'react-redux'
import store from '@/modules'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <Provider store={store}>
        <App selectedIndex={MainNavigationItemName.HOME}>
          <HomeWorkspace/>
        </App>
      </Provider>
    </>
  )
}
