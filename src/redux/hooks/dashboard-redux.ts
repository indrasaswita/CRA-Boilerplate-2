import { useSelector } from "react-redux"
import { DashboardAlbumState, DashboardPhotoState, DashboardState } from "../dashboard/types"
import { RootState } from "../store"

const useDashboardRedux
	: () => {
		state: DashboardState,
		albums: DashboardAlbumState[] | null,
		photos: DashboardPhotoState[] | null,
	}
	= () => {
		const state
			: DashboardState
			= useSelector((state: RootState) => state.dashboard)

		return {
			state,
			albums: state?.albums || null,
			photos: state?.photos || null,
		}
	}

export default useDashboardRedux
