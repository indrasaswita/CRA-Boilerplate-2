const MainColor
	: {
		primary: string,
		secondary: string,
		success: string,
		danger: string,
		info: string,
		warning: string,
	}
	= {
		primary: "#0d47a1",
		secondary: "#9933CC",
		success: "#007E33",
		danger: "#E71D35",
		info: "#3FC4B6",
		warning: "#F89F1E",
	}

export const VARS
	: {
		primary: string,
		secondary: string,
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
		},

		page: {
			paddingX: string,
		},
	}
	= {
		primary: MainColor.primary,
		secondary: MainColor.secondary,
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

		page: {
			paddingX: "calc(16px + 1vw)",
		},
	}
