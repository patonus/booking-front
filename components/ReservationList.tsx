import React from 'react'
import ReservationCard from './ReservationCard'
import { useQuery } from '@tanstack/react-query'
import { getReservations } from '@/api'

const ReservationList = () => {
	const {
		data: page,
		isPending,
		isError,
		error,
	} = useQuery({
		queryKey: ['reservations'],
		queryFn: getReservations,
	})
	return (
		<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{isPending ? (
				<>
					<div className='skeleton w-full h-32'></div>
					<div className='skeleton w-full h-32'></div>
					<div className='skeleton w-full h-32'></div>
					<div className='skeleton w-full h-32'></div>
				</>
			) : (
				page?.data.map((reservation) => (
					<ReservationCard key={reservation.id} reservation={reservation} />
				))
			)}
			{/* In a real app the error handling would get more attention as to be helpful to users */}
			{isError ? <p className='text-red-500 text-sm'>{error.message}</p> : null}
		</div>
	)
}

export default ReservationList
