import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";

export default function Register() {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cpf, setCpf] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      alert("Os e-mails não coincidem.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      await registerUser({ login, password, name, email, cpf });
      alert("Registro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro no registro:", error);
      alert("Erro ao registrar. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-white text-center">
          Criar Conta
        </h2>

        <input
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400"
          required
        />
        <input
          type="text"
          placeholder="Usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400"
          required
        />
        <input
          type="email"
          placeholder="Confirmar Email"
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
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
        <input
          type="password"
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400"
          required
        />
        <input
          type="text"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          className="w-full p-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
        >
          Registrar
        </button>

        <p className="text-sm text-center text-zinc-400">
          Já tem conta?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Fazer login
          </a>
        </p>
      </form>
    </div>
  );
}
