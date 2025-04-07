// src/components/Transacao.tsx
import { useState } from "react";

interface TransacaoProps {
  tipo: "deposito" | "saque";
}

export default function Transacao({ tipo }: TransacaoProps) {
  const [valor, setValor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valor) return;

    alert(`Você fez um ${tipo} de R$ ${valor}`);
    setValor("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 rounded-2xl p-6 shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-semibold mb-4 capitalize">
        {tipo === "deposito" ? "Depositar Dinheiro" : "Sacar Dinheiro"}
      </h2>

      <input
        type="number"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        className="w-full p-2 rounded bg-zinc-700 text-white mb-4"
        placeholder="Valor"
      />

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded font-semibold transition"
      >
        Confirmar {tipo}
      </button>
    </form>
  );
}
