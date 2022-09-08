import { faSpinnerThird } from "@fortawesome/pro-duotone-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Wrapper from "./LoadingUtil.style"

export type LoadingUtilProps = {
	height: string,
}

export const LoadingUtil
	: React.FunctionComponent<LoadingUtilProps>
	= (props: LoadingUtilProps) => {
		return (
			<Wrapper
				height={props.height}
			>
				<FontAwesomeIcon
					icon={faSpinnerThird}
					fixedWidth
					spinPulse
				/>
				....Loading....
			</Wrapper>
		)
	}

export default LoadingUtil
