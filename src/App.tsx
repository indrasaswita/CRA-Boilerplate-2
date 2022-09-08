import React from "react"
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "./App.css"
import Dashboard from "./pages/Dashboard"

const App
	: React.FunctionComponent
	= () => {
		return (
			<>
				<Routes>
					<Route path="/" element={<Dashboard />} />
				</Routes>
				<ToastContainer autoClose={5000} />
			</>
		)
	}

export default App
