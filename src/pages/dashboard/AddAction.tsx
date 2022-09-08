import { faPlus } from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Wrapper from "./AddAction.style"

export type AddActionProps = {
	// props
}

export const AddAction
	: React.FunctionComponent<AddActionProps>
	= () => {
		return (
			<Wrapper>
				<FontAwesomeIcon
					icon={faPlus}
					fixedWidth
				/>
			</Wrapper>
		)
	}

export default AddAction
