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
