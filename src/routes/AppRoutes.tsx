import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Teste from "../pages/Teste";
import Teste2 from "../pages/Teste2";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/matheus" element={<Teste />} />
            <Route path="/teste2" element={<Teste2 />} />
            <Route path="*" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;
