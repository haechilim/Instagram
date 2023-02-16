import { Inter } from '@next/font/google'
import Head from 'next/head'
import { Provider } from 'react-redux'
import App from '@/components/App'
import { PageName } from '@/components/navigations/AppNavigation'
import HomeWorkspace from '@/components/workspace/HomeWorkspace'
import store from '@/modules'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>
      <Provider store={store}>
        <App page={PageName.HOME}>
          <HomeWorkspace/>
        </App>
      </Provider>
    </>
  )
}
