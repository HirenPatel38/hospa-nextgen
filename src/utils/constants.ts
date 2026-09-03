// ========================================
// HOSPA Configuration Constants
// ========================================

// Hospital Information
export const HOSPITAL_NAME = "HOSPA";
export const HOSPITAL_TAGLINE = "Advanced Care. Human at Heart.";
export const HOSPITAL_DESCRIPTION =
  "Where medical expertise, intelligent technology and compassionate care come together.";

// Contact & Emergency
export const EMERGENCY_PHONE = "EMERGENCY_PHONE";
export const HOSPITAL_PHONE = "+1 (555) 000-0000";
export const HOSPITAL_EMAIL = "info@hospa.example.com";
export const HOSPITAL_ADDRESS = "HOSPITAL_ADDRESS";

// Social
export const SOCIAL_LINKS = {
  facebook: "#",
  twitter: "#",
  instagram: "#",
  linkedin: "#",
  youtube: "#",
} as const;

// Navigation
export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Departments", path: "/departments" },
  { label: "Doctors", path: "/doctors" },
  { label: "Diseases", path: "/diseases" },
  { label: "Anatomy", path: "/anatomy" },
  { label: "Services", path: "/services" },
  { label: "Health Library", path: "/health-library" },
  { label: "Appointments", path: "/appointments" },
  { label: "Contact", path: "/contact" },
] as const;

// Statistics
export const STATS = [
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Specialists", value: 150, suffix: "+" },
  { label: "Patients Treated", value: 50, suffix: "K+" },
  { label: "Emergency Care", value: 24, suffix: "/7" },
] as const;

// Appointment Types
export const APPOINTMENT_TYPES = [
  "In-person",
  "Video Consultation",
] as const;

// Gender Options
export const GENDER_OPTIONS = ["Male", "Female", "Other", "Prefer not to say"] as const;

// Medical Disclaimer
export const MEDICAL_DISCLAIMER =
  "This information is provided for educational purposes and is not a substitute for professional medical advice, diagnosis or treatment.";

// SEO
export const SITE_TITLE = "HOSPA | Advanced Healthcare & Medical Services";
export const SITE_DESCRIPTION =
  "HOSPA is a next-generation healthcare platform offering advanced medical care, expert specialists, and innovative technology.";
