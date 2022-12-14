import styled, { StyledComponent } from "styled-components"

type WrapperProps = {
	// props
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		position: relative;
		min-height: 100vh;

	`

export default Wrapper
