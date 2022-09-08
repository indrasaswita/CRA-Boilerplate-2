import { DashboardAlbumState } from "../../../redux/dashboard/types"
import { sendApi } from "../axios"
import { mapFetchPhotos, Raw } from "./fetch-photos.map"

const fetchPhotosUtil
	: () => Promise<DashboardAlbumState[]>
	= () => new Promise((
		resolve: (value: DashboardAlbumState[]) => void,
		reject: (reason?: any) => void,
	) => {
		sendApi(
			"photos",
			{
				type: "GET",
			},
		)
			.then((value: Raw[]) => {
				resolve(mapFetchPhotos(value))
			})
			.catch((reason: any) => {
				reject(reason)
			})
	})

export default fetchPhotosUtil
