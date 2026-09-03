// ========================================
// HOSPA Health Packages
// ========================================

export interface HealthPackage {
  id: string;
  name: string;
  price: string;
  duration: string;
  idealFor: string;
  tests: string[];
  benefits: string[];
  popular?: boolean;
}

export const healthPackages: HealthPackage[] = [
  {
    id: "essential",
    name: "Essential Health Check",
    price: "$199",
    duration: "2-3 hours",
    idealFor: "Adults aged 25-40",
    tests: [
      "Complete blood count",
      "Blood glucose (fasting)",
      "Lipid profile",
      "Liver function tests",
      "Kidney function tests",
      "Urinalysis",
      "Blood pressure check",
      "BMI assessment",
      "Physical examination",
    ],
    benefits: [
      "Early detection of common health issues",
      "Baseline health assessment",
      "Doctor consultation",
      "Personalized health report",
    ],
  },
  {
    id: "advanced",
    name: "Advanced Health Check",
    price: "$499",
    duration: "4-5 hours",
    idealFor: "Adults aged 35-55",
    tests: [
      "Everything in Essential Check",
      "Thyroid function tests",
      "HbA1c (diabetes screening)",
      "Chest X-ray",
      "ECG",
      "Abdominal ultrasound",
      "Eye examination",
      "Cancer markers (basic panel)",
      "Vitamin D and B12 levels",
      "Urine microalbumin",
    ],
    benefits: [
      "Comprehensive health screening",
      "Cardiovascular risk assessment",
      "Diabetes screening",
      "Cancer screening basics",
      "Specialist consultation",
      "Detailed health report with recommendations",
    ],
    popular: true,
  },
  {
    id: "executive",
    name: "Executive Health Check",
    price: "$999",
    duration: "Full day",
    idealFor: "Executives and professionals",
    tests: [
      "Everything in Advanced Check",
      "Cardiac stress test",
      "CT coronary calcium score",
      "Magnetic resonance imaging",
      "Tumor markers (comprehensive)",
      "Advanced cardiac panel",
      "Bone density scan",
      "Pulmonary function tests",
      "Audiometry",
      "Dermatology screening",
    ],
    benefits: [
      "Premium comprehensive health assessment",
      "Advanced cardiac evaluation",
      "Full cancer screening",
      "Executive suite experience",
      "Priority specialist consultations",
      "Comprehensive executive health report",
      "Annual health tracking",
      "Dedicated health coordinator",
    ],
  },
  {
    id: "senior",
    name: "Senior Wellness Check",
    price: "$699",
    duration: "5-6 hours",
    idealFor: "Adults aged 60+",
    tests: [
      "Everything in Advanced Check",
      "Bone density scan",
      "Cognitive assessment",
      "Hearing test",
      "Vision screening",
      "Balance and fall risk assessment",
      "Advanced cardiac panel",
      "Diabetic screening",
      "Colon cancer screening guidance",
    ],
    benefits: [
      "Age-specific health assessment",
      "Fall risk evaluation",
      "Cognitive health screening",
      "Specialized geriatric consultation",
      "Personalized wellness plan",
      "Caregiver guidance",
    ],
  },
  {
    id: "womens",
    name: "Women's Wellness",
    price: "$549",
    duration: "4-5 hours",
    idealFor: "Women of all ages",
    tests: [
      "Full blood work panel",
      "Thyroid function",
      "Iron studies",
      "Mammogram",
      "Pap smear",
      "Pelvic ultrasound",
      "Bone density screening",
      "Hormone panel",
      "Vitamin D levels",
      "ECG",
    ],
    benefits: [
      "Women-specific health screening",
      "Breast health assessment",
      "Gynecological screening",
      "Hormonal health evaluation",
      "Specialist gynecology consultation",
      "Personalized wellness report",
    ],
  },
  {
    id: "mens",
    name: "Men's Wellness",
    price: "$549",
    duration: "4-5 hours",
    idealFor: "Men of all ages",
    tests: [
      "Full blood work panel",
      "Prostate health markers",
      "Testosterone levels",
      "Lipid profile",
      "Liver and kidney function",
      "Cardiac screening (ECG + stress test)",
      "PSA (prostate-specific antigen)",
      "Testicular ultrasound guidance",
      "Bone density screening",
      "Diabetic screening",
    ],
    benefits: [
      "Men-specific health screening",
      "Cardiovascular risk assessment",
      "Prostate health evaluation",
      "Hormonal health check",
      "Specialist urology consultation",
      "Personalized wellness report",
    ],
  },
];
