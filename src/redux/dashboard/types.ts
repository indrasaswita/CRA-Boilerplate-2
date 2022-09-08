export type DashboardAlbumState = {
	id: number,
	title: string,
	url: string,
	thumbnailUrl: string,
	photos: DashboardPhotoState[],
}

export type DashboardPhotoState = {
	id: number,
	title: string,
	url: string,
	thumbnailUrl: string,
}

export type DashboardState = {
	albums: DashboardAlbumState[],
	photos: DashboardPhotoState[],
	loading: boolean,
}
