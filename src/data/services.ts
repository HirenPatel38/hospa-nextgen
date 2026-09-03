// ========================================
// HOSPA Services Data
// ========================================

import {
  Clock,
  Scan,
  TestTube,
  Pill,
  Car,
  Scissors,
  HeartPulse,
  ShieldCheck,
  Activity,
  Video,
  Dumbbell,
  Stethoscope,
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  description: string;
  longDescription: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "emergency",
    name: "24/7 Emergency Care",
    icon: Clock,
    description: "Round-the-clock emergency medical care with rapid triage and expert treatment.",
    longDescription: "Our emergency department is staffed 24/7 with experienced emergency physicians and nurses. We are equipped to handle all medical emergencies with rapid triage and evidence-based treatment protocols.",
    features: ["Rapid triage system", "Board-certified emergency physicians", "Advanced life support", "Trauma care", "Cardiac emergency response", "Pediatric emergency care"],
  },
  {
    id: "diagnostics",
    name: "Diagnostics",
    icon: TestTube,
    description: "Comprehensive diagnostic laboratory services with accurate and timely results.",
    longDescription: "Our state-of-the-art diagnostic laboratory provides a wide range of tests to help diagnose conditions accurately and efficiently.",
    features: ["Complete blood panels", "Metabolic testing", "Hormone panels", "Cancer markers", "Infectious disease testing", "Allergy testing"],
  },
  {
    id: "imaging",
    name: "Advanced Imaging",
    icon: Scan,
    description: "Cutting-edge medical imaging technology for precise diagnosis.",
    longDescription: "Our imaging center features the latest technology in MRI, CT, ultrasound, and X-ray for accurate and comfortable diagnostic imaging.",
    features: ["3T MRI", "64-slice CT scanner", "3D mammography", "Digital X-ray", "Ultrasound", "PET scan"],
  },
  {
    id: "laboratory",
    name: "Laboratory",
    icon: TestTube,
    description: "Full-service clinical laboratory with rapid turnaround on test results.",
    longDescription: "Our clinical laboratory provides comprehensive testing services with quality assurance and timely reporting to support your care team.",
    features: ["Hematology", "Chemistry", "Microbiology", "Blood bank", "Pathology", "Point-of-care testing"],
  },
  {
    id: "pharmacy",
    name: "Pharmacy",
    icon: Pill,
    description: "Full-service pharmacy with expert pharmaceutical care and medication management.",
    longDescription: "Our pharmacy provides comprehensive medication services, including prescription filling, medication counseling, and clinical pharmacy services.",
    features: ["Prescription services", "Medication counseling", "Drug interaction checks", "Compounding", "Home delivery", "Immunizations"],
  },
  {
    id: "ambulance",
    name: "Ambulance Services",
    icon: Car,
    description: "Emergency medical transport with advanced life support capabilities.",
    longDescription: "Our ambulance fleet is equipped with advanced life support equipment and staffed by trained paramedics for safe and efficient emergency transport.",
    features: ["Advanced life support", "Basic life support", "Specialty transport", "Neonatal transport", "24/7 availability", "GPS tracking"],
  },
  {
    id: "surgery",
    name: "Surgery",
    icon: Scissors,
    description: "Expert surgical care in state-of-the-art operating theatres.",
    longDescription: "Our surgical department provides a full range of surgical services using the latest minimally invasive techniques and advanced technology.",
    features: ["Minimally invasive surgery", "Robotic surgery", "Day surgery", "Pre-operative assessment", "Post-operative care", "Surgical ICU"],
  },
  {
    id: "icu",
    name: "Intensive Care",
    icon: HeartPulse,
    description: "Critical care unit with 24/7 monitoring and specialized treatment.",
    longDescription: "Our ICU provides round-the-clock critical care with experienced intensivists, specialized nurses, and advanced monitoring equipment.",
    features: ["24/7 physician coverage", "Continuous monitoring", "Ventilator management", "Dialysis capability", "Specialist consultations", "Family support"],
  },
  {
    id: "preventive",
    name: "Preventive Health",
    icon: ShieldCheck,
    description: "Comprehensive preventive care programs to keep you healthy.",
    longDescription: "We offer a range of preventive health services designed to help you maintain good health and detect potential issues early.",
    features: ["Health screenings", "Immunizations", "Lifestyle counseling", "Risk assessment", "Cancer screening", "Cardiovascular screening"],
  },
  {
    id: "checkups",
    name: "Health Checkups",
    icon: Activity,
    description: "Complete health checkup packages for individuals and families.",
    longDescription: "Our health checkup packages are designed to provide comprehensive health assessment with personalized reports and follow-up recommendations.",
    features: ["Comprehensive blood work", "Physical examination", "Imaging studies", "Specialist consultations", "Personalized reports", "Follow-up care"],
  },
  {
    id: "telemedicine",
    name: "Telemedicine",
    icon: Video,
    description: "Virtual consultations with healthcare professionals from anywhere.",
    longDescription: "Our telemedicine platform allows you to consult with doctors remotely, providing convenient access to healthcare from the comfort of your home.",
    features: ["Video consultations", "Secure messaging", "Digital prescriptions", "Follow-up appointments", "Multi-specialty access", "Mobile app"],
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation",
    icon: Dumbbell,
    description: "Comprehensive rehabilitation services for recovery and improvement.",
    longDescription: "Our rehabilitation center provides physical, occupational, and speech therapy services to help patients recover and regain independence.",
    features: ["Physical therapy", "Occupational therapy", "Speech therapy", "Cardiac rehabilitation", "Neurological rehabilitation", "Pain management"],
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    icon: Stethoscope,
    description: "Expert physiotherapy services for musculoskeletal recovery.",
    longDescription: "Our physiotherapy services focus on restoring movement and function through evidence-based exercise, manual therapy, and education.",
    features: ["Musculoskeletal therapy", "Sports rehabilitation", "Post-surgical recovery", "Chronic pain management", "Ergonomic assessment", "Home exercise programs"],
  },
];
