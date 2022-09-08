import styled, { StyledComponent } from "styled-components"
import { device } from "../../styles/mixins/media-width.mixin"
import { VARS } from "../../styles/variables"

export type WrapperProps = {
	boxShadow?: string,
	borderRadius?: string,
	border?: string,
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`

		${(p: WrapperProps) => p.border ? `
			border: ${p.border};
		` : ""}
		${(p: WrapperProps) => p.boxShadow ? `
			box-shadow: ${p.boxShadow};
		` : ""}
		${(p: WrapperProps) => p.borderRadius ? `
			border-radius: ${p.borderRadius};
		` : ""}

		@media ${device.tabletPDown} {
			.btn-nav {

				&.btn {
					font-size: 80%;
					border: 0;
					width: calc(15px + 1.5vw);
					height: calc(15px + 1.5vw);
				}

				&:not(.btn) {
					opacity: .5;
					font-size: 120%;
					width: calc(40px + 1vw);
					height: calc(40px + 1vw);
					border: 2px solid ${VARS.primary};

					&.prev {
						margin-right: calc(-48px - 1.8vw);
						margin-left: calc(5px + .5vw);
					}

					&.next {
						margin-left: calc(-48px - 1.8vw);
						margin-right: calc(5px + .5vw);
					}

					&:hover {
						opacity: 1;
					}
				}
			}
		}


		@media ${device.tabletLUp} {
			.btn-nav {
				border: 0;
				width: calc(15px + 1.5vw);
				height: calc(15px + 1.5vw);
				font-size: 80%;

				&:not(.btn) {

					&.prev {
						margin-left: calc(-18px - 1.8vw);
					}

					&.next {
						margin-right: calc(-18px - 1.8vw);
					}
				}
			}
		}

		display: flex;
		align-items: center;
		gap: calc(3px + .3vw);

		.btn-nav {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 1000px;
			box-shadow: 0 2px 5px rgba(0,0,0,.2);
			background-color: white;
			color: ${VARS.primary};
			transition: .2s all;
			cursor: pointer;
			z-index: 1;

			&:hover {
				background-color: ${VARS.primary};
				color: white;
			}
		}

		> .carousel {
			// margin: -15px;
			flex: 1;
			.carousel-inner-wrapper {
				padding: 15px;
				position: relative;
				overflow: hidden;
				.carousel-item {
					position: relative;
					display: none;
					float: left;
					width: 100%;
					max-width: 200px;
					margin-right: -100%;
					-webkit-backface-visibility: hidden;
					backface-visibility: hidden;
					transition: all .3s ease-in-out;

					&:not(.active) {
						opacity: 0;
					}

					&.item-next,
					&.item-prev {
						display: block;
					}

					&.active {
						display: block;
						opacity: 1;
					}

					&.item-end-prev {
						opacity: 0;
						transform: translateX(100%);
					}
					&.item-end-next {
						opacity: 0;
						transform: translateX(-100%);
					}
				}
			}
			.bottom-indicators {
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: calc(12px + 1.2vw);

				&.light {
					.btn:not(.next):not(.prev) {
						
						&:not(.active) {
							background-color: rgba(255,255,255,.5);
						}

						&.active {
							background-color: white;
						}

					}
				}

				&:not(.light) {
					.btn:not(.next):not(.prev) {
						
						&:not(.active) {
							background-color: rgba(128,128,128,.5);
						}

						&.active {
							background-color: ${VARS.primary};
						}
						
					}
				}

				.btn {
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 1000px;

					&:not(:first-child) {
						margin-left: calc(3px + .3vw);
					}

					&:not(.active) {
						cursor: pointer;
					}

					&:not(.next):not(.prev) {
						color: transparent;
						border: 0;
						transition: all .3s ease-in;

						&.hidden {
							display: none;
						}

						&.b {
							width: calc(5px + .5vw);
							height: calc(5px + .5vw);
						}

						&:not(.b):not(.c) {
							width: calc(3px + .3vw);
							height: calc(3px + .3vw);
						}
					}
				}
			}
		}

	`

export default Wrapper
