import { lighten } from "polished"

export const button
	: (color: string) => string
	= (color: string) => {
		return `
			background-color: ${color};
			color: black;
			border-style: solid;
			border-color: #777;

			&:hover,
			&:focus {
				background-color: ${lighten(.14, color)};
				color: black;
				border-color: white;
				box-shadow: 0px 0px 20px rgb(255 255 255 / 40%)
			}
		`
	}

export const buttonOutlined
	: (color: string) => string
	= (color: string) => {
		return `
			background-color: transparent;
			color: white;
			border-style: solid;
			border-color: ${color};

			&:hover,
			&:focus {
				background-color: ${lighten(.1, color)};
				color: black;
				border-color: rgba(255,255,255,.6);
				box-shadow: 0px 0px 20px rgb(255 255 255 / 40%)
			}
		`
	}

export const buttonTransparent
	: (color: string) => string
	= (color: string) => {
		return `
			background-color: transparent;
			color: #fffc;
			border: 0;

			&:hover,
			&:focus {
				color: ${lighten(.16, color)};
			}
		`
	}
