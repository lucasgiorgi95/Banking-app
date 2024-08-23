import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
// import TotalBalanceBox from '@/components/ui/TotalBalancebox'


const Home = () => {
 const loggedIn = {firtsName:'Lucas'}
    return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
                type='greeting'
                title='Welcom'
                user={loggedIn?.firtsName || 'Guest'}
                subtext='Acces and manage your account and transactions and transactions efficiently.'
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
        </header>
      </div>
    </section>
  )
}

export default Home
 