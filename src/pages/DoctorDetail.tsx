import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Calendar,
  Star,
  Clock,
  Globe,
  Award,
  CheckCircle2,
  MessageSquare,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDoctorBySlug } from "@/data/doctors";
import { getDepartmentById } from "@/data/departments";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DoctorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const doctor = slug ? getDoctorBySlug(slug) : undefined;
  const department = doctor ? getDepartmentById(doctor.departmentId) : undefined;

  if (!doctor) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Doctor Not Found</h1>
          <p className="text-slate-500 mb-6">The doctor you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/doctors">Browse Doctors</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/doctors" className="hover:text-white transition-colors">Doctors</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-teal-400">{doctor.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-start gap-6"
          >
            <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-xl shrink-0">
              {doctor.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{doctor.name}</h1>
              <p className="text-teal-400 font-semibold text-lg mb-1">{doctor.specialty}</p>
              {department && (
                <Link to={`/departments/${department.slug}`} className="text-slate-400 text-sm hover:text-teal-300 transition-colors">
                  {department.name} Department
                </Link>
              )}

              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-1.5 text-sm text-slate-300">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  {doctor.rating} ({doctor.reviews} reviews)
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-300">
                  <Clock className="h-4 w-4 text-teal-400" />
                  {doctor.experience} years experience
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-300">
                  <Globe className="h-4 w-4 text-teal-400" />
                  {doctor.languages.join(", ")}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {doctor.consultations.map((type) => (
                  <span key={type} className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
                    {type === "Video Consultation" ? <Video className="h-3 w-3" /> : <MessageSquare className="h-3 w-3" />}
                    {type}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <Button asChild className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25 cursor-pointer">
                  <Link to="/appointments">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              {/* Bio */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">About</h2>
                <p className="text-slate-600 leading-relaxed">{doctor.bio}</p>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Qualifications</h2>
                <div className="space-y-2">
                  {doctor.qualifications.map((q) => (
                    <div key={q} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Award className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                      {q}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Specializations</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {doctor.specializations.map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                      <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatments */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Treatments Offered</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {doctor.treatments.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Availability</h3>
                <div className="space-y-2">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                    <div key={day} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{day}</span>
                      {doctor.availability.includes(day) ? (
                        <span className="text-teal-600 font-medium">Available</span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Education</h3>
                <p className="text-sm text-slate-600">{doctor.education}</p>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Schedule a Visit</h3>
                <p className="text-teal-100 text-sm mb-4">
                  See {doctor.name.split(" ")[1]} for a consultation.
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
