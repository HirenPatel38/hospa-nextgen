import { Link } from "react-router";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import {
  HOSPITAL_NAME,
  HOSPITAL_PHONE,
  HOSPITAL_EMAIL,
  HOSPITAL_ADDRESS,
  EMERGENCY_PHONE,
  SOCIAL_LINKS,
} from "@/utils/constants";

const footerLinks = {
  "Quick Links": [
    { label: "About Us", path: "/services" },
    { label: "Departments", path: "/departments" },
    { label: "Find a Doctor", path: "/doctors" },
    { label: "Book Appointment", path: "/appointments" },
    { label: "Contact Us", path: "/contact" },
  ],
  Services: [
    { label: "Emergency Care", path: "/services" },
    { label: "Diagnostics", path: "/services" },
    { label: "Advanced Imaging", path: "/services" },
    { label: "Telemedicine", path: "/services" },
    { label: "Health Checkups", path: "/services" },
  ],
  Resources: [
    { label: "Health Library", path: "/health-library" },
    { label: "Departments", path: "/departments" },
    { label: "Disease Guide", path: "/health-library" },
    { label: "Health Packages", path: "/services" },
    { label: "FAQs", path: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 animate-pulse">
              <Phone className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold">Medical Emergency? We're here 24/7.</span>
          </div>
          <a
            href={`tel:${EMERGENCY_PHONE}`}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white text-red-600 rounded-full text-sm font-bold hover:bg-red-50 transition-colors"
          >
            Call {EMERGENCY_PHONE}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500">
                <span className="text-white font-bold text-sm">H+</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {HOSPITAL_NAME}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm mb-6">
              A next-generation healthcare platform combining clinical expertise with intelligent technology to deliver exceptional patient experiences.
            </p>

            <div className="space-y-3 text-sm">
              <a href={`tel:${HOSPITAL_PHONE}`} className="flex items-center gap-2.5 hover:text-teal-400 transition-colors">
                <Phone className="h-4 w-4 text-teal-400 shrink-0" />
                {HOSPITAL_PHONE}
              </a>
              <a href={`mailto:${HOSPITAL_EMAIL}`} className="flex items-center gap-2.5 hover:text-teal-400 transition-colors">
                <Mail className="h-4 w-4 text-teal-400 shrink-0" />
                {HOSPITAL_EMAIL}
              </a>
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{HOSPITAL_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-teal-400 shrink-0" />
                <span>Mon–Fri 8am–6pm · Sat 9am–1pm · Emergency 24/7</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {HOSPITAL_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
              { Icon: Twitter, href: SOCIAL_LINKS.twitter, label: "Twitter" },
              { Icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
              { Icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
              { Icon: Youtube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-slate-400 hover:bg-teal-500/20 hover:text-teal-400 transition-colors"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
