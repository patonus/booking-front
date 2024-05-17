import ReservationForm from '@/components/ReservationForm'
import ReservationList from '@/components/ReservationList'
import Link from 'next/link'

export default function Home() {
	return (
		<div className='min-h-screen bg-base-200'>
			<header>
				<nav className='navbar bg-base-100 shadow-lg'>
					<div className='flex-1'>
						<Link className='btn btn-ghost normal-case text-xl' href='/'>
							Buking.com
						</Link>
					</div>
				</nav>
			</header>
			<main className='p-6'>
				<ReservationForm />
				<ReservationList />
			</main>
		</div>
	)
}
