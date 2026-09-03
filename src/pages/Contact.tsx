import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HOSPITAL_PHONE,
  HOSPITAL_EMAIL,
  HOSPITAL_ADDRESS,
  EMERGENCY_PHONE,
} from "@/utils/constants";
import { faqs } from "@/data/faqs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: HOSPITAL_PHONE, href: `tel:${HOSPITAL_PHONE}` },
    { icon: Mail, label: "Email", value: HOSPITAL_EMAIL, href: `mailto:${HOSPITAL_EMAIL}` },
    { icon: MapPin, label: "Address", value: HOSPITAL_ADDRESS, href: null },
    { icon: Clock, label: "Hours", value: "Mon–Fri 8am–6pm · Sat 9am–1pm", href: null },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-3">Get in Touch</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-slate-300 max-w-2xl text-lg">
              Have questions? We're here to help. Reach out to us or visit our facility.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-teal-50 rounded-2xl p-8 text-center border border-teal-100">
                  <CheckCircle2 className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">First Name</label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 mb-1 block">Last Name</label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Email</label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Subject</label>
                    <Input placeholder="How can we help?" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-1 block">Message</label>
                    <textarea
                      className="w-full h-32 px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                      placeholder="Tell us more..."
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-0 cursor-pointer shadow-lg shadow-teal-500/25">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info + FAQs */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shrink-0">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-slate-500 hover:text-teal-600 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-500">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emergency */}
                <div className="mt-6 bg-red-50 border border-red-100 rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-sm font-bold text-red-700">Medical Emergency</p>
                      <a href={`tel:${EMERGENCY_PHONE}`} className="text-sm text-red-600 font-semibold hover:text-red-700">
                        Call {EMERGENCY_PHONE} — Available 24/7
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.slice(0, 8).map((faq) => (
                    <div key={faq.id} className="bg-slate-50 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <span className="text-sm font-semibold text-slate-900 pr-4">{faq.question}</span>
                        <span className={`text-slate-400 text-lg transition-transform ${openFaq === faq.id ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </button>
                      {openFaq === faq.id && (
                        <div className="px-4 pb-4">
                          <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
