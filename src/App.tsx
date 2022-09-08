import React from "react"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Wrapper from "./App.style"
import Dashboard from "./pages/Dashboard"

const App
	: React.FunctionComponent
	= () => {
		return (
			<Wrapper>
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
				<ToastContainer autoClose={5000} />
			</Wrapper>
		)
	}

export default App
