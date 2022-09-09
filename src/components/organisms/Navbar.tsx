import React from "react"
import Wrapper from "./Navbar.style"

export type NavbarProps = {
	// props
}

export const Navbar
	: React.FunctionComponent<NavbarProps>
	= () => {
		return (
			<Wrapper>
				Indra Saswita
			</Wrapper>
		)
	}

export default Navbar
