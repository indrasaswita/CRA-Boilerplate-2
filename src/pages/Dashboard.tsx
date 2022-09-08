import React from "react"
import { connect } from "react-redux"
import Wrapper from "./Dashboard.style"

interface DashboardProps {

}

interface DispatchProps {

}

export type Props = DashboardProps & DispatchProps
export const Dashboard
	: React.FunctionComponent<Props>
	= () => {
		return (
			<Wrapper>
				TESTING SHOW DASHBOARD PAGWE
			</Wrapper>
		)
	}

export default connect(null, {

})(Dashboard)
