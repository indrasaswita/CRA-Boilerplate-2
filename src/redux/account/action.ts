import {
	ACCOUNT_CLEAR, ACCOUNT_LOADING, ACCOUNT_UPDATE,
} from "./constants"
import { AccountState } from "./types"

export const clearAccount: Function = (whendone: Function | null = null) => (dispatch: any) => {
	dispatch(activateLoading())

	dispatch({
		type: ACCOUNT_CLEAR,
	})

	if(whendone)
		whendone()
}

export const updateAccount
	: (accountState: AccountState) => void
	= (accountState: AccountState) => (dispatch: any) => {
		dispatch(activateLoading())
		dispatch({
			type: ACCOUNT_UPDATE,
			payload: {
				accountState,
			},
		})
	}

export const activateLoading: Function = () => {
	return {
		type: ACCOUNT_LOADING,
	}
}
