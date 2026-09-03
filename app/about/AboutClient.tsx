
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GraduationCap, Target, Shield, Zap, Building, Heart, CheckCircle, Users, ArrowRight, Globe, Award, Lightbulb } from 'lucide-react';
import { H1, H2, H3, Body, Lead } from '@/src/components/Typography';
import { Section } from '@/src/components/Section';
import { ButtonLink } from '@/src/components/ButtonLink';
import { fadeInUp, staggerContainer } from '@/src/components/motion';
import { pickUnifiPlaceholder, withBasePath } from '@/src/content/unifiAssets';

export default function AboutClient() {
  const heroImage = pickUnifiPlaceholder('hero', 'about');

  return (
    <main className="pt-0">
{/* Hero Section */}
      <Section 
        backgroundColor="blue"
        className="relative overflow-hidden min-h-[60vh] flex items-center"
      >
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="About Unifi.id hero image"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-br from-unifi-blue/35 via-transparent to-unifi-green/20" />
        </div>
        
        <div className="container relative z-10 px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp}>
              <H1 className="text-white mb-6">About Unifi.id</H1>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Lead className="text-white/90 mb-8 text-2xl leading-relaxed">
                Every building tells a story. How it's used. How it breathes. How it wastes or saves.
                At Unifi.id, we give buildings the ability to listen, learn, and act - turning static spaces into living, intelligent environments.
              </Lead>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 items-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center gap-3">
                <Globe className="w-5 h-5 text-unifi-green" />
                <span className="text-white font-medium">Based at Level39, Canary Wharf</span>
              </div>
              <div className="text-white/70 italic">
                The world-renowned hub for IoT innovation
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Subtext Section */}
      <Section backgroundColor="white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto text-left">
            <Body className="text-2xl text-unifi-gray-dark leading-relaxed">
              Unifi.id is a smart building intelligence company. We help organisations understand and optimise how people actually use their estates - delivering insights that cut costs, increase safety, strengthen compliance, and accelerate progress to net zero.
            </Body>
          </div>
        </div>
      </Section>

      {/* Mission, Approach, Commitment */}
      <Section backgroundColor="gray">
        <div className="container px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                icon: Target,
                content: "To revolutionise building management by putting people at the heart of intelligent systems, creating environments that enhance wellbeing, safety, and sustainability whilst delivering measurable business outcomes."
              },
              {
                title: "Our Approach",
                icon: Lightbulb,
                content: "We combine cutting-edge technology with deep understanding of human needs, ensuring our solutions enhance rather than complicate the building experience. Every feature is designed with your occupants in mind."
              },
              {
                title: "Our Commitment",
                icon: Award,
                content: "We're committed to delivering outcomes that matter: improved operational efficiency, enhanced safety, reduced environmental impact, and better experiences for everyone who uses your buildings."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border-t-4 border-unifi-blue h-full flex flex-col unifi-card-hover"
              >
                <div className="bg-unifi-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-unifi-blue" />
                </div>
                <H3 className="mb-4">{item.title}</H3>
                <Body className="text-unifi-gray-dark flex-grow">{item.content}</Body>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Who We Are */}
      <Section backgroundColor="white">
        <div className="container px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <H2 className="mb-6">Who We Are</H2>
              <Body className="text-lg mb-6">
                Unifi.id seamlessly identifies and tracks building occupants, zone by zone, using a range of detection solutions - from long-range RFID smart cards to facial recognition and device presence signals.
              </Body>
              <Body className="text-lg">
                Our primary technology, the proprietary Unifi.id RFID smart card, integrates with existing access systems while providing powerful real-time occupancy data.
              </Body>
            </div>
            <div className="rounded-3xl aspect-video relative overflow-hidden shadow-sm">
              <Image
                src={withBasePath('/unifi-assets/corporate/photo-1521737711867-e3b97375f902.webp')}
                alt="Unifi.id team collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
            </div>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section backgroundColor="gray">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <H2 className="mb-8 text-left">What We Do</H2>
            <Body className="text-xl mb-12 text-left">
              Unifi.id transforms buildings into intelligent, responsive environments. By turning fragmented occupancy signals into actionable insight, we enable estates to operate smarter, safer, and greener.
            </Body>
            
            <div className="space-y-6">
              {[
                {
                  title: "Occupancy & Safety Intelligence",
                  desc: "Real-time awareness of who is inside, enabling smarter fire safety, safeguarding, and compliance."
                },
                {
                  title: "Operational Optimisation",
                  desc: "Integration with lighting, HVAC, security, and BMS systems so they respond dynamically to how spaces are actually used."
                },
                {
                  title: "Hospitality & Experience",
                  desc: "Discreet VIP recognition, licence compliance, and high-touch service intelligence for premium venues."
                },
                {
                  title: "Decarbonisation & Energy Efficiency",
                  desc: "Cashflow-positive LED, heating, and controls upgrades that pay for themselves through savings."
                }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-xl shadow-sm">
                  <CheckCircle className="w-6 h-6 text-unifi-green flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-unifi-blue block mb-1">{item.title}</span>
                    <Body>{item.desc}</Body>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border-l-4 border-unifi-blue bg-unifi-blue/5 italic">
              <Body className="text-lg">
                At its core, Unifi.id doesn't replace existing systems - it makes them better, unlocking new value across energy, safety, compliance, and experience.
              </Body>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Unifi.id */}
      <Section backgroundColor="white">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <H2 className="mb-12 text-left">Why Unifi.id</H2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Rapid ROI on energy efficiency and net-zero initiatives",
                "Increased safety through real-time occupancy and fire intelligence",
                "Seamless integration with existing building systems",
                "A scalable roadmap to support both immediate savings and long-term transformation"
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-center bg-unifi-light p-6 rounded-xl border border-black/5">
                  <Zap className="w-6 h-6 text-unifi-blue" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Our Principle */}
      <Section backgroundColor="blue">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto text-left">
            <H2 className="text-white mb-8">Our Principle</H2>
            <Body className="text-white/90 text-xl mb-8 leading-relaxed">
              We've never believed the answer is "there's an app for everything." Not everyone can - or will - engage with apps. Instead, Unifi.id creates invisible intelligence: systems that work for everyone, in the background, automatically.
            </Body>
            <Body className="text-white/80 text-lg">
              With our technology and partners, we deliver the digital-first foundation for the smart buildings of tomorrow.
            </Body>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section backgroundColor="white">
        <div className="container px-6">
          <div className="bg-unifi-light rounded-3xl p-12 text-left max-w-4xl mx-auto">
            <H2 className="mb-6 text-black">Ready to discover how we can transform your building management?</H2>
            <ButtonLink 
              href="/contact" 
              variant="primary"
              className="inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </ButtonLink>
          </div>
        </div>
      </Section>
    </main>
  );
}
