import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
	const router = useRouter();

	const handleLogOut = async () => {
		await logoutAccount();

		router.push('/sign-in');
	}

	return (
		<footer className='footer'>
			<div className={type === 'mobile' ? 'footer_name-moblie' : 'footer_name'}>
				<p className='text-xl font-bold text-gray-700'>
					{user?.firstName[0]}
				</p>
			</div>
			<div
				className={type === 'mobile' ? 'footer_email-moblie' : 'footer_email'}>
				<h1 className='text-14 truncate font-normal text-gray-700'>
					{user?.firstName}
				</h1>

				<p className='text-14 truncate font-semi-bold text-gray-600'>
					{user.email}
				</p>
			</div>

			<div className='footer_image' onClick={handleLogOut}>
				<Image src='/icons/logout.svg' fill alt='log out' />
			</div>

		</footer>
	)
}

export default Footer