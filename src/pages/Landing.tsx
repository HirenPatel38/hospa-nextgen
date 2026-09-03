import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Phone,
  Shield,
  Award,
  Clock,
  Users,
  Heart,
  Brain,
  Bone,
  Stethoscope,
  Eye,
  Baby,
  ChevronRight,
  Star,
  CheckCircle2,
  Sparkles,
  Zap,
  Activity,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { healthPackages } from "@/data/healthPackages";
import { articles } from "@/data/articles";
import {
  HOSPITAL_NAME,
  HOSPITAL_TAGLINE,
  HOSPITAL_DESCRIPTION,
  STATS,
  EMERGENCY_PHONE,
} from "@/utils/constants";

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function HeroSection() {
  const [heroSearch, setHeroSearch] = useState("");
  const { ref: heroRef, isInView: heroVisible } = useInView({ threshold: 0.1 });

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(heroSearch.trim())}`;
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900" />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px]" />
      <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-emerald-500/8 blur-[100px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-semibold mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Next-Generation Healthcare Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Smarter Care.{" "}
              <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Better Outcomes.
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed max-w-lg mb-8">
              {HOSPITAL_DESCRIPTION}
            </p>

            {/* Hero Search */}
            <form onSubmit={handleHeroSearch} className="mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-1 max-w-md">
                <Search className="ml-3 h-4 w-4 text-slate-400 shrink-0" />
                <Input
                  value={heroSearch}
                  onChange={(e) => setHeroSearch(e.target.value)}
                  placeholder="Search doctors, conditions, or services..."
                  className="border-0 bg-transparent text-white placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-teal-500 hover:bg-teal-400 text-white border-0 shrink-0 cursor-pointer"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 border-0 cursor-pointer text-base"
              >
                <Link to="/appointments">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book an Appointment
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 cursor-pointer text-base"
              >
                <Link to="/services">
                  Explore Our Care
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/10">
              {[
                { icon: Shield, text: "Board-Certified Specialists" },
                { icon: Clock, text: "24/7 Emergency Care" },
                { icon: Award, text: "Award-Winning Facility" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-slate-400">
                  <item.icon className="h-4 w-4 text-teal-400" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={heroVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating cards */}
              <div className="relative z-10 bg-white/[0.07] backdrop-blur-xl rounded-3xl border border-white/10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Heart, label: "Cardiology", color: "from-red-400 to-rose-500", count: "12 Doctors" },
                    { icon: Brain, label: "Neurology", color: "from-violet-400 to-purple-500", count: "8 Doctors" },
                    { icon: Bone, label: "Orthopedics", color: "from-amber-400 to-orange-500", count: "10 Doctors" },
                    { icon: Eye, label: "Ophthalmology", color: "from-sky-400 to-blue-500", count: "6 Doctors" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                      className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-4 border border-white/5 hover:bg-white/[0.1] transition-all cursor-pointer group"
                    >
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} mb-3 group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <p className="text-white text-sm font-semibold">{item.label}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{item.count}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-xl p-4 border border-teal-500/10">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500">
                      <Stethoscope className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">Ready to see a specialist?</p>
                      <p className="text-teal-300 text-xs">Average wait time: under 15 minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative rings */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-teal-500/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-emerald-500/20 animate-[spin_20s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Stats Bar                                                          */
/* ------------------------------------------------------------------ */

function StatsBar() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref} className="relative -mt-16 z-20 mx-4 sm:mx-auto max-w-5xl">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} enabled={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, index, enabled }: { stat: (typeof STATS)[number]; index: number; enabled: boolean }) {
  const count = useCounter(stat.value, 2000, enabled);

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={enabled ? "visible" : "hidden"}
      className="text-center"
    >
      <div className="text-3xl lg:text-4xl font-bold text-slate-900">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Departments Preview                                                */
/* ------------------------------------------------------------------ */

function DepartmentsPreview() {
  const { ref, isInView } = useInView();
  const featured = departments.slice(0, 8);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Our Specialties
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            World-Class Departments
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Comprehensive medical care across {departments.length} specialized departments, each staffed with board-certified physicians using the latest diagnostic and treatment technologies.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {featured.map((dept) => (
            <motion.div key={dept.id} variants={fadeUp} custom={0}>
              <Link
                to={`/departments/${dept.slug}`}
                className="group block bg-white rounded-2xl border border-slate-100 p-5 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 text-slate-600 group-hover:from-teal-50 group-hover:to-emerald-50 group-hover:text-teal-600 transition-all mb-3">
                  <dept.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm mb-1">{dept.name}</h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{dept.description}</p>
                <div className="flex items-center gap-1 mt-3 text-xs font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            className="border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer"
          >
            <Link to="/departments">
              View All Departments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Why Choose Us                                                      */
/* ------------------------------------------------------------------ */

function WhyChooseUs() {
  const { ref, isInView } = useInView();

  const reasons = [
    {
      icon: Shield,
      title: "Board-Certified Experts",
      description: "Every specialist holds top-tier board certifications and brings years of focused clinical experience.",
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "State-of-the-art diagnostic and surgical equipment, including AI-assisted imaging and robotic surgery.",
    },
    {
      icon: Heart,
      title: "Patient-First Philosophy",
      description: "Personalized care plans designed around your needs, with transparent communication at every step.",
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Emergency care around the clock, with industry-leading wait times for specialist consultations.",
    },
    {
      icon: Activity,
      title: "Integrated Wellness",
      description: "From preventive screenings to rehabilitation, a full spectrum of health services under one roof.",
    },
    {
      icon: Users,
      title: "Multidisciplinary Teams",
      description: "Complex cases reviewed collaboratively by specialists across departments for optimal outcomes.",
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Why HOSPA NextGen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            A Different Standard of Care
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We combine clinical excellence with thoughtful design and technology to create an experience that puts patients first.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-teal-100 hover:shadow-lg hover:shadow-teal-50/50 transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-lg shadow-teal-500/20 mb-4">
                <reason.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{reason.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Featured Doctors                                                   */
/* ------------------------------------------------------------------ */

function FeaturedDoctors() {
  const { ref, isInView } = useInView();
  const featured = doctors.slice(0, 4);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Meet Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Featured Specialists
            </h2>
            <p className="text-slate-500 max-w-xl">
              World-class physicians with decades of experience and a commitment to exceptional patient outcomes.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer shrink-0"
          >
            <Link to="/doctors">
              View All Doctors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featured.map((doc, i) => (
            <motion.div key={doc.id} variants={fadeUp} custom={i}>
              <Link
                to={`/doctors/${doc.slug}`}
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-teal-200 hover:shadow-xl hover:shadow-teal-50/50 transition-all"
              >
                {/* Avatar placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {doc.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold">
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    {doc.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 text-sm group-hover:text-teal-600 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-teal-600 font-medium mt-0.5">{doc.specialty}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {doc.experience} years experience
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {doc.availability.slice(0, 3).map((day) => (
                      <span
                        key={day}
                        className="text-[10px] font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"
                      >
                        {day.slice(0, 3)}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Services Preview                                                   */
/* ------------------------------------------------------------------ */

function ServicesPreview() {
  const { ref, isInView } = useInView();
  const featured = services.slice(0, 6);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Complete Healthcare Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From emergency care to preventive health, we offer a full spectrum of medical services designed for your well-being.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              custom={i}
              className="group bg-white/[0.05] backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-teal-500/30 hover:bg-white/[0.08] transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 mb-4 group-hover:bg-teal-500/20 transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.features.slice(0, 3).map((f) => (
                  <span
                    key={f}
                    className="text-xs text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded-full"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-teal-500 hover:bg-teal-400 text-white border-0 cursor-pointer"
          >
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Health Packages                                                    */
/* ------------------------------------------------------------------ */

function HealthPackagesSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Health Packages
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Preventive Health Checkups
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Comprehensive health screening packages tailored to different age groups and health needs. Early detection saves lives.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {healthPackages.slice(0, 3).map((pkg, i) => (
            <motion.div
              key={pkg.id}
              variants={fadeUp}
              custom={i}
              className={`relative bg-white rounded-2xl border-2 p-6 transition-all ${
                pkg.popular
                  ? "border-teal-500 shadow-xl shadow-teal-500/10"
                  : "border-slate-100 hover:border-teal-100"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-bold text-slate-900 text-lg">{pkg.name}</h3>
              <p className="text-xs text-slate-500 mt-1 mb-3">{pkg.idealFor}</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold text-teal-600">{pkg.price}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {pkg.tests.slice(0, 5).map((test) => (
                  <li key={test} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0 mt-0.5" />
                    {test}
                  </li>
                ))}
                {pkg.tests.length > 5 && (
                  <li className="text-xs text-slate-400 ml-6">
                    +{pkg.tests.length - 5} more tests included
                  </li>
                )}
              </ul>
              <Button
                asChild
                variant={pkg.popular ? "default" : "outline"}
                className={`w-full cursor-pointer ${
                  pkg.popular
                    ? "bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-0 shadow-lg shadow-teal-500/25"
                    : "border-slate-200 text-slate-700"
                }`}
              >
                <Link to="/appointments">Book This Package</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */

function TestimonialsSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Patient Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Our Patients Say
          </h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 6).map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              custom={i}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                "{t.content}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.department}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Latest from Health Library                                         */
/* ------------------------------------------------------------------ */

function HealthLibraryPreview() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Health Library
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Stay Informed
            </h2>
            <p className="text-slate-500 max-w-xl">
              Evidence-based health articles written by our specialists to help you make informed decisions about your well-being.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer shrink-0"
          >
            <Link to="/health-library">
              Browse All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.slice(0, 3).map((article, i) => (
            <motion.div key={article.id} variants={fadeUp} custom={i}>
              <Link
                to={`/health-library#${article.slug}`}
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-teal-200 hover:shadow-lg transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center">
                  <div className="text-4xl font-bold text-slate-200">{article.title[0]}</div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400">{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-slate-500 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">
                      {article.author.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <span className="text-xs text-slate-500">{article.author}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA Section                                                        */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Experience Smarter Healthcare?
        </h2>
        <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
          Join thousands of patients who trust HOSPA NextGen for their health. Book your first appointment today and discover a better way to care.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-teal-700 hover:bg-teal-50 border-0 cursor-pointer text-base font-semibold shadow-xl"
          >
            <Link to="/appointments">
              <Calendar className="mr-2 h-4 w-4" />
              Book an Appointment
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 cursor-pointer text-base"
          >
            <a href={`tel:${EMERGENCY_PHONE}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call {EMERGENCY_PHONE}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Landing Page (default export)                                      */
/* ------------------------------------------------------------------ */

export default function Landing() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsBar />
      <DepartmentsPreview />
      <WhyChooseUs />
      <FeaturedDoctors />
      <ServicesPreview />
      <HealthPackagesSection />
      <TestimonialsSection />
      <HealthLibraryPreview />
      <CTASection />
    </main>
  );
}
