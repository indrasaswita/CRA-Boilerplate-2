import React, { useRef, useState } from "react"
import { connect } from "react-redux"
import { DashboardAlbumState } from "../../redux/dashboard/types"
import useDashboardRedux from "../../redux/hooks/account-redux"
import Wrapper, { AlbumCarouselItem } from "./AlbumCarousel.style"
import Slider from "react-slick"
import { updateDashboard } from "../../redux/dashboard/action"

interface AlbumCarouselProps {

}

interface DispatchProps {
	updateDashboard: typeof updateDashboard,
}

export type Props = AlbumCarouselProps & DispatchProps
export const AlbumCarousel
	: React.FunctionComponent<Props>
	= (props: Props) => {

		const [curr, setCurr] = useState<number>(0)
		const sliderRef: React.MutableRefObject<any> = useRef<any>()

		const {
			state: dashboardState,
			albums,
		} = useDashboardRedux()
		if(!albums)
			return <></>

		return (
			<Wrapper>
				<Slider
					ref={sliderRef}
					{...{
						arrows: false,
						centerMode: true,
						centerPadding: "180px",
						slidesToShow: 1,
						responsive: [
							{
								breakpoint: 768,
								settings: {
									arrows: false,
									centerMode: true,
									centerPadding: "100px",
									slidesToShow: 1,
								},
							},
							{
								breakpoint: 480,
								settings: {
									arrows: false,
									centerMode: true,
									centerPadding: "40px",
									slidesToShow: 1,
								},
							},
						],
					}}
					afterChange={(currentSlide: number) => {
						if(albums) {
							props.updateDashboard({
								...dashboardState,
								photos: albums[currentSlide].photos,
							})
						}
					}}
					beforeChange={(curr: number, next: number) => {
						setCurr(next)
					}}
				>
					{albums
						?.map((
							album: DashboardAlbumState,
							index: number,
						) => {
							return (
								<AlbumCarouselItem
									key={index}
									className="album-inner"
									backgroundImage={album.url}
									onClick={() => {
										props.updateDashboard({
											...dashboardState,
											photos: albums[index].photos,
										})

										sliderRef.current?.slickGoTo(index)
										setCurr(index)
									}}
								>
									<div className="card">
										<div className="card-inner">
											<div className="title">
												{album.title}
											</div>
										</div>
									</div>
								</AlbumCarouselItem>
							)
						})}
				</Slider>
				<div className="slick-legend">
					{(curr + 1).toLocaleString("en-US")} of {albums.length.toLocaleString("en-US")}
				</div>
			</Wrapper>
		)
	}

export default connect(null, {
	updateDashboard,
})(AlbumCarousel)