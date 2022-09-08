/* eslint-disable no-unused-vars */
const set
: (key: string, value: object) => void
= (key: string, value: object) => {
	localStorage.setItem(key, JSON.stringify({
		timestamp: Date.now(),
		value,
	}))
}

const get
: (key: string, timeoutSecond?: number) => object | undefined
= (key: string, timeoutSecond: number = 0) => {
	timeoutSecond *= 1000 // conv to milisec

	const result: {
		timestamp?: number,
		value?: object,
	}
		= JSON.parse(
			localStorage.getItem(key) || "{}",
		)

	if(!result
		|| !("timestamp" in result)) {
		remove(key)

		return undefined
	}

	const timestamp: number = (new Date(result.timestamp!)).getTime()
	if(Date.now() - timestamp > timeoutSecond
		&& timeoutSecond > 0) {
		remove(key)

		return undefined
	}

	return result.value
}

const remove
: (key: string | string[]) => void
= (key: string | string[]) => {
	if(!localStorage
		|| !key)
		return

	if (typeof key === "string"
		&& localStorage.getItem(key))
		localStorage.removeItem(key)
	else if (Array.isArray(key)) {
		key.forEach((i: string) => {
			localStorage.removeItem(i)
		})
	}
}

const LocalStorageConv: {
	set: typeof set,
	get: typeof get,
	remove: typeof remove,
} = {
	set,
	remove,
	get,
}

export default LocalStorageConv
