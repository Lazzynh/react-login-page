import { Link } from "react-router-dom";

export default function Teste2() {
    return (
        <div className="min-h-screen bg-red-500 flex flex-col items-center justify-center">
            <div className="text-white text-4xl font-bold mb-8">
                Página de Teste2
            </div>
            <div className="flex gap-4">
                <Link
                    to="/"
                    className="bg-white text-red-500 py-2 px-4 rounded hover:bg-gray-100"
                >
                    Voltar para Home
                </Link>
                <Link
                    to="/matheus"
                    className="bg-white text-red-500 py-2 px-4 rounded hover:bg-gray-100"
                >
                    Ir para Teste 1
                </Link>
            </div>
        </div>
    );
}
