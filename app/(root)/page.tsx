import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async () => {
	const loggedIn = await getLoggedInUser()

	return (
		<div className='home'>
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type='greeting'
						title='Welcome'
						user={loggedIn?.name || 'Guest'}
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
				banks={[{ currentBalance: 900.98 }, { currentBalance: 600.67 }]}
			/>
		</div>
	)
}

export default Home