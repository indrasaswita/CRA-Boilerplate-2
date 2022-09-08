import { actionType } from "../shared/types"
import { ACCOUNT_CLEAR, ACCOUNT_LOADING, ACCOUNT_UPDATE } from "./constants"
import { initialAccount } from "./initial"
import { AccountState } from "./types"

// eslint-disable-next-line no-unused-vars
export type AccountReducer = (state?: AccountState, action?: actionType) => AccountState

const accountReducer: AccountReducer = (state: AccountState = initialAccount, action: actionType = { type: "" }) => {
	switch(action.type) {
	case ACCOUNT_CLEAR:
		return {
			...initialAccount,
			loading: false,
		}

	case ACCOUNT_UPDATE:
		return {
			...state,
			...action.payload.accountState,
			loading: false,
		}

	case ACCOUNT_LOADING:
		return {
			...state,
			loading: true,
		}

	default:
		return state
	}
}

export default accountReducer
