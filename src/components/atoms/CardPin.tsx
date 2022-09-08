import React from "react"
import Wrapper from "./CardPin.style"

export type CardPinSize = "small" | "medium" | "large"

export type CardPinProps = {
	size?: CardPinSize,
	url: string,
}

export const CardPin
	: React.FunctionComponent<CardPinProps>
	= (props: CardPinProps) => {
		return (
			<Wrapper
				size={props.size || "medium"}
				url={props.url}
			>
			</Wrapper>
		)
	}

export default CardPin
