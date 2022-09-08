import { EnumScreenName } from "../helpers/types/screen-name"

export const screenSize: {
	mobileP: number,
	mobileL: number,
	tabletP: number,
	tabletL: number,
	desktopS: number,
	desktopM: number,
	desktopL: number,
} = {
	mobileP: 375,
	mobileL: 450,
	tabletP: 767,
	tabletL: 991,
	desktopS: 1200,
	desktopM: 1600,
	desktopL: 2560,
}

export const getScreenNameBySize
// eslint-disable-next-line no-unused-vars
: (ssize: number) => EnumScreenName
= (ssize: number) => {
	if(ssize <= screenSize.mobileP) {
		return EnumScreenName.mobileP
	} else if(ssize > screenSize.mobileP && ssize <= screenSize.mobileL) {
		return EnumScreenName.mobileL
	} else if(ssize > screenSize.mobileL && ssize <= screenSize.tabletP) {
		return EnumScreenName.tabletP
	} else if(ssize > screenSize.tabletP && ssize <= screenSize.tabletL) {
		return EnumScreenName.tabletL
	} else if(ssize > screenSize.tabletL && ssize <= screenSize.desktopS) {
		return EnumScreenName.desktopS
	} else if(ssize > screenSize.desktopS && ssize <= screenSize.desktopM) {
		return EnumScreenName.desktopM
	} else if(ssize > screenSize.desktopM && ssize <= screenSize.desktopL) {
		return EnumScreenName.desktopL
	} else {
		return EnumScreenName.desktopXL
	}
}
