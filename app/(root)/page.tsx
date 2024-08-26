import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSideBar from '@/components/RightSideBar'
// import TotalBalanceBox from '@/components/ui/TotalBalancebox'


const Home = () => {
 const loggedIn = {firstName:'Lucas', lastName:'Giorgi', email:'lucas@gmail.com'}
    return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox
                type='greeting'
                title='Welcom'
                user={loggedIn?.firstName || 'Guest'}
                subtext='Acces and manage your account and transactions and transactions efficiently.'
            />
            <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
        </header>
        transaction
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.5},{currentBalance: 222.2}]}
      />
    </section>
  )
}

export default Home
 