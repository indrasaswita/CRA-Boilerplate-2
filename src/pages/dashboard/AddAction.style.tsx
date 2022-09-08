import { darken } from "polished"
import styled, { StyledComponent } from "styled-components"
import { VARS } from "../../styles/variables"

type WrapperProps = {
	// props
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		cursor: pointer;
		background-color: ${VARS.danger};
		color: white;
		border-radius: 1000px;

		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 180%;
		box-shadow: 0 5px 20px rgba(0,0,0,.5); 

		position: sticky;
		bottom: calc(20px + 2vw);
		left: calc(100vw - 60px - 6vw);
		width: min(calc(40px + 2.5vw), 70px);
		height: min(calc(40px + 2.5vw), 70px);

		transition: .2s all;

		&:hover {
			background-color: ${darken(.2, VARS.danger)};
		}

	`

export default Wrapper
