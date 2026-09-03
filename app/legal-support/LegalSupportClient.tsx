'use client';
import { H1, H2, H3, Body, Lead } from "@/src/components/Typography";
import { useState } from "react";
import { Section } from "@/src/components/Section";
import { ButtonLink } from "@/src/components/ButtonLink";
import { FileText, Shield, HelpCircle, Mail } from "lucide-react";
import Image from 'next/image';
import { pickUnifiPlaceholder } from '@/src/content/unifiAssets';

const legalSections = [
  {
    id: "privacy",
    title: "Privacy Policy (GDPR-Compliant)",
    icon: Shield,
    content: `Unifi.id is committed to protecting your privacy and handling your data with transparency and care.

**Data Collection:**
We collect name, job title, company, email, phone, usage data, form submissions, technical data via cookies, and for clients: RFID tag data and occupancy system metadata.

**How We Use Your Data:**
To respond to enquiries, provide services, personalise content, deliver platform insights, and for legal and compliance purposes. We never sell your data to third parties.

**Your Rights:**
Under GDPR you have the right to access, correct, delete, restrict processing, object, and lodge a complaint with the ICO. Contact privacy@unifi.id.`,
    href: "/privacy",
  },
  {
    id: "modern-slavery",
    title: "Modern Slavery Statement",
    icon: FileText,
    content: `Unifi.id has a zero-tolerance approach to modern slavery and human trafficking. We limit our geographical scope, maintain long-standing partner relationships, and have whistle-blower protection systems. Our effectiveness is measured through supplier assessments, labour monitoring, and ongoing supplier dialogue.`,
    href: "/modern-slavery",
  },
  {
    id: "terms",
    title: "Terms of Use",
    icon: FileText,
    content: `These Terms of Service govern your use of the Cortex™ platform and related services provided by Unifi.id.

**Service Agreement:**
By using our platform, you agree to use it in compliance with all applicable laws and regulations.

**User Responsibilities:**
You are responsible for maintaining the security of your account credentials and for all activities under your account.

**Service Availability:**
We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service due to maintenance or unforeseen circumstances.

**Intellectual Property:**
All platform content, features, and functionality are owned by Unifi.id and protected by copyright and trademark laws.

**Limitation of Liability:**
Unifi.id shall not be liable for indirect, incidental, or consequential damages arising from platform use.

**Termination:**
We reserve the right to suspend or terminate accounts that violate these terms.`,
  },
  {
    id: "cookies",
    title: "Cookie Policy",
    icon: HelpCircle,
    content: `Unifi.id uses cookies to enhance your experience and improve our services.

**What Are Cookies:**
Cookies are small text files stored on your device that help us remember your preferences and analyze site usage.

**Types of Cookies We Use:**
- Essential cookies: Required for platform functionality
- Analytics cookies: Help us understand how you use our platform
- Preference cookies: Remember your settings and preferences

**Managing Cookies:**
You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect platform functionality.

**Third-Party Cookies:**
We may use third-party analytics services that set their own cookies. Please review their privacy policies for more information.`,
  },
  {
    id: "support",
    title: "Support & Help Center",
    icon: Mail,
    content: `Need assistance? Our support team is here to help you get the most out of Cortex™.

**Support Channels:**
- Email: support@unifi.id
- Phone: Available during business hours
- Live Chat: Available within the platform
- Knowledge Base: Comprehensive guides and documentation

**Response Times:**
- Critical issues: Within 2 hours
- Standard inquiries: Within 24 hours
- General questions: Within 48 hours

**Support Hours:**
Monday - Friday: 9:00 AM - 6:00 PM GMT
Emergency support available 24/7 for critical system issues

**Resources:**
- Platform documentation
- Video tutorials
- Integration guides
- Best practices library`,
  },
];

export default function LegalSupportClient() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  return (
    <>
{/* Hero Section */}
      <Section className="relative overflow-hidden min-h-[55vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={pickUnifiPlaceholder('hero', 'legal-support-hero')}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-green/10 via-transparent to-unifi-blue/15" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-left w-full pt-24">
          <H1 className="text-4xl md:text-5xl font-bold text-white mb-6">Legal & Support</H1>
          <p className="text-lg md:text-xl text-white/85">
            Transparency, compliance, and support you can rely on.
          </p>
        </div>
      </Section>

      {/* Main Content */}
      <Section>
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {legalSections.map((section) => {
              const Icon = section.icon;
              const isExpanded = activeSection === section.id;

              return (
                <div key={section.id} className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                  <button
                    onClick={() => setActiveSection(isExpanded ? null : section.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center gap-4"
                  >
                    <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <H2 className="text-xl font-bold text-gray-900 flex-1">{section.title}</H2>
                    <div className="text-gray-400 text-2xl">
                      {isExpanded ? "−" : "+"}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                      <div className="prose prose-gray max-w-none">
                        {section.content.split('\n\n').map((paragraph, index) => {
                          if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                            return (
                              <H3 key={index} className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                                {paragraph.replace(/\*\*/g, '')}
                              </H3>
                            );
                          }
                          return (
                            <p key={index} className="text-gray-700 mb-4">
                              {paragraph}
                            </p>
                          );
                        })}
                        {'href' in section && section.href && (
                          <div className="mt-6">
                            <ButtonLink href={section.href} variant="secondary">
                              Read full {section.title} →
                            </ButtonLink>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <H2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</H2>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Get in touch for any legal, privacy, or support inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/contact" variant="primary">
              Contact Support
            </ButtonLink>
            <ButtonLink href="mailto:legal@unifi.id" variant="outline">
              Legal Inquiries
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
