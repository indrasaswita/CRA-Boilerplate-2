import React from "react"
import Wrapper from "./Avatar.style"

export type AvatarProps = {
	image: string,
	width: string,
	className?: string,
}

export const Avatar
	: React.FunctionComponent<AvatarProps>
	= (props: AvatarProps) => {
		return (
			<Wrapper
				image={props.image}
				width={props.width}
				className={props.className}
			/>
		)
	}

export default Avatar
