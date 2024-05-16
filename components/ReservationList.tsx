import React, { useState } from 'react'
import ReservationCard from './ReservationCard'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getReservations } from '@/api'

const ReservationList = () => {
	const [page, setPage] = useState(1)
	const { data, isPending, isError, error } = useQuery({
		queryKey: ['reservations', { page: page }],
		queryFn: () => getReservations(page),
		placeholderData: keepPreviousData,
	})

	return (
		<>
			<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4'>
				{isPending ? (
					<>
						<div className='skeleton w-full h-32'></div>
						<div className='skeleton w-full h-32'></div>
						<div className='skeleton w-full h-32'></div>
						<div className='skeleton w-full h-32'></div>
					</>
				) : (
					<>
						{data?.data.map((reservation) => (
							<ReservationCard key={reservation.id} reservation={reservation} />
						))}
					</>
				)}
			</div>
			{data ? (
				<div className='join grid grid-cols-2 w-full'>
					<button
						disabled={isPending || page === 1}
						className='join-item btn btn-outline'
						onClick={() => setPage((p) => p - 1)}
					>
						Previous page
					</button>
					<button
						disabled={isPending || page === data.last_page}
						className='join-item btn btn-outline'
						onClick={() => setPage((p) => p + 1)}
					>
						Next
					</button>
				</div>
			) : null}
			{/* In a real app the error handling would get more attention as to be helpful to users */}
			{isError ? <p className='text-red-500 text-sm'>{error.message}</p> : null}
		</>
	)
}

export default ReservationList
