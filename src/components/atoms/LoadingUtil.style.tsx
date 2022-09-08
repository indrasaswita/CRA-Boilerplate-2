import styled, { StyledComponent } from "styled-components"
import { VARS } from "../../styles/variables"

type WrapperProps = {
	height: string,
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		width: 100%;
		height: ${(p: WrapperProps) => p.height};

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		color: ${VARS.primary};
		letter-spacing: 1px;
		gap: calc(5px + .5vw);
		font-weight: 700;
		font-style: italic;
		font-size: 200%;

		svg {
			font-size: 240%;
		}

	`

export default Wrapper
