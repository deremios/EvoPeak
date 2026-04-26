import { Metadata } from "next";
import { LegalPage } from "@/components/shared/legal-page";
import { region } from "@/config";
import { createSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = createSeoMetadata({
  title: `Privacy Policy — ${region.brandName}`,
  description: `How ${region.brandName} collects, uses, secures, and manages customer information for accounts, orders, support, and compliance.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="April 2026">
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly:</p>
      <ul>
        <li>
          <strong>Account information:</strong> Email address and age
          confirmation when you create an account.
        </li>
        <li>
          <strong>Order information:</strong> Shipping address, order history,
          and payment reference numbers.
        </li>
        <li>
          <strong>Communications:</strong> Messages sent via live chat or email.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To process and fulfil your orders</li>
        <li>To send order status updates and shipping notifications</li>
        <li>To provide customer support</li>
        <li>To send research insights and product updates (with your consent)</li>
        <li>To comply with legal obligations</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell, rent, or share your personal information with third
        parties for marketing purposes. We may share information with:
      </p>
      <ul>
        <li>
          <strong>Shipping carriers:</strong> {region.shipping.carrier} for
          order fulfilment
        </li>
        <li>
          <strong>Email providers:</strong> For transactional emails only
        </li>
        <li>
          <strong>Legal authorities:</strong> When required by law
        </li>
      </ul>

      <h2>4. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data,
        including encrypted connections (HTTPS), secure authentication, and
        restricted access to personal information.
      </p>

      <h2>5. Your Rights</h2>
      <p>Under the Australian Privacy Act 1988, you have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your account and data</li>
        <li>Opt out of marketing communications</li>
      </ul>

      <h2>6. Cookies</h2>
      <p>
        We use essential cookies for site functionality (authentication, cart
        state, age verification). We use analytics cookies (Google Analytics)
        to understand site usage. You can disable non-essential cookies in
        your browser settings.
      </p>

      <h2>7. Contact</h2>
      <p>
        For privacy enquiries, contact{" "}
        <a href={`mailto:${region.support.email}`}>{region.support.email}</a>.
      </p>
    </LegalPage>
  );
}
