import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDepartmentBySlug } from "@/data/departments";
import { getDoctorsByDepartment } from "@/data/doctors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DepartmentDetail() {
  const { slug } = useParams<{ slug: string }>();
  const department = slug ? getDepartmentBySlug(slug) : undefined;

  if (!department) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Department Not Found</h1>
          <p className="text-slate-500 mb-6">The department you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/departments">Browse Departments</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const departmentDoctors = getDoctorsByDepartment(department.id);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/departments" className="hover:text-white transition-colors">Departments</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-teal-400">{department.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-5"
          >
            <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-teal-400">
              <department.icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                {department.name}
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl">
                {department.longDescription}
              </p>
            </div>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 cursor-pointer">
              <Link to="/appointments">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 cursor-pointer">
              <Link to={`/doctors?department=${department.id}`}>
                Find a Specialist
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Conditions */}
              {department.conditions.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Conditions We Treat</h2>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {department.conditions.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Treatments */}
              {department.treatments.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Treatments & Procedures</h2>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {department.treatments.map((t) => (
                      <div key={t} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Diagnostics */}
              {department.diagnostics.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Diagnostics Available</h2>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {department.diagnostics.map((d) => (
                      <div key={d} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {department.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {department.faqs.map((faq) => (
                      <div key={faq.question} className="bg-slate-50 rounded-xl p-5">
                        <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Facilities */}
              {department.facilities.length > 0 && (
                <div className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">Facilities</h3>
                  <ul className="space-y-2">
                    {department.facilities.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Department Doctors */}
              {departmentDoctors.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-100 p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Specialists in {department.name}</h3>
                  <div className="space-y-3">
                    {departmentDoctors.map((doc) => (
                      <Link
                        key={doc.id}
                        to={`/doctors/${doc.slug}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                      >
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {doc.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 transition-colors truncate">
                            {doc.name}
                          </p>
                          <p className="text-xs text-slate-500">{doc.specialty}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Book CTA */}
              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Need to see a specialist?</h3>
                <p className="text-teal-100 text-sm mb-4">
                  Book an appointment with one of our {department.name} specialists today.
                </p>
                <Button asChild className="w-full bg-white text-teal-700 hover:bg-teal-50 border-0 cursor-pointer font-semibold">
                  <Link to="/appointments">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
