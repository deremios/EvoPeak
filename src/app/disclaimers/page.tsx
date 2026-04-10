import { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { region } from "@/config";

export const metadata: Metadata = {
  title: `Disclaimers — ${region.brandName}`,
};

export default function DisclaimersPage() {
  return (
    <LegalPage title="Disclaimers" lastUpdated="April 2026">
      <h2>Research Use Only</h2>
      <p>
        <strong>
          All products sold by {region.brandName} are strictly for laboratory
          research purposes only.
        </strong>
      </p>
      <p>
        Products sold on this website are NOT intended for human consumption,
        injection, therapeutic use, veterinary use, or any form of
        self-administration. They are research chemicals sold exclusively for
        in-vitro research, educational purposes, and legitimate scientific
        investigation.
      </p>

      <h2>No Medical Claims</h2>
      <p>
        {region.brandName} makes no claims regarding the therapeutic,
        diagnostic, or preventative properties of any product. Nothing on this
        website should be interpreted as medical advice. Product descriptions,
        blog articles, and educational materials reference published scientific
        literature and are provided for informational purposes only.
      </p>

      <h2>Not Approved for Human Use</h2>
      <p>
        Products have NOT been evaluated or approved by the{" "}
        {region.legal.complianceBody} or any regulatory body for human use.
        They are not pharmaceutical-grade medications and should not be used as
        substitutes for prescribed therapies.
      </p>

      <h2>Buyer Responsibility</h2>
      <p>
        By purchasing from {region.brandName}, you confirm that:
      </p>
      <ul>
        <li>
          You are at least {region.legal.ageRequirement} years of age
        </li>
        <li>
          You will use products exclusively for legitimate research purposes
        </li>
        <li>
          You understand that products are not for human consumption
        </li>
        <li>
          You accept full responsibility for the handling, storage, and use of
          products
        </li>
        <li>
          You will comply with all local, state, and federal laws regarding
          research chemicals
        </li>
      </ul>

      <h2>Limitation of Liability</h2>
      <p>
        {region.brandName} assumes no liability for any adverse effects or
        consequences resulting from the use or misuse of any products purchased
        from this website. Use of products in any manner inconsistent with
        their intended research purpose is done entirely at the buyer&apos;s own
        risk.
      </p>

      <h2>Third-Party Testing</h2>
      <p>
        Certificates of Analysis (COAs) are provided by independent
        third-party laboratories. While we take every effort to ensure accuracy,
        {" "}{region.brandName} does not guarantee results will be identical under
        all research conditions. COAs represent batch-specific testing at the
        time of analysis.
      </p>
    </LegalPage>
  );
}
