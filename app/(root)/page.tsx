import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

function Home() {
	const loggedIn = { firstName: 'Emmanuel', lastName: 'Nodo', email: 'emma@gmail.com' }
	
	return (
		<div className='home'>
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type='greeting'
						title='Welcome'
						user={loggedIn?.firstName || 'Guest'}
						subtext='Access and manage your account transaction informations efficiently.'
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1500.65}
					/>
				</header>
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]} 
				banks={[{currentBalance: 900.98}, {currentBalance: 600.67}]}
			/>
		</div>
	)
}

export default Home