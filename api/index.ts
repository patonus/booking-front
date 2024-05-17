import { ApiPage, Reservation, ReservationData } from '@/types'
import axios, { CreateAxiosDefaults } from 'axios'

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL

const axiosConfig: CreateAxiosDefaults = {
	baseURL: BASE_URL,
	timeout: 30000,
}
const apiClient = axios.create(axiosConfig)

export const getReservations = (page: number) =>
	apiClient
		.get<ApiPage<Reservation>>('/reservations', {
			params: {
				page: page,
			},
		})
		.then(({ data }) => data)

export const storeReservations = (data: ReservationData) =>
	apiClient.post<Reservation[]>('/reservations', data).then(({ data }) => data)
