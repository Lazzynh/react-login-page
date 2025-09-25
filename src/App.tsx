import React from "react"
import Routes from "./routes"
import { BrowserRouter } from "react-router-dom"

function App() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</React.StrictMode>
	)
}

export default App