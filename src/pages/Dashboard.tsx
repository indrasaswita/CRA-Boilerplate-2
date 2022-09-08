import React, { useEffect } from "react"
import { connect } from "react-redux"
import DefaultLayout from "../components/layouts/DefaultLayout"
import { fetchPhotos } from "../redux/dashboard/action"
import useAccountRedux from "../redux/hooks/account-redux"
import Wrapper from "./Dashboard.style"
import AddAction from "./dashboard/AddAction"
import AlbumCarousel from "./dashboard/AlbumCarousel"
import PhotoList from "./dashboard/PhotoList"

interface DashboardProps {

}

interface DispatchProps {
	fetchPhotos: () => Promise<any>,
}

export type Props = DashboardProps & DispatchProps
export const Dashboard
	: React.FunctionComponent<Props>
	= (props: Props) => {

		const {
			state: accountState,
		} = useAccountRedux()

		useEffect(() => {
			props.fetchPhotos()
		}, [])

		return (
			<Wrapper>
				<DefaultLayout
					{...accountState}
				>
					<AlbumCarousel />
					<PhotoList />
					<div className="bottom-shadow"></div>
				</DefaultLayout>
				<AddAction />
			</Wrapper>
		)
	}

export default connect(null, {
	fetchPhotos,
})(Dashboard)
