import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
}

const sizes = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

export function Logo({ size = "md", invert = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-baseline ${sizes[size]} font-extrabold tracking-tight`}>
      <span className={invert ? "text-white" : "text-brand-green"}>Evo</span>
      <span className="text-brand-orange">Peak</span>
    </Link>
  );
}
