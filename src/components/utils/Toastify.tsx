import React from "react"
import { toast, ToastContent, ToastOptions, UpdateOptions } from "react-toastify"

export type CustomToastOptions = {
	autoClose?: number,
}

export interface MyToast {
	loading: (content: ToastContent, options?: CustomToastOptions) => void,
	success: (content: ToastContent, options?: CustomToastOptions) => void,
	info: (content: ToastContent, options?: CustomToastOptions) => void,
	error: (content: ToastContent, options?: CustomToastOptions) => void,
	warning: (content: ToastContent, options?: CustomToastOptions) => void,
	remove: () => void,
}

interface ToastifyConstructor {
	new(): MyToast;
}

const defaultOptions
	: UpdateOptions | ToastOptions
	= {
		position: "top-center",
		theme: "dark",
		autoClose: false,
		closeOnClick: true,
	}

const Toastify: ToastifyConstructor
	= function Toastify () {
		let toastObj: React.ReactText | undefined = undefined

		Toastify.prototype.loading
			= (content: ToastContent, options?: CustomToastOptions | undefined) => {
				if(!toastObj) {
					// new
					toastObj = toast.loading(
						content,
						{
							...defaultOptions as ToastOptions,
							isLoading: true,
						},
					)
				} else {
					toast.update(toastObj, {
						...defaultOptions,
						...options,
						render: content,
						isLoading: true,
						type: toast.TYPE.DEFAULT,
					})
				}

				setTimeout(() => {
					toast.dismiss(toastObj)
				}, options?.autoClose
					? options.autoClose
					: 30000)
			}
		Toastify.prototype.success
			= (content: ToastContent, options?: CustomToastOptions | undefined) => {
				if(!toastObj) {
					// new
					toastObj = toast.success(
						content,
						{
							...defaultOptions as ToastOptions,
							isLoading: false,
						},
					)
				} else {
					toast.update(toastObj, {
						...defaultOptions,
						...options,
						render: content,
						type: toast.TYPE.SUCCESS,
						isLoading: false,
					})
				}

				setTimeout(() => {
					toast.dismiss(toastObj)
				}, options?.autoClose
					? options.autoClose
					: 30000)
			}
		Toastify.prototype.info
			= (content: ToastContent, options?: CustomToastOptions | undefined) => {
				if(!toastObj) {
					// new
					toastObj = toast.info(
						content,
						{
							...defaultOptions as ToastOptions,
							isLoading: false,
						},
					)
				} else {
					toast.update(toastObj, {
						...defaultOptions,
						...options,
						render: content,
						type: toast.TYPE.INFO,
						isLoading: false,
					})
				}

				setTimeout(() => {
					toast.dismiss(toastObj)
				}, options?.autoClose
					? options.autoClose
					: 30000)
			}
		Toastify.prototype.error
			= (content: ToastContent, options?: CustomToastOptions | undefined) => {
				if(!toastObj) {
					// new
					toastObj = toast.error(
						content,
						{
							...defaultOptions as ToastOptions,
							isLoading: false,
						},
					)
				} else {
					toast.update(toastObj, {
						...defaultOptions,
						...options,
						render: content,
						type: toast.TYPE.ERROR,
						isLoading: false,
					})
				}

				setTimeout(() => {
					toast.dismiss(toastObj)
				}, options?.autoClose
					? options.autoClose
					: 30000)
			}
		Toastify.prototype.warning
			= (content: ToastContent, options?: CustomToastOptions | undefined) => {
				if(!toastObj) {
					// new
					toastObj = toast.warning(
						content,
						{
							...defaultOptions as ToastOptions,
							isLoading: false,
						},
					)
				} else {
					toast.update(toastObj, {
						...defaultOptions,
						...options,
						render: content,
						type: toast.TYPE.WARNING,
						isLoading: false,
					})
				}

				setTimeout(() => {
					toast.dismiss(toastObj)
				}, options?.autoClose
					? options.autoClose
					: 30000)
			}

		Toastify.prototype.remove
			= () => {
				toast.dismiss(toastObj)
			}

	} as any as ToastifyConstructor

export default Toastify
