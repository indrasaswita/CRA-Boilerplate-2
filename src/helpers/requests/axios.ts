import axios, { AxiosRequestHeaders, AxiosResponse } from "axios"
import { RequestAction } from "./constant"
import httpStatus from "http-status"
import Toastify, { MyToast } from "../../components/utils/Toastify"
import LocalStorageConv from "../utilities/local-storage"
import { removeLeadingSlash } from "../utilities/global"
import CONFIG from "../../configs/global-configs"

const coreUrl
	: (url: string) => string
	= (url: string) => {
		return [
			`${CONFIG.backendUrl}/api`,
			removeLeadingSlash(url),
		].join("/")
	}

export const sendApi
	: (
		url: string,
		action: RequestAction,
		headers?: AxiosRequestHeaders,
	) => Promise<any>
	= (
		url: string,
		action: RequestAction,
		headers: AxiosRequestHeaders = {},
	) => new Promise((
		resolve: (value: any) => void,
		reject: (reason?: any) => void,
	) => {
		const auth: any = LocalStorageConv.get("auth-id")

		axios({
			method: action.type,
			url: coreUrl(url),
			data: {
				withCredentials: true,
				...action.data,
			},
			params: action.params || {},
			headers: {
				...headers,
				"Authorization": auth?.jwtToken || "",
				"Content-Type": "application/json",
			},
		})
			.then((value: AxiosResponse<any, any>) => {
				resolve(value.data)
			}, (reason: any) => {
				console.log({ ...reason.response })

				if(reason.response
					&& reason.response.status !== httpStatus.OK) {
					var toast: MyToast = new Toastify()
					toast.error(reason.response.statusText || "Unknown Error", {
						autoClose: 3000,
					})

					if(reason.response.status === httpStatus.UNAUTHORIZED) {
						LocalStorageConv
							.remove("auth-id")
					}
				}

				reject(reason)
			})
	})
