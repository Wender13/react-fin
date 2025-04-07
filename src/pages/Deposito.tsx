import Transacao from "../components/Transacao";

export default function Deposito() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-8">
      <Transacao tipo="deposito" />
    </div>
  );
}
