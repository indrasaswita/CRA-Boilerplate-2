const MainColor
	: {
		primary: string,
		success: string,
		danger: string,
		info: string,
		warning: string,
	}
	= {
		primary: "#2df",
		success: "#2f9",
		danger: "#f18",
		info: "#ce0",
		warning: "#fa3",
	}

export const VARS
	: {
		primary: string,
		success: string,
		danger: string,
		info: string,
		warning: string,

		card: {
			gap: string,
			borderColor: string,
			borderRadius: string,
			backgroundColor: string,
			innerCard: {
				backgroundColor: string,
				borderRadius: string,
			},
		},

		sidebar: {
			width: string,
			borderColor: string,
			backgroundColor: string,
		}
	}
	= {
		primary: MainColor.primary,
		success: MainColor.success,
		danger: MainColor.danger,
		info: MainColor.info,
		warning: MainColor.warning,

		card: {
			gap: "calc(8px + .8vw)",
			borderColor: "#002",
			borderRadius: "8px",
			backgroundColor: "#002D",
			innerCard: {
				backgroundColor: "#57f5",
				borderRadius: "6px",
			},
		},

		sidebar: {
			width: "calc(200px + 5vw)",
			borderColor: "#002",
			backgroundColor: "#002D",
		},
	}
