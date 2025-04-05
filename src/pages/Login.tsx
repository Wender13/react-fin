import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

export default function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser({ login, password });
      localStorage.setItem("token", response.token);
      alert("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Falha ao entrar. Verifique seu login e senha.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          SpringBank - Login
        </h2>

        <input
          type="text"
          placeholder="Usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400"
          required
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Entrar
        </button>

        <p className="text-sm text-center text-zinc-400">
          Ainda não tem conta?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Criar conta
          </a>
        </p>
      </form>
    </div>
  );
}
