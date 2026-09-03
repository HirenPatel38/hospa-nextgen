import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Search, ChevronRight, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { departments } from "@/data/departments";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.05, duration: 0.4 },
  }),
};

export default function Departments() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return departments;
    const q = query.toLowerCase();
    return departments.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Our Specialties
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Medical Departments
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg">
              Comprehensive care across {departments.length} specialized departments, each led by experienced, board-certified physicians.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-8 max-w-md"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search departments..."
                className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-slate-400"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No departments match your search.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((dept, i) => (
                <motion.div
                  key={dept.id}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    to={`/departments/${dept.slug}`}
                    className="group block bg-white rounded-2xl border border-slate-100 p-6 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50 transition-all"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 text-slate-500 group-hover:from-teal-50 group-hover:to-emerald-50 group-hover:text-teal-600 transition-all mb-4">
                      <dept.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">
                      {dept.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dept.conditions.slice(0, 3).map((c) => (
                        <span key={c} className="text-xs text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                          {c}
                        </span>
                      ))}
                      {dept.conditions.length > 3 && (
                        <span className="text-xs text-slate-400">+{dept.conditions.length - 3} more</span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-teal-600 group-hover:gap-2 transition-all">
                      View Department <ChevronRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
