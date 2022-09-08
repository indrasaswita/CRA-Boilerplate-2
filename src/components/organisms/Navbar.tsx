import {
	faLocationDot as fasLocationDot,
	faEnvelope as fasEnvelope,
} from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Avatar from "../atoms/Avatar"
import Wrapper from "./Navbar.style"

export type NavbarProps = {
	profPic: string,
	name: string,
	isVerified: boolean,
	jobTitle: string,
	location?: string,
	email?: string,
	navbarPopupShow: boolean,
}

export const Navbar
	: React.FunctionComponent<NavbarProps>
	= (props: NavbarProps) => {
		return (
			<Wrapper
				navbarPopupShow={props.navbarPopupShow}
			>
				<Avatar
					className="avatar"
					image={props.profPic}
					width={"calc(40px + 4vw)"}
				/>
				<div className="profile-detail">
					<div className="name">
						{props.name}
					</div>
					<div className="job-title">
						{props.jobTitle}
					</div>
					<div className="labels">
						{props.location !== undefined
							&& props.location.length > 0
							&& (
								<div className="label-item">
									<FontAwesomeIcon
										icon={fasLocationDot}
										fixedWidth
									/>&nbsp;{props.location}
								</div>
							)}
						{props.location !== undefined
							&& props.location.length > 0
							&& (
								<div className="label-item">
									<FontAwesomeIcon
										icon={fasEnvelope}
										fixedWidth
									/>&nbsp;{props.email}
								</div>
							)}
					</div>
				</div>
			</Wrapper>
		)
	}

export default Navbar
