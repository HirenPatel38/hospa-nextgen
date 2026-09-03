import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { Search, Star, Clock, ChevronRight, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";
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

export default function Doctors() {
  const [searchParams] = useSearchParams();
  const initialDept = searchParams.get("department") || "";
  const [query, setQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(initialDept);

  const filtered = useMemo(() => {
    return doctors.filter((doc) => {
      const matchesQuery =
        !query.trim() ||
        doc.name.toLowerCase().includes(query.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(query.toLowerCase());
      const matchesDept = !selectedDept || doc.departmentId === selectedDept;
      return matchesQuery && matchesDept;
    });
  }, [query, selectedDept]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-3">Our Team</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Find a Doctor
            </h1>
            <p className="text-slate-300 max-w-2xl text-lg">
              Browse our team of {doctors.length} board-certified specialists. Filter by department or search by name and specialty.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or specialty..."
                className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-slate-400"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="h-10 w-full sm:w-56 pl-10 pr-4 bg-white/10 border border-white/10 rounded-lg text-white text-sm appearance-none cursor-pointer"
              >
                <option value="" className="bg-slate-800">All Departments</option>
                {departments.map((d) => (
                  <option key={d.id} value={d.id} className="bg-slate-800">
                    {d.name}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">No doctors match your search criteria.</p>
              <Button
                variant="outline"
                className="mt-4 cursor-pointer"
                onClick={() => { setQuery(""); setSelectedDept(""); }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((doc, i) => (
                <motion.div key={doc.id} custom={i} variants={fadeUp} initial="hidden" animate="visible">
                  <Link
                    to={`/doctors/${doc.slug}`}
                    className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-teal-200 hover:shadow-xl hover:shadow-teal-50/50 transition-all"
                  >
                    <div className="aspect-[3/2] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:scale-105 transition-transform">
                        {doc.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold">
                        <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                        {doc.rating}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-sm text-teal-600 font-medium mt-0.5">{doc.specialty}</p>
                      <p className="text-xs text-slate-500 mt-1">{doc.education}</p>

                      <div className="flex items-center gap-3 mt-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {doc.experience} yrs
                        </span>
                        <span>·</span>
                        <span>{doc.reviews} reviews</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mt-3">
                        {doc.availability.slice(0, 4).map((day) => (
                          <span key={day} className="text-[10px] font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                            {day.slice(0, 3)}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1 mt-4 text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Profile <ChevronRight className="h-4 w-4" />
                      </div>
                    </div>
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
