import { useState } from "react";

type Props = {
  value: string;
  onChange: (unformattedCpf: string) => void;
};

function formatCpf(value: string): string {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function validateCpf(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += Number(cpf.charAt(i)) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== Number(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += Number(cpf.charAt(i)) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  return resto === Number(cpf.charAt(10));
}

export default function CpfInput({ value, onChange }: Props) {
  const [touched, setTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    onChange(raw);
  };

  const formatted = formatCpf(value);
  const isValid = validateCpf(value);

  return (
    <div className="w-full">
      <input
        type="text"
        placeholder="CPF"
        value={formatted}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        maxLength={14}
        className={`w-full p-2 rounded bg-zinc-700 text-white placeholder:text-zinc-400 ${
          touched && !isValid ? "border border-red-500" : ""
        }`}
        required
      />
      {touched && !isValid && (
        <p className="text-red-500 text-sm mt-1">CPF inválido.</p>
      )}
    </div>
  );
}
