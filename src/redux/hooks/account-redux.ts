import { useSelector } from "react-redux"
import { AccountState } from "../account/types"
import { RootState } from "../store"

const useAccountRedux
	: () => {
		state: AccountState,
		walletAddress: string | null,
		jwtToken: string | null,
	}
	= () => {
		const state
			: AccountState
			= useSelector((state: RootState) => state.account)

		return {
			state,
			walletAddress: state?.walletAddress || null,
			jwtToken: state?.jwtToken || null,
		}
	}

export default useAccountRedux
