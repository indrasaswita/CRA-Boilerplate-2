export const formatAddress
	: (address: string) => string | null
	= (address: string) => {
		if(address?.length > 0) {
			return address.substring(0, 6)
				+ "..."
				+ address.substring(38)
		} else {
			return null
		}
	}

export const welcomePrefix
	: () => string
	= () => {
		const current
			: Date
			= new Date()

		if(current.getHours() < 11) {
			return "Good Morning"
		} else if (current.getHours() < 18) {
			return "Good Afternoon"
		} else {
			return "Good Evening"
		}
	}

export const capitalizeFirstLetter
	: (word: string) => string
	= (word: string) => {
		if(word.length === 0) return ""

		return word[0].toUpperCase()
			+ word.substring(1)
	}

export const toTitleCase
	: (value: string) => string
	= (value: string) => {
		value = value.trim()

		var splitted
			: string[]
			= value
				.split(" ")
				.filter((value: (string | undefined)) => {
					return (
						value !== undefined
						&& value !== ""
					)
				})

		splitted = splitted
			.map((val: string) => {
				return capitalizeFirstLetter(val)
			})

		return splitted.join(" ")
	}

export const toSentenceCase
	: (value: string) => string
	= (value: string) => {
		value = value.trim()

		var splitted
			: string[]
			= value
				.split(".")

		splitted = splitted
			.map((val: string) => {
				return capitalizeFirstLetter(val.trim())
			})

		return splitted.join(". ")
	}

export const camelToSnakeCase
	: (str: string) => string
	= (str: string) =>
		str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`)

export const removeLeadingSlash
	: (str: string) => string
	= (str: string) =>
		str.replace(/^\/|\/$/g, "")

export const zeroPad
	: (num: number, places: number) => string
	= (num: number, places: number) => String(num).padStart(places, "0")

export const toReadableTime
	: (seconds: number) => string
	= (seconds: number) => {

		const hs: number = Math.floor(seconds / 3600)
		const ms: number = Math.floor(seconds % 3600 / 60)
		const ss: number = seconds % 60

		return `${hs ? hs.toLocaleString("en-US", {
			maximumFractionDigits: 0,
		}) : ""}h${ms ? " " + ms.toLocaleString("en-US", {
			maximumFractionDigits: 0,
		}) : ""}m${ss ? " " + ss.toLocaleString("en-US", {
			maximumFractionDigits: 0,
		}) : ""}s `
	}
