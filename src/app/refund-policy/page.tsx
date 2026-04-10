import { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { region } from "@/config";

export const metadata: Metadata = {
  title: `Refund Policy — ${region.brandName}`,
};

export default function RefundPolicyPage() {
  return (
    <LegalPage title="Refund Policy" lastUpdated="April 2026">
      <h2>1. Eligibility</h2>
      <p>
        We want you to be fully satisfied with your purchase.
        Refunds are available under the following conditions:
      </p>
      <ul>
        <li>
          <strong>Damaged in transit:</strong> If your order arrives damaged,
          contact us within 48 hours with photos. We will replace or refund the
          affected items.
        </li>
        <li>
          <strong>Incorrect items:</strong> If you receive the wrong product, we
          will ship the correct item at no cost and arrange return of the
          incorrect item.
        </li>
        <li>
          <strong>Quality concerns:</strong> If testing reveals a product does
          not meet the stated purity on its COA, we will issue a full refund or
          replacement.
        </li>
      </ul>

      <h2>2. Non-Refundable Items</h2>
      <ul>
        <li>Opened or reconstituted vials (for quality control reasons)</li>
        <li>Orders where more than 14 days have passed since delivery</li>
        <li>Bacteriostatic water and syringes (hygiene products)</li>
      </ul>

      <h2>3. Refund Process</h2>
      <ol>
        <li>
          Contact us at{" "}
          <a href={`mailto:${region.support.email}`}>{region.support.email}</a>{" "}
          with your order reference number and reason for the refund request.
        </li>
        <li>
          We will respond within 1 business day with instructions.
        </li>
        <li>
          Approved refunds are processed within 3–5 business days via the
          original payment method ({region.payment.methods.join(", ")}).
        </li>
      </ol>

      <h2>4. Shipping Costs</h2>
      <p>
        If a refund is approved due to our error (damaged, incorrect, or
        substandard product), we will cover all return shipping costs. For
        change-of-mind requests on eligible items, the customer is responsible
        for return shipping.
      </p>

      <h2>5. Cancellations</h2>
      <p>
        Orders can be cancelled free of charge before dispatch. Once an order
        has been shipped, it cannot be cancelled and must follow the return
        process above.
      </p>
    </LegalPage>
  );
}
