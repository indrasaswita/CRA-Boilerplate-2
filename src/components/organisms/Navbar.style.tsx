import styled, { StyledComponent } from "styled-components"

type WrapperProps = {
	//
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		background-color: #333;
		color: white;
		padding: calc(5px + .5vw) calc(10px + 1vw);
		text-align: center;

	`

export default Wrapper
