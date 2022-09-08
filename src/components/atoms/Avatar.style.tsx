import styled, { StyledComponent } from "styled-components"

type WrapperProps = {
	image: string,
	width: string,
}

const Wrapper
	: StyledComponent<"div", any, WrapperProps, never>
	= styled.div<WrapperProps>`
		
		display: inline-block;
		width: ${(p: WrapperProps) => p.width};
		height: ${(p: WrapperProps) => p.width};
		min-width: ${(p: WrapperProps) => p.width};
		min-height: ${(p: WrapperProps) => p.width};
		position: relative;
		content: "\\0020";

		background: url('${(p: WrapperProps) => p.image}');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;

		border-radius: 50%;
		box-shadow: 0 0 10px rgba(0,0,0,.2);

	`

export default Wrapper
