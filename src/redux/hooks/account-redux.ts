import { useSelector } from "react-redux"
import { AccountState } from "../account/types"
import { RootState } from "../store"

const useAccountRedux
	: () => {
		state: AccountState,
	}
	= () => {
		const state
			: AccountState
			= useSelector((state: RootState) => state.account)

		return {
			state,
		}
	}

export default useAccountRedux
