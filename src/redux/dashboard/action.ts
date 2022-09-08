import fetchPhotosUtil from "../../helpers/requests/api/fetch-photos"
import {
	DASHBOARD_ALBUM_UPDATE,
	DASHBOARD_CLEAR, DASHBOARD_LOADING, DASHBOARD_UPDATE,
} from "./constants"
import { DashboardAlbumState, DashboardState } from "./types"

export const clearDashboard: Function = (whendone: Function | null = null) => (dispatch: any) => {
	dispatch(activateLoading())

	dispatch({
		type: DASHBOARD_CLEAR,
	})

	if(whendone)
		whendone()
}

export const updateDashboard
	: (dashboardState: DashboardState) => void
	= (dashboardState: DashboardState) => (dispatch: any) => {
		dispatch(activateLoading())
		dispatch({
			type: DASHBOARD_UPDATE,
			payload: {
				dashboardState,
			},
		})
	}

export const fetchPhotos
	: () => (dispatch: any) => Promise<any>
	= () => (dispatch: any) =>
		new Promise((

		) => {
			dispatch(activateLoading())

			fetchPhotosUtil()
				.then((albums: DashboardAlbumState[]) => {
					dispatch({
						type: DASHBOARD_ALBUM_UPDATE,
						payload: {
							albums,
							photos: albums[0].photos,
						},
					})
				})
		})

export const activateLoading: Function = () => {
	return {
		type: DASHBOARD_LOADING,
	}
}
