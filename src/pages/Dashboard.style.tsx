import styled, { StyledComponent } from "styled-components"

type WrapperProps = {
	// props
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		.bottom-shadow {
			position: sticky;
			bottom: 0;

			width: 100vw;
			height: 0px;
			box-shadow: 0 0px 100px 100px rgba(255,255,255,.8);
			content: "\\0020";
		}

	`

export default Wrapper
