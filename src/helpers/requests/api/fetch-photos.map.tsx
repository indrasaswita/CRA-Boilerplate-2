import { DashboardAlbumState } from "../../../redux/dashboard/types"

export type Raw = {
	albumId: number,
	id: number,
	title: string,
	url: string,
	thumbnailUrl: string,
}

export const mapFetchPhotos
	: (raw: Raw[]) => DashboardAlbumState[]
	= (raw: Raw[]) => {
		const albums
			: {[key: number]: DashboardAlbumState}
			= {}

		raw
			.forEach((
				item: Raw,
			) => {
				if (!(item.albumId in albums)) {
					albums[item.albumId] = {
						id: item.albumId,
						title: item.title,
						url: item.url,
						thumbnailUrl: item.thumbnailUrl,
						photos: [
							{
								id: item.id,
								title: item.title,
								url: item.url,
								thumbnailUrl: item.thumbnailUrl,
							},
						],
					}
				} else {
					albums[item.albumId] = {
						...albums[item.albumId],
						photos: [
							...albums[item.albumId].photos,
							{
								id: item.id,
								title: item.title,
								url: item.url,
								thumbnailUrl: item.thumbnailUrl,
							},
						],
					}
				}
			})

		const albums2
			: DashboardAlbumState[]
			= []

		for (var key in albums) {
			albums2.push(albums[key])
		}

		return albums2
	}
