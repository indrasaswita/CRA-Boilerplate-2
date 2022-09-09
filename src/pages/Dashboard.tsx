import React, { useEffect } from "react"
import { connect } from "react-redux"
import DefaultLayout from "../components/layouts/DefaultLayout"
import { fetchPhotos } from "../redux/dashboard/action"
import Wrapper from "./Dashboard.style"

interface DashboardProps {

}

interface DispatchProps {
	fetchPhotos: () => Promise<any>,
}

export type Props = DashboardProps & DispatchProps
export const Dashboard
	: React.FunctionComponent<Props>
	= (props: Props) => {

		useEffect(() => {
			props.fetchPhotos()
		}, [])

		return (
			<Wrapper>
				<DefaultLayout>
					TEST CONTENT
				</DefaultLayout>
			</Wrapper>
		)
	}

export default connect(null, {
	fetchPhotos,
})(Dashboard)
