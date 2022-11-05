import type { NextPage } from 'next'
import Head from 'next/head'
import SubHeaderCard from '../components/cards/subHeader';
import SponsorCard from '../components/cards/sponsor';
import LocationCard from '../components/cards/location';
import Header from '../components/header';
import OwnerCard from '../components/cards/owners'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>ENUYGUN Turkey's Travel Site - Flight Ticket, Bus, Hotel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className='jumbotron-main w-screen'>
          <div className='container h-96'>
            Hello
          </div>
        </div>
        <SubHeaderCard />
        <SponsorCard />
        <LocationCard />
        <OwnerCard />
        <div>

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
