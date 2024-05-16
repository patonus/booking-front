export type Reservation = {
	id: number
	start_date: string
	end_date: string
	created_at: string
}

export type ApiPage<Data extends Record<string, unknown>> = {
	data: Data[]
	last_page: number
}

export type ReservationData = {
	start_date: string
	end_date: string
	count: number
	// Kind of a hack, to allow type-safe handling of API errors not related to a given field
	form?: never
}
