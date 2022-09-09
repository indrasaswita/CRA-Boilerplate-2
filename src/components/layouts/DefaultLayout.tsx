import React, { ReactNode } from "react"
import Navbar from "../organisms/Navbar"
import Wrapper from "./DefaultLayout.style"

export type DefaultLayoutProps = {
	children?: ReactNode,
}

export const DefaultLayout
	: React.FunctionComponent<DefaultLayoutProps>
	= (props: DefaultLayoutProps) => {

		return (
			<Wrapper>
				<Navbar />
				<div className="content-wrapper">
					{props.children}
				</div>
			</Wrapper>
		)
	}

export default DefaultLayout
