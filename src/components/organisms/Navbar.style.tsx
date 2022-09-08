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
		` : `
			position: relative;
		`}

		display: flex;
		padding: ${VARS.page.paddingX};
		gap: calc(10px + .8vw);
		background-color: white;

		.avatar {
			margin: calc(5px + .1vw) 0;
		}

		.profile-detail {
			display: block;
			flex: 1;

			.name {
				font-size: 170%;
				font-weight: 600;
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
