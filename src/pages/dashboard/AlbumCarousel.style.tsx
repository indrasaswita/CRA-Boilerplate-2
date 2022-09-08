import styled, { StyledComponent } from "styled-components"
import { VARS } from "../../styles/variables"

type WrapperProps = {
	// props
}

const HEIGHT_CARD: number = 120
const PADDING_CARD: number = 40

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		padding: calc(10px + 1vw) 0;

		.slick-slider {

			.slick-list {
				.slick-slide {

					&.slick-active {
						.album-inner {
							height: ${HEIGHT_CARD + PADDING_CARD * 2}px !important;
							padding: 0 !important;
						}
					}
				}
			}
		}

		.slick-legend {
			text-align: right;
			padding: 0 ${VARS.page.paddingX};
			margin-top: calc(-10px - .8vw);

			font-weight: 600;
			opacity: .6;
		}

	`

type AlbumCarouselItemProps = {
	backgroundImage: string,
}

export const AlbumCarouselItem
	: StyledComponent<"div", any, AlbumCarouselItemProps, never>
	= styled.div<AlbumCarouselItemProps>`
		
		height: ${HEIGHT_CARD}px;
		padding: ${PADDING_CARD}px 0;
		display: block !important;
		transition: .2s all;

		.card {
			
			height: 100%;
			position: relative;
			padding: 0 10px;

			> .card-inner {
				background: url('${(p: AlbumCarouselItemProps) => p.backgroundImage}');
				background-size: cover;
				background-position: center;
				border-radius: 10px;

				height: 100%;
				width: inherit;
				position: relative;
				display: flex;
				flex-direction: column;
				// justify-content: flex-end;
				align-items: flex-start;
				padding: 0 calc(20px + 1vw);

				.title {
					position: absolute;
					bottom: 0;
					padding: calc(10px + .5vw) 0;
				}
			}
		}

	`

export default Wrapper
