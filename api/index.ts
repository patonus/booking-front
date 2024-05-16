import { ApiPage, Reservation } from '@/types'
import axios, { CreateAxiosDefaults } from 'axios'
import Router from 'next/router'

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
