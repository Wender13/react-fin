import Transacao from "../components/Transacao";

export default function Saque() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center p-8">
      <Transacao tipo="saque" />
    </div>
  );
}
