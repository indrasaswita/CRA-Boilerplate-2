import {
	faChevronLeft as fasChevronLeft,
	faChevronRight as fasChevronRight,
} from "@fortawesome/pro-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { ForwardedRef, forwardRef, ReactNode, useEffect, useImperativeHandle, useState } from "react"
import useWindowSize, { WindowSize } from "../../helpers/hooks/window-size"
import Wrapper from "./Carousel.style"

/* eslint-disable no-unused-vars */
enum TransitionType {
	None,
	Next,
	Prev,
}

/* eslint-enable no-unused-vars */
export interface CarouselProps {
	children: ReactNode[] | ReactNode,
	ref?: ReactNode,
	boxShadow?: string,
	border?: string,
	borderRadius?: string,
	autoplay?: boolean,
	showSideNav?: boolean,
	showBottomNav?: boolean,
	showIndicators?: boolean,
	isLightIndicators?: boolean,
}

export interface CarouselHandler {
	// eslint-disable-next-line no-unused-vars
	goTo: (index: number) => void
}

export const Carousel
	: React.ForwardRefExoticComponent<any>
	= forwardRef((props: CarouselProps, ref: ForwardedRef<any>) => {
		const [activeIndex, setActiveIndex] = useState(0)
		const [transitionType, setTransitionType] = useState(TransitionType.None)
		const [animateFlag, setAnimateFlag] = useState(false)
		const [coordStart, setCoordStart] = useState<number[]>([])
		const [touchStart, setTouchStart] = useState<number>(0)
		const [coordEnd, setCoordEnd] = useState<number[]>([])
		const [childrenLength, setChildrenLength] = useState(0)
		let windowSize: WindowSize = useWindowSize()

		const handler: CarouselHandler = {
			goTo: (index: number) => {
				setTransitionType(TransitionType.Next)
				setNewIndex(index)
			},
		}

		useImperativeHandle(ref, () => handler)

		useEffect(() => {
			setChildrenLength(
				Array.isArray(props.children)
					? props.children.length
					: 1,
			)

			if (activeIndex > 0
				&& activeIndex >= childrenLength) {
				setActiveIndex(childrenLength - 1)
			}
		}, [windowSize, props.children])

		const setNewIndex
			// eslint-disable-next-line no-unused-vars
			: (newIndex: number) => void
			= (newIndex: number) => {
				if (!animateFlag) {
					setTimeout(() => {
						setActiveIndex(newIndex)

						setTransitionType(TransitionType.None)
						setAnimateFlag(false)
					}, 300)
				}
			}

		const getPrevIndex
			: () => number
			= () => {
				return activeIndex === 0 ? childrenLength - 1 : activeIndex - 1
			}

		const getNextIndex
			: () => number
			= () => {
				return activeIndex === childrenLength - 1 ? 0 : activeIndex + 1
			}

		const goToNext
			: () => void
			= () => {
				const newIndex: number = getNextIndex()
				setTransitionType(TransitionType.Next)
				setNewIndex(newIndex)
			}

		const goToPrev
			: () => void
			= () => {
				const newIndex: number = getPrevIndex()
				setTransitionType(TransitionType.Prev)
				setNewIndex(newIndex)
			}

		const calculateSwipe
			: () => void
			= () => {
				const selisihX: number = coordEnd[1] - coordStart[1]
				const selisihY: number = coordEnd[0] - coordStart[0]

				if (Math.abs(selisihX) - Math.abs(selisihY) > 0) {
					// swipe

					const selisihWaktu: number = Math.round((Date.now() - touchStart) / 1000)

					if (selisihWaktu < 2) {
						// kalo kurang dari 2 second
						if (selisihX < -50) { // lewat 50 pixel
							// prev
							goToNext()
						} else if (selisihX > 50) {  // lewat 50 pixel
							// next
							goToPrev()
						}
					}
				}
			}

		return (
			<Wrapper
				border={props.border}
				boxShadow={props.boxShadow}
				borderRadius={props.borderRadius}
				onTouchStart={(touchStartEvent: any) => {
					const touchData: Touch = touchStartEvent.touches[0]
					setCoordStart([touchData.screenY, touchData.screenX])
					setCoordEnd([touchData.screenY, touchData.screenX])

					setTouchStart(Date.now())
				}}
				onTouchMove={(touchMoveEvent: any) => {
					const touchData: Touch = touchMoveEvent.touches[0]
					setCoordEnd([touchData.screenY, touchData.screenX])
				}}
				onTouchEnd={() => {
					calculateSwipe()
				}}
			>
				{props.showSideNav
					&& childrenLength > 1
					&& (
						<button
							type="button"
							className='btn-nav prev'
							onClick={goToPrev}
						>
							<FontAwesomeIcon
								icon={fasChevronLeft}
							/>
						</button>
					)}

				<div className="carousel">
					<div className="carousel-inner-wrapper">
						{(
							Array.isArray(props.children)
								? props.children
								: [props.children]
						).map((child: ReactNode, i: number) => {
							return (
								<div

									key={i}
									className={
										"carousel-item "
										// + (transitionTimeout != null ? 'animate ' : '')
										+ (i === activeIndex ? "active " : "")
										+ (
											i === activeIndex
												&& transitionType !== TransitionType.None
												? (
													transitionType === TransitionType.Next
														? "item-end-next "
														: "item-end-prev"
												) : ""
										)
										+ (
											i === getNextIndex()
												&& transitionType === TransitionType.Next
												? "item-next "
												: ""
										)
										+ (
											i === getPrevIndex()
												&& transitionType === TransitionType.Prev
												? "item-prev "
												: ""
										)
									}
								>
									{child}
								</div>
							)
						})}
					</div>

					{props.showIndicators
						&& childrenLength > 1
						&& (
							<div className={
								"bottom-indicators "
								+ (props.isLightIndicators ? "light " : "")
							}>

								{props.showBottomNav && (
									<button
										type="button"
										className="btn btn-nav next"
										onClick={goToPrev}
									>
										<FontAwesomeIcon
											icon={fasChevronLeft}
										/>
									</button>
								)}

								{(
									Array.isArray(props.children)
										? props.children
										: [props.children]
								).map((_: ReactNode, i: number) => {
									return (
										<div
											key={i}
											className={
												"btn "
												+ (i === activeIndex ? "active " : "")
												+ (Math.abs(i - activeIndex) < 3 ? "b " : "")
												+ (Math.abs(i - activeIndex) > 7 ? "hidden " : "")
											}
											onClick={() => {
												setTransitionType(i < activeIndex
													? TransitionType.Prev
													: TransitionType.Next)
												setNewIndex(i)
											}}
										>
											{i}
										</div>
									)
								})}

								{props.showBottomNav && (
									<button
										type="button"
										className="btn btn-nav prev"
										onClick={goToNext}
									>
										<FontAwesomeIcon
											icon={fasChevronRight}
										/>
									</button>
								)}
							</div>
						)}
				</div>

				{props.showSideNav
					&& childrenLength > 1
					&& (
						<button
							type="button"
							className='btn-nav next'
							onClick={goToNext}
						>
							<FontAwesomeIcon
								icon={fasChevronRight}
							/>
						</button>
					)}
			</Wrapper>
		)
	})

Carousel.displayName = "Carousel"

export default Carousel
