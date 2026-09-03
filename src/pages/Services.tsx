import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.4 },
  }),
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-3">What We Offer</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg">
              A complete range of medical services delivered with precision, compassion, and the latest technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-50/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/20 shrink-0">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h2>
                    <p className="text-slate-500 leading-relaxed mb-4">{service.longDescription}</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-500 mb-6">
            Book an appointment to learn more about any of our services.
          </p>
          <Button asChild className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-0 cursor-pointer">
            <Link to="/appointments">
              <Calendar className="mr-2 h-4 w-4" />
              Book an Appointment
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
