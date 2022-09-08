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

		background: /* Shadow covers */
		linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, /* Shadows */
		radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0)), radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0)) 0 100%;
		background: /* Shadow covers */
		linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%, /* Shadows */
		radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 2), rgba(0, 0, 0, 0)) 0 100%;
		background-repeat: no-repeat;
		background-color: white;
		background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
		/* Opera doesn't support this in the shorthand */
		background-attachment: local, local, scroll, scroll;

	`

export default Wrapper
