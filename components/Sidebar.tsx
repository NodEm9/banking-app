'use client';
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Footer from './Footer';
import PlaidLink from './PlaidLink';

const Sidebar = ({ user }: SiderbarProps) => {
	const pathname = usePathname();
	return (
		<section className="sidebar">
			<nav className='flex flex-col gap-4'>
				<Link
					href='/'
					className='flex mb-12 cursor-pointer items-center  gap-2'
				>
					<Image
						src='/icons/orientis-2.svg'
						width={34}
						height={34}
						alt='Horizon logo'
						className='size-[24px] max-xl:size-14'
					/>
					<h1 className="sidebar-logo">ORIENTIS</h1>
				</Link>
				{sidebarLinks.map((item) => {
					const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
					return (
						<Link key={item.label} href={item.route}
							className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
						>
							<div className='relative size-6'>
								<Image
									src={item.imgURL}
									alt={item.label}
									fill
									className={cn('size-6', {
										'brightness-[3] invert': isActive,
									})}
								/>
							</div>
							<p className={cn('sidebar-label', { '!text-white': isActive })}>
								{item.label}
							</p>
						</Link>
					)
				})}

				<PlaidLink user={user} />
			</nav>

				<Footer user={user} />
		</section>
	)
}

export default Sidebar