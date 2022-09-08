import { AccountState } from "./types"

export const initialAccount
	: AccountState = {
		walletAddress: "",
		jwtToken: "",
		loading: false,
	}
