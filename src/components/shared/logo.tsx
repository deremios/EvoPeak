import Link from "next/link";
import { region } from "@/config";

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
  const firstSpaceIndex = region.brandName.indexOf(" ");
  const [primary, secondary] =
    region.brandName === "EvoPeak"
      ? ["Evo", "Peak"]
      : firstSpaceIndex === -1
        ? [region.brandName, ""]
        : [
            region.brandName.slice(0, firstSpaceIndex),
            region.brandName.slice(firstSpaceIndex + 1),
          ];

  return (
    <Link
      href="/"
      aria-label={`${region.brandName} home`}
      className={`inline-flex items-baseline ${sizes[size]} font-semibold tracking-tight`}
    >
      <span className={invert ? "text-white" : "text-brand-green"}>
        {primary}
      </span>
      {secondary && (
        <span className={invert ? "text-white" : "text-brand-orange"}>{secondary}</span>
      )}
    </Link>
  );
}
