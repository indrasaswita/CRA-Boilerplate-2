import {
	screenSize as ssize,
} from "../../configs/screen-breakpoint"

export const device: {
	mobileP: string,
	mobileL: string,
	mobile: string,
	tabletP: string,
	tabletL: string,
	tablet: string,
	desktopS: string,
	desktopM: string,
	desktopL: string,
	desktopXL: string,
	mobileDown: string,
	tabletPDown: string,
	tabletDown: string,
	desktopSDown: string,
	tabletUp: string,
	tabletLUp: string,
	desktopUp: string,
	desktopMUp: string,
	desktopLUp: string,

	widthMobileP: string,
	widthMobileL: string,
	widthTabletP: string,
	widthTabletL: string,
	widthDesktopS: string,
	widthDesktopM: string,
	widthDesktopL: string,
	widthDesktopXL: string,
} = {
	// satuan
	// P for portait, L for landscape
	mobileP: ` screen and (max-width: ${ssize.mobileP}px) `,
	mobileL: ` screen and (min-width: ${ssize.mobileP + 1}px) and (max-width: ${ssize.mobileL}px) `,
	mobile: ` screen and (max-width: ${ssize.mobileL}px) `,
	tabletP: ` screen and (min-width: ${ssize.mobileL + 1}px) and (max-width: ${ssize.tabletP}px) `,
	tabletL: ` screen and (min-width: ${ssize.tabletP + 1}px) and (max-width: ${ssize.tabletL}px) `,
	tablet: ` screen and (min-width: ${ssize.mobileL + 1}px) and (max-width: ${ssize.tabletL}px) `,
	desktopS: ` screen and (min-width: ${ssize.tabletL + 1}px) and (max-width: ${ssize.desktopS}px) `,
	desktopM: ` screen and (min-width: ${ssize.desktopS + 1}px) and (max-width: ${ssize.desktopM}px) `,
	desktopL: ` screen and (min-width: ${ssize.desktopM + 1}px) and (max-width: ${ssize.desktopL}px) `,
	desktopXL: ` screen and (min-width: ${ssize.desktopL + 1}px) `,

	// untuk screen tsb dan lebih kecil
	mobileDown: ` screen and (max-width: ${ssize.mobileL}px) `,
	tabletPDown: ` screen and (max-width: ${ssize.tabletP}px) `,
	tabletDown: ` screen and (max-width: ${ssize.tabletL}px) `,
	desktopSDown: ` screen and (max-width: ${ssize.desktopS}px) `,

	// untuk screen tsb dan lebih besar
	tabletUp: ` screen and (min-width: ${ssize.mobileL + 1}px) `,
	tabletLUp: ` screen and (min-width: ${ssize.tabletP + 1}px) `,
	desktopUp: ` screen and (min-width: ${ssize.tabletL + 1}px) `,
	desktopMUp: ` screen and (min-width: ${ssize.desktopS + 1}px) `,
	desktopLUp: ` screen and (min-width: ${ssize.desktopM + 1}px) `,

	widthMobileP: "100% - 20px - 2vw",
	widthMobileL: "100% - 20px - 2vw",
	widthTabletP: "100% - 30px - 4vw",
	widthTabletL: "700px",
	widthDesktopS: "880px",
	widthDesktopM: "1100px",
	widthDesktopL: "1450px",
	widthDesktopXL: "1450px",
}
