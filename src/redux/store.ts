import { configureStore, ThunkAction, Action, EnhancedStore } from "@reduxjs/toolkit"
import accountReducer from "./account/reducer"
import dashboardReducer from "./dashboard/reducer"

// root reducer
export const store
	: EnhancedStore<any>
	= configureStore({
		reducer: {
			account: accountReducer,
			dashboard: dashboardReducer,
		},
	})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
