import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Stethoscope,
  MapPin,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { departments } from "@/data/departments";
import { doctors } from "@/data/doctors";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Step = 1 | 2 | 3 | 4;

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

export default function Appointments() {
  const [step, setStep] = useState<Step>(1);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const filteredDoctors = selectedDepartment
    ? doctors.filter((d) => d.departmentId === selectedDepartment)
    : doctors;

  const selectedDoctorData = doctors.find((d) => d.id === selectedDoctor);
  const selectedDeptData = departments.find((d) => d.id === selectedDepartment);

  const canProceed = (): boolean => {
    switch (step) {
      case 1: return !!selectedDepartment;
      case 2: return !!selectedDoctor;
      case 3: return !!selectedDate && !!selectedTime;
      case 4: return !!formData.firstName && !!formData.lastName && !!formData.email && !!formData.phone;
      default: return false;
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  }).filter((d) => d.getDay() !== 0); // Skip Sundays

  const formatDate = (d: Date) => {
    return d.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const steps = [
    { label: "Department", icon: Stethoscope },
    { label: "Doctor", icon: User },
    { label: "Schedule", icon: Clock },
    { label: "Your Info", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 pt-28 pb-16 lg:pt-32 lg:pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-3">
              Schedule a Visit
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Book an Appointment
            </h1>
            <p className="text-slate-300 text-lg">
              Choose your department, specialist, and preferred time. We'll confirm your booking within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {submitted ? (
            /* Success */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-12 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-50 mx-auto mb-6">
                <CheckCircle2 className="h-8 w-8 text-teal-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Appointment Requested</h2>
              <p className="text-slate-500 mb-6 max-w-md mx-auto">
                Thank you, {formData.firstName}! We've received your appointment request for{" "}
                <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong> with{" "}
                <strong>{selectedDoctorData?.name}</strong>. We'll send a confirmation to {formData.email} within 24 hours.
              </p>
              <div className="bg-slate-50 rounded-xl p-5 text-left max-w-sm mx-auto space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Department</span><span className="font-medium">{selectedDeptData?.name}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Doctor</span><span className="font-medium">{selectedDoctorData?.name}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="font-medium">{selectedDate}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Time</span><span className="font-medium">{selectedTime}</span></div>
              </div>
              <Button
                className="mt-8 cursor-pointer"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setSelectedDepartment("");
                  setSelectedDoctor("");
                  setSelectedDate("");
                  setSelectedTime("");
                  setFormData({ firstName: "", lastName: "", email: "", phone: "", reason: "", notes: "" });
                }}
              >
                Book Another Appointment
              </Button>
            </motion.div>
          ) : (
            <>
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8 px-2">
                {steps.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                          step > i + 1
                            ? "bg-teal-500 text-white"
                            : step === i + 1
                              ? "bg-teal-500 text-white ring-4 ring-teal-500/20"
                              : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {step > i + 1 ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                      </div>
                      <span className={`hidden sm:inline text-sm font-medium ${step === i + 1 ? "text-slate-900" : "text-slate-400"}`}>
                        {s.label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className={`hidden sm:block w-12 h-0.5 mx-3 ${step > i + 1 ? "bg-teal-500" : "bg-slate-200"}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {/* Step 1: Department */}
                  {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">Select Department</h2>
                      <p className="text-sm text-slate-500 mb-6">Choose the medical department for your visit.</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {departments.filter(d => d.conditions.length > 0).map((dept) => (
                          <button
                            key={dept.id}
                            onClick={() => setSelectedDepartment(dept.id)}
                            className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                              selectedDepartment === dept.id
                                ? "border-teal-500 bg-teal-50 ring-2 ring-teal-500/10"
                                : "border-slate-100 hover:border-slate-200"
                            }`}
                          >
                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              selectedDepartment === dept.id
                                ? "bg-teal-500 text-white"
                                : "bg-slate-100 text-slate-500"
                            } transition-colors`}>
                              <dept.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900">{dept.name}</p>
                              <p className="text-xs text-slate-500 line-clamp-1">{dept.description}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Doctor */}
                  {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">Choose a Doctor</h2>
                      <p className="text-sm text-slate-500 mb-6">Select a specialist from the {selectedDeptData?.name} department.</p>
                      <div className="space-y-3">
                        {filteredDoctors.map((doc) => (
                          <button
                            key={doc.id}
                            onClick={() => setSelectedDoctor(doc.id)}
                            className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                              selectedDoctor === doc.id
                                ? "border-teal-500 bg-teal-50"
                                : "border-slate-100 hover:border-slate-200"
                            }`}
                          >
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                              {doc.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-slate-900">{doc.name}</p>
                              <p className="text-xs text-teal-600">{doc.specialty}</p>
                              <p className="text-xs text-slate-500 mt-0.5">{doc.experience} years · {doc.rating}★</p>
                            </div>
                            {selectedDoctor === doc.id && <CheckCircle2 className="h-5 w-5 text-teal-500 shrink-0" />}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Schedule */}
                  {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">Pick a Date & Time</h2>
                      <p className="text-sm text-slate-500 mb-6">
                        Available slots for {selectedDoctorData?.name} — {selectedDoctorData?.availability.join(", ")}.
                      </p>

                      {/* Date Grid */}
                      <p className="text-sm font-semibold text-slate-700 mb-3">Select a Date</p>
                      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-6">
                        {dates.map((d) => {
                          const dateStr = d.toISOString().split("T")[0];
                          const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
                          const isAvailable = selectedDoctorData?.availability.includes(dayName);
                          return (
                            <button
                              key={dateStr}
                              disabled={!isAvailable}
                              onClick={() => setSelectedDate(dateStr)}
                              className={`p-2 rounded-xl text-center border-2 transition-all ${
                                selectedDate === dateStr
                                  ? "border-teal-500 bg-teal-50"
                                  : isAvailable
                                    ? "border-slate-100 hover:border-slate-200"
                                    : "border-transparent bg-slate-50 text-slate-300 cursor-not-allowed"
                              }`}
                            >
                              <p className="text-[10px] text-slate-400">{dayName}</p>
                              <p className="text-sm font-bold text-slate-900">{d.getDate()}</p>
                              <p className="text-[10px] text-slate-400">{d.toLocaleDateString("en-US", { month: "short" })}</p>
                            </button>
                          );
                        })}
                      </div>

                      {/* Time Slots */}
                      {selectedDate && (
                        <>
                          <p className="text-sm font-semibold text-slate-700 mb-3">Select a Time</p>
                          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-2.5 rounded-lg text-sm font-medium border-2 transition-all ${
                                  selectedTime === time
                                    ? "border-teal-500 bg-teal-50 text-teal-700"
                                    : "border-slate-100 text-slate-600 hover:border-slate-200"
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </motion.div>
                  )}

                  {/* Step 4: Patient Info */}
                  {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                      <h2 className="text-xl font-bold text-slate-900 mb-1">Your Information</h2>
                      <p className="text-sm text-slate-500 mb-6">Please provide your details to complete the booking.</p>

                      <div className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-slate-700 mb-1 block">First Name *</label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <Input
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                placeholder="John"
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-700 mb-1 block">Last Name *</label>
                            <Input
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-slate-700 mb-1 block">Email *</label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <Input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                className="pl-10"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-700 mb-1 block">Phone *</label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                              <Input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+1 (555) 123-4567"
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Reason for Visit</label>
                          <Input
                            value={formData.reason}
                            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                            placeholder="Annual checkup, specific symptoms, etc."
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-slate-700 mb-1 block">Additional Notes</label>
                          <textarea
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder="Any relevant medical history, allergies, or special requirements..."
                            className="w-full h-24 px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                          />
                        </div>
                      </div>

                      {/* Booking Summary */}
                      <div className="mt-6 bg-slate-50 rounded-xl p-5 space-y-2 text-sm">
                        <p className="font-semibold text-slate-900 mb-2">Booking Summary</p>
                        <div className="flex justify-between"><span className="text-slate-500">Department</span><span className="font-medium">{selectedDeptData?.name}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Doctor</span><span className="font-medium">{selectedDoctorData?.name}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Date</span><span className="font-medium">{selectedDate}</span></div>
                        <div className="flex justify-between"><span className="text-slate-500">Time</span><span className="font-medium">{selectedTime}</span></div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
                  <Button
                    variant="outline"
                    onClick={() => setStep((s) => (s - 1) as Step)}
                    disabled={step === 1}
                    className="cursor-pointer"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" />
                    Back
                  </Button>

                  {step < 4 ? (
                    <Button
                      onClick={() => setStep((s) => (s + 1) as Step)}
                      disabled={!canProceed()}
                      className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-0 cursor-pointer shadow-lg shadow-teal-500/25"
                    >
                      Continue
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      disabled={!canProceed()}
                      className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white border-0 cursor-pointer shadow-lg shadow-teal-500/25"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Confirm Appointment
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
