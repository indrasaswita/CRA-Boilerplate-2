/* eslint-disable no-unused-vars */
export type actionType = {
	type: string | null,
	payload?: any,
}

export const API_GET: string = "GET"
export const API_POST: string = "POST"
export const API_UPLOAD_SINGLE: string = "UPLOAD_SINGLE"
export const ERROR_500: string = "Internal Server Error"
export const ERROR_400: string = "Data Not Found"
export const ERROR_FE_VALIDATION_CODE: string = "NEXT_VALIDATION"

export interface ValidationResult {
	status: boolean,
	message: string,
}

export type apartmentStorage = {
	data: {
		id: number,
		name: string,
	}[],
	time: number,
}
export enum ErrorStatus {
	OK,
	Warning,
	Error,
}

export type PromiseResolve = (value: any) => void
export type PromiseReject = (reason?: any) => void

export type PaginationDetail = {
	perpage: number,
	page: number,
	total: number,
	from: number,
	to: number,
	lastpage: number,
}
