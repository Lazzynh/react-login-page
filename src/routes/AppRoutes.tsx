import { Route, Routes } from "react-router-dom"
import Home from "@/app/page"
import Teste from "@/teste/teste"

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/teste" element={<Teste />} />
			<Route path="*" element={<Home />} />
		</Routes>
	)
}

export default AppRoutes