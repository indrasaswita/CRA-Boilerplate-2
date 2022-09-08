import React from "react"
import CardPin, { CardPinSize } from "../atoms/CardPin"
import Wrapper from "./PinterestLayout.style"

export type PinterestLayoutProps = {
	photoUrls: string[],
}

export const PinterestLayout
	: React.FunctionComponent<PinterestLayoutProps>
	= (props: PinterestLayoutProps) => {

		const CARD_PIN_SIZES
			: CardPinSize[]
			= [
				"small",
				"medium",
				"large",
			]

		return (
			<Wrapper>
				{props.photoUrls
					?.map((
						url: string,
						index: number,
					) => (
						<CardPin
							key={index}
							size={
								CARD_PIN_SIZES[
									Math.floor(Math.random() * CARD_PIN_SIZES.length)
								]
							}
							url={url}
						/>
					))}
			</Wrapper>
		)
	}

export default PinterestLayout
