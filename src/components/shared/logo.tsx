import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  invert?: boolean;
}

const sizes = {
  sm: "text-2xl",
  md: "text-3xl",
  lg: "text-4xl",
};

export function Logo({ size = "md", invert = false }: LogoProps) {
  return (
    <Link href="/" className={`inline-flex items-baseline ${sizes[size]} font-semibold tracking-tight`}>
      <span className={invert ? "text-white" : "text-brand-green"}>Evo</span>
      <span className="text-brand-orange">Peak</span>
    </Link>
  );
}
