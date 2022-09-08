import styled, { StyledComponent } from "styled-components"
import { CardPinSize } from "./CardPin"

type WrapperProps = {
	size: CardPinSize,
	url: string,
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		margin: 0;
		padding: 0;
		border-radius: 10px;
		background: url('${(p: WrapperProps) => p.url}');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		${(p: WrapperProps) => {
		switch(p.size) {
		case "small":
			return `
				grid-row-end: span 10;
			`
		case "medium":
			return `
				grid-row-end: span 20;
			`
		case "large":
			return `
				grid-row-end: span 30;
			`
		}
	}}

	`

export default Wrapper
