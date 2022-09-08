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
		bottom: 5vh;
		left: 90vw;
		width: 5vw;
		height: 5vw;

		transition: .2s all;

		&:hover {
			background-color: ${darken(.2, VARS.danger)};
		}

	`

export default Wrapper
