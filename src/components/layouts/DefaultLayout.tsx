import React, { ReactNode, useEffect, useState } from "react"
import { AccountState } from "../../redux/account/types"
import Navbar from "../organisms/Navbar"
import Wrapper from "./DefaultLayout.style"

export type DefaultLayoutProps = {
	children?: ReactNode,
} & AccountState

export const DefaultLayout
	: React.FunctionComponent<DefaultLayoutProps>
	= (props: DefaultLayoutProps) => {

		const [navbarActive, setNavbarActive] = useState<boolean>(false)
		let currScrollY: number = 0

		const scrollPosition
			: () => void
			= () => {
				const scrollDir
					: string
					= window.scrollY > currScrollY ? "bottom" : "up"

				if (window.scrollY > 40
					&& scrollDir === "up") {
					setNavbarActive(true)
				} else {
					setNavbarActive(false)
				}

				currScrollY = window.scrollY
			}

		useEffect(() => {
			window.addEventListener("scroll", scrollPosition)
		}, [])

		return (
			<Wrapper>
				<Navbar
					{...props}
					navbarPopupShow={navbarActive}
				/>
				<div className="content-wrapper">
					{props.children}
				</div>
			</Wrapper>
		)
	}

export default DefaultLayout
