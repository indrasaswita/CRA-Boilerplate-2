import { useEffect, useState } from "react"

export type WindowSize = {
	width: number,
	height: number,
}

const useWindowSize
	: () => WindowSize
	= () => {
		// Initialize state with undefined width/height so server and client renders match
		// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

		const [windowSize, setWindowSize] = useState<WindowSize>({
			width: 0,
			height: 0,
		})

		const handleResize
		: () => void
		= () => {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			})
		}

		useEffect(() => {
			// Handler to call on window resize
			// Add event listener
			window.addEventListener("resize", handleResize)
			// Call handler right away so state gets updated with initial window size
			handleResize()
			// Remove event listener on cleanup
			return () => window.removeEventListener("resize", handleResize)
		}, [window.innerHeight, window.innerWidth])

		return windowSize
	}

export default useWindowSize
