import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { siteConfig } from "../lib/config";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.afh.name} collects, uses, and protects the information you share through our website contact form.`,
  path: "/privacy",
});

const LAST_UPDATED = "September 28, 2026";

function Section({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold text-[#252525]">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-gray-600">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  const { afh, provider } = siteConfig;

  return (
    <>
      <Navbar />

      <main className="bg-[#FFFBF5] px-6 pt-32 pb-20">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 font-medium text-[#4F6F52] transition hover:text-[#3D5B43]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to Home
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#4F6F52]">Legal</p>
          <h1 className="mt-4 text-4xl font-bold text-[#252525] md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-gray-500">Last updated: {LAST_UPDATED}</p>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            {afh.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates adult family homes in
            Federal Way, Washington. This policy explains what information we collect when you use the contact form on
            this website, how we use it, and the choices you have.
          </p>

          <Section title="Information we collect">
            <p>When you submit our contact form, we collect the information you choose to provide:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>First and last name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Your message</li>
            </ul>
            <p>
              Please do not include detailed medical information, diagnoses, or insurance numbers in the form. If you
              need to share health information about yourself or a loved one, we are happy to discuss it by phone or in
              person.
            </p>
            <p>
              This website does not use cookies, analytics, or advertising trackers. Like most websites, our hosting
              provider may automatically record basic technical data (such as IP address, browser type, and pages
              visited) in server logs for security and reliability.
            </p>
          </Section>

          <Section title="How we use your information">
            <p>We use the information you send us only to:</p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Respond to your questions</li>
              <li>Schedule tours and follow up about care at our homes</li>
              <li>Keep a record of our communication with you</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information, and we do not add you to marketing lists
              without your permission.
            </p>
          </Section>

          <Section title="How your information is shared">
            <p>
              Contact form submissions are delivered to our email through a messaging service operated by our website
              provider, CareDaraja. They process your submission only to deliver it to us.
            </p>
            <p>
              We may also disclose information if required by law, or to protect the safety of our residents, staff,
              or others.
            </p>
          </Section>

          <Section title="How long we keep it">
            <p>
              We keep your information for as long as needed to respond to you and for our normal business records.
              You can ask us to delete it at any time.
            </p>
          </Section>

          <Section title="Your choices and rights">
            <p>
              You may ask us to access, correct, or delete the personal information you have sent us, or to stop
              contacting you. To make a request, contact us using the details below. We will respond within a
              reasonable time and may need to confirm your identity first.
            </p>
            <p>
              If you share information about your own or a family member&rsquo;s health, Washington&rsquo;s My Health
              My Data Act may give you additional rights over that information, including the right to know what we
              have collected, to withdraw consent, and to have it deleted. We collect such information only to respond
              to your enquiry and never sell it.
            </p>
          </Section>

          <Section title="Security">
            <p>
              Our website uses encrypted connections (HTTPS), and we limit access to your information to the people who
              need it to respond to you. No method of transmission or storage is completely secure, so we cannot
              guarantee absolute security.
            </p>
          </Section>

          <Section title="Children">
            <p>
              This website is intended for adults. We do not knowingly collect information from children under 13.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date at the top shows when it
              was last changed.
            </p>
          </Section>

          <Section title="Contact us">
            <p>Questions or requests about your privacy can be sent to:</p>
            <p className="rounded-2xl bg-white p-6 shadow-sm">
              <span className="block font-semibold text-[#252525]">{afh.name}</span>
              <span className="block">{provider.owner}, {provider.role}</span>
              <a href={`mailto:${provider.email}`} className="block text-[#4F6F52] hover:underline">
                {provider.email}
              </a>
              <a href={`tel:${provider.phone.replace(/[^0-9+]/g, "")}`} className="block text-[#4F6F52] hover:underline">
                {provider.phone}
              </a>
            </p>
          </Section>

          <p className="mt-12">
            <Link href="/#contact" className="font-semibold text-[#4F6F52] hover:underline">
              &larr; Back to the contact form
            </Link>
          </p>
        </article>
      </main>

      <Footer />
    </>
  );
}
