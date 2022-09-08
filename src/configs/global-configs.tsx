/* eslint-disable no-undef */
const CONFIG
	: any
	= {
		backendUrl: process.env.REACT_APP_BACKEND_URL || "",
		perpage: process.env.REACT_APP_DEFAULT_PERPAGE || 10,
		features: {
			landV2: process.env.REACT_APP_LAND_V2_ENABLE || false,
		},
	}

export default CONFIG
