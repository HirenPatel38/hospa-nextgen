// ========================================
// HOSPA NextGen Configuration Constants
// ========================================

// Brand Information
export const HOSPITAL_NAME = "HOSPA NextGen";
export const HOSPITAL_TAGLINE = "Smarter Care. Better Outcomes.";
export const HOSPITAL_DESCRIPTION =
  "Where clinical expertise, intelligent technology, and patient-first design come together to reshape the healthcare experience.";

// Contact & Emergency
export const EMERGENCY_PHONE = "911";
export const HOSPITAL_PHONE = "+1 (555) 234-5678";
export const HOSPITAL_EMAIL = "hello@hospa-nextgen.com";
export const HOSPITAL_ADDRESS = "1200 Wellness Boulevard, Suite 400, San Francisco, CA 94102";

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
  { label: "Services", path: "/services" },
  { label: "Departments", path: "/departments" },
  { label: "Doctors", path: "/doctors" },
  { label: "Health Library", path: "/health-library" },
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
  "This information is provided for educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment.";

// SEO
export const SITE_TITLE = "HOSPA NextGen | Smarter Care, Better Outcomes";
export const SITE_DESCRIPTION =
  "HOSPA NextGen is a next-generation healthcare platform offering advanced medical care, expert specialists, and innovative patient-first technology.";
