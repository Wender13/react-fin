import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Banco Virtual</h1>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <button
          className="bg-blue-600 hover:bg-blue-700 rounded-2xl p-6 text-lg font-semibold shadow-lg transition"
          onClick={() => navigate("/extrato")}
        >
          Ver Extrato
        </button>

        <button
          className="bg-green-600 hover:bg-green-700 rounded-2xl p-6 text-lg font-semibold shadow-lg transition"
          onClick={() => navigate("/transferencia")}
        >
          Transferência
        </button>

        <button
          className="bg-yellow-600 hover:bg-yellow-700 rounded-2xl p-6 text-lg font-semibold shadow-lg transition"
          onClick={() => navigate("/operacoes")}
        >
          Adicionar / Remover
        </button>

        <button
          className="bg-purple-600 hover:bg-purple-700 rounded-2xl p-6 text-lg font-semibold shadow-lg transition"
          onClick={() => navigate("/perfil")}
        >
          Opções do Usuário
        </button>

        <button
          className="bg-red-600 hover:bg-red-700 rounded-2xl p-6 text-lg font-semibold shadow-lg transition"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}
