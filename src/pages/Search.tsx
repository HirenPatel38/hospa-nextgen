import { useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import { Search as SearchIcon, Users, Building2, Stethoscope, BookOpen, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { doctors } from "@/data/doctors";
import { departments } from "@/data/departments";
import { services } from "@/data/services";
import { articles } from "@/data/articles";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return { doctors: [], departments: [], services: [], articles: [] };

    const q = query.toLowerCase();

    return {
      doctors: doctors.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialty.toLowerCase().includes(q) ||
          d.bio.toLowerCase().includes(q)
      ),
      departments: departments.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.conditions.some((c) => c.toLowerCase().includes(q))
      ),
      services: services.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q)
      ),
      articles: articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      ),
    };
  }, [query]);

  const totalResults =
    results.doctors.length +
    results.departments.length +
    results.services.length +
    results.articles.length;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <SearchIcon className="h-8 w-8 text-teal-400" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Search Results
            </h1>
          </div>
          {query && (
            <p className="text-slate-300 text-lg">
              {totalResults} result{totalResults !== 1 ? "s" : ""} for "<span className="text-teal-400 font-semibold">{query}</span>"
            </p>
          )}
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {!query.trim() ? (
            <div className="text-center py-16">
              <SearchIcon className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500 text-lg">Enter a search term to find doctors, departments, services, or articles.</p>
            </div>
          ) : totalResults === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg mb-2">No results found for "{query}"</p>
              <p className="text-slate-400 text-sm">Try different keywords or browse our departments and services directly.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Doctors */}
              {results.doctors.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="h-5 w-5 text-teal-500" />
                    <h2 className="text-xl font-bold text-slate-900">Doctors ({results.doctors.length})</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.doctors.map((doc) => (
                      <Link
                        key={doc.id}
                        to={`/doctors/${doc.slug}`}
                        className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all group"
                      >
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                          {doc.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 truncate">{doc.name}</p>
                          <p className="text-xs text-teal-600">{doc.specialty}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-300 ml-auto shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Departments */}
              {results.departments.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="h-5 w-5 text-teal-500" />
                    <h2 className="text-xl font-bold text-slate-900">Departments ({results.departments.length})</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {results.departments.map((dept) => (
                      <Link
                        key={dept.id}
                        to={`/departments/${dept.slug}`}
                        className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all shrink-0">
                          <dept.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 truncate">{dept.name}</p>
                          <p className="text-xs text-slate-500 line-clamp-1">{dept.description}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-300 ml-auto shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              {results.services.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Stethoscope className="h-5 w-5 text-teal-500" />
                    <h2 className="text-xl font-bold text-slate-900">Services ({results.services.length})</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {results.services.map((svc) => (
                      <Link
                        key={svc.id}
                        to="/services"
                        className="flex items-center gap-3 p-4 rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all group"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600 shrink-0">
                          <svc.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 truncate">{svc.name}</p>
                          <p className="text-xs text-slate-500 line-clamp-1">{svc.description}</p>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-300 ml-auto shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {results.articles.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-teal-500" />
                    <h2 className="text-xl font-bold text-slate-900">Articles ({results.articles.length})</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {results.articles.map((article) => (
                      <Link
                        key={article.id}
                        to="/health-library"
                        className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all group"
                      >
                        <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg font-bold text-slate-300 shrink-0">
                          {article.title[0]}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-900 group-hover:text-teal-600 line-clamp-1">{article.title}</p>
                          <p className="text-xs text-slate-500 line-clamp-1">{article.excerpt}</p>
                          <span className="text-[10px] font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                            {article.category}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-300 ml-auto shrink-0 mt-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
