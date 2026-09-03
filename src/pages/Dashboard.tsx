import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/use-auth";
import {
  Calendar,
  FileText,
  Clock,
  User,
  Activity,
  LogOut,
  ArrowRight,
  Bell,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const quickActions = [
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule a visit with a specialist",
      link: "/appointments",
      color: "from-teal-500 to-emerald-600",
    },
    {
      icon: FileText,
      title: "Health Library",
      description: "Read evidence-based health articles",
      link: "/health-library",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: Activity,
      title: "Departments",
      description: "Explore our medical departments",
      link: "/departments",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: User,
      title: "Find a Doctor",
      description: "Browse our specialist directory",
      link: "/doctors",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const upcomingAppointments = [
    {
      id: "1",
      doctor: "Dr. Sarah Mitchell",
      specialty: "Neurology",
      date: "Sept 12, 2026",
      time: "10:00 AM",
      type: "In-person",
    },
    {
      id: "2",
      doctor: "Dr. Michael Chen",
      specialty: "Orthopedics",
      date: "Sept 28, 2026",
      time: "2:30 PM",
      type: "Video Consultation",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-medium text-slate-500">Patient Dashboard</p>
              <h1 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                Welcome back{user?.name ? `, ${user.name}` : ""}
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="cursor-pointer gap-1.5">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </Button>
              <Button variant="outline" size="sm" className="cursor-pointer gap-1.5">
                <Settings className="h-4 w-4" />
                <span className="hidden sm:inline">Settings</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer gap-1.5"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {quickActions.map((action) => (
              <Link
                key={action.title}
                to={action.link}
                className="group bg-white rounded-2xl border border-slate-100 p-5 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-50/50 transition-all"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${action.color} text-white mb-3 group-hover:scale-105 transition-transform`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm group-hover:text-teal-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">{action.description}</p>
              </Link>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Upcoming Appointments */}
            <Card className="lg:col-span-2 border-slate-100">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
                <Button asChild variant="ghost" size="sm" className="cursor-pointer text-teal-600">
                  <Link to="/appointments">
                    Book New
                    <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl"
                  >
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {apt.doctor.split(" ").slice(1).map((n) => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900">{apt.doctor}</p>
                      <p className="text-xs text-slate-500">{apt.specialty} · {apt.type}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium text-slate-900">{apt.date}</p>
                      <p className="text-xs text-teal-600">{apt.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Profile Card */}
            <Card className="border-slate-100">
              <CardHeader>
                <CardTitle className="text-lg">Your Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-lg font-bold">
                    {user?.name ? user.name.charAt(0).toUpperCase() : "G"}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{user?.name || "Guest User"}</p>
                    <p className="text-xs text-slate-500">{user?.email || "Not signed in with email"}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Member Since</span>
                    <span className="font-medium text-slate-700">Sept 2026</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Total Visits</span>
                    <span className="font-medium text-slate-700">12</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">Active Prescriptions</span>
                    <span className="font-medium text-slate-700">3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
