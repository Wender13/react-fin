// src/pages/Operacoes.tsx
import Transacao from "../components/Transacao";

export default function Operacoes() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8 flex flex-col items-center gap-8">
      <h1 className="text-3xl font-bold mb-4">Operações</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <Transacao tipo="deposito" />
        <Transacao tipo="saque" />
      </div>
    </div>
  );
}
