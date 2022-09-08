import { actionType } from "../shared/types"
import { DASHBOARD_ALBUM_UPDATE, DASHBOARD_CLEAR, DASHBOARD_LOADING, DASHBOARD_UPDATE } from "./constants"
import { initialDashboard } from "./initial"
import { DashboardState } from "./types"

// eslint-disable-next-line no-unused-vars
export type DashboardReducer = (state?: DashboardState, action?: actionType) => DashboardState

const dashboardReducer: DashboardReducer = (state: DashboardState = initialDashboard, action: actionType = { type: "" }) => {
	switch(action.type) {
	case DASHBOARD_CLEAR:
		return {
			...initialDashboard,
			loading: false,
		}

	case DASHBOARD_UPDATE:
		return {
			...state,
			...action.payload.dashboardState,
			loading: false,
		}

	case DASHBOARD_ALBUM_UPDATE:
		return {
			...state,
			albums: action.payload.albums,
			photos: action.payload.photos ? action.payload.photos : state.photos,
			loading: false,
		}

	case DASHBOARD_LOADING:
		return {
			...state,
			loading: true,
		}

	default:
		return state
	}
}

export default dashboardReducer
