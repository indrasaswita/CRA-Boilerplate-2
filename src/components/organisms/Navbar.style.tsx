import styled, { StyledComponent } from "styled-components"
import { VARS } from "../../styles/variables"

type WrapperProps = {
	navbarPopupShow: boolean,
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		${(p: WrapperProps) => p.navbarPopupShow ? `
			position: sticky;
			top: 0;
			z-index: 9999;

			border-bottom: 1px solid #4447;
			box-shadow: 0 10px 10px rgba(0,0,0,.3);
		` : `
			position: relative;
		`}

		display: flex;
		padding: ${VARS.page.paddingX};
		gap: calc(10px + .8vw);
		background-color: #EEE;

		.avatar {
			margin: calc(5px + .1vw) 0;
		}

		.profile-detail {
			position: relative;
			display: block;
			flex: 1;

			.menu-button {
				display: inline-flex;
				position: absolute;
				right: 0;
				top: 0;

				width: calc(16px + 1.3vw);
				height: calc(16px + 1.3vw);
				min-width: calc(16px + 1.3vw);
				min-height: calc(16px + 1.3vw);

				margin: -10px;
				padding: calc(10px + .5vw);
				color: ${VARS.info};
				transition: .2s all;
				border-radius: 50%;
				cursor: pointer;

				&:hover {
					background-color: ${VARS.info};
					color: white;
				}
			}

			.name {
				font-size: 170%;
				font-weight: 600;

				svg {
					color: ${VARS.info};
				}
			}

			.job-title {
				font-size: 110%;
				font-weight: 500;
				color: #888;
			}

			.labels {
				margin-top: calc(5px + .4vw);
				display: flex;
				flex-wrap: wrap;
				gap: 0 calc(8px + .5vw);

				.label-item {
					font-size: 95%;
					color: #666;
					white-space: nowrap;

					svg {
						color: ${VARS.warning};
					}
				}
			}
		}

	`

export default Wrapper
