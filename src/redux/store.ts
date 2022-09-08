import { configureStore, ThunkAction, Action, EnhancedStore } from "@reduxjs/toolkit"

// root reducer
export const store
	: EnhancedStore<any>
	= configureStore({
		reducer: {
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
