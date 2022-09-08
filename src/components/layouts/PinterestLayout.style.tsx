import styled, { StyledComponent } from "styled-components"
import { VARS } from "../../styles/variables"

type WrapperProps = {
	// props
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`

		padding: ${VARS.page.paddingX};
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-auto-rows: 10px;
		gap: calc(8px + .5vw);

	`

export default Wrapper
