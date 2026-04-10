import { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { region } from "@/config";

export const metadata: Metadata = {
  title: `Terms of Service — ${region.brandName}`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated="April 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using the {region.brandName} website and purchasing
        products, you agree to be bound by these Terms of Service. If you do not
        agree, do not use our site or purchase products.
      </p>

      <h2>2. Research Use Only</h2>
      <p>
        All products sold on this website are strictly for{" "}
        <strong>laboratory research purposes only</strong>. They are not
        intended for human consumption, injection, therapeutic use, or any form
        of self-administration. By purchasing, you confirm that you are
        acquiring products solely for legitimate research purposes.
      </p>

      <h2>3. Age Requirement</h2>
      <p>
        You must be at least {region.legal.ageRequirement} years of age to
        purchase from {region.brandName}. By using this site, you confirm you
        meet this requirement.
      </p>

      <h2>4. Product Descriptions & Accuracy</h2>
      <p>
        We strive to provide accurate product descriptions, images, and
        Certificates of Analysis (COAs). However, we do not warrant that
        descriptions are error-free. Products may vary slightly between batches
        while maintaining published purity specifications.
      </p>

      <h2>5. Pricing & Payment</h2>
      <p>
        All prices are listed in {region.currency.code}. Payment is accepted
        via {region.payment.methods.join(", ")}. Orders are not confirmed
        until payment has been verified by our team.
      </p>

      <h2>6. Shipping & Delivery</h2>
      <p>
        We ship via {region.shipping.carrier} with estimated delivery of{" "}
        {region.shipping.domesticEstimate} within {region.country}. Orders
        placed before {region.shipping.sameDayCutoff} on business days are
        dispatched the same day. We are not liable for delays caused by the
        carrier.
      </p>

      <h2>7. Returns & Refunds</h2>
      <p>
        Please refer to our{" "}
        <a href="/refund-policy">Refund Policy</a> for details. Opened or
        used vials cannot be returned due to quality control requirements.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        {region.brandName} shall not be liable for any damages arising from
        the misuse of products. All products are sold as-is for research
        purposes. We make no therapeutic claims and accept no liability for
        use outside of legitimate research.
      </p>

      <h2>9. Compliance</h2>
      <p>
        {region.brandName} operates in compliance with all applicable{" "}
        {region.country} laws and regulations, including{" "}
        {region.legal.complianceBody} guidelines. We reserve the right to
        refuse or cancel orders that we believe may not be for legitimate
        research purposes.
      </p>

      <h2>10. Contact</h2>
      <p>
        For questions regarding these terms, contact us at{" "}
        <a href={`mailto:${region.support.email}`}>{region.support.email}</a>.
      </p>
    </LegalPage>
  );
}
