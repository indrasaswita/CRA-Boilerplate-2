import React from "react"
import { connect } from "react-redux"
import PinterestLayout from "../../components/layouts/PinterestLayout"
import { DashboardPhotoState } from "../../redux/dashboard/types"
import useDashboardRedux from "../../redux/hooks/dashboard-redux"
import Wrapper from "./PhotoList.style"

interface PhotoListProps {

}

interface DispatchProps {

}

export type Props = PhotoListProps & DispatchProps
export const PhotoList
	: React.FunctionComponent<Props>
	= () => {

		const {
			photos,
		} = useDashboardRedux()

		return (
			<Wrapper>
				<PinterestLayout
					photoUrls={photos
						?.map((
							photo: DashboardPhotoState,
						) => photo.url) || []}
				/>
			</Wrapper>
		)
	}

export default connect(null, {

})(PhotoList)
