// ========================================
// HOSPA FAQs Data
// ========================================

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: "how-to-book",
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website by visiting the Appointments page, selecting your preferred department and doctor, choosing a date and time, and filling in your information. You can also call our reception desk during business hours.",
    category: "Appointments",
  },
  {
    id: "what-to-bring",
    question: "What should I bring to my appointment?",
    answer: "Please bring a valid photo ID, your insurance card (if applicable), a list of current medications, any previous medical records relevant to your visit, and any referral letters from other healthcare providers. Arriving 15 minutes early helps ensure a smooth check-in process.",
    category: "Appointments",
  },
  {
    id: "emergency-services",
    question: "Do you offer emergency services?",
    answer: "Yes, our Emergency Department operates 24 hours a day, 7 days a week, 365 days a year. For life-threatening emergencies, call emergency services immediately. Our emergency team is equipped to handle all types of medical emergencies.",
    category: "Emergency",
  },
  {
    id: "find-doctor",
    question: "How can I find a doctor?",
    answer: "You can browse our doctor directory on the Doctors page, where you can filter by department, specialty, and availability. Each doctor has a detailed profile with their qualifications, experience, and patient reviews to help you make an informed choice.",
    category: "Doctors",
  },
  {
    id: "health-checkups",
    question: "Do you offer health checkups?",
    answer: "Yes, we offer a range of health checkup packages designed for different age groups and health needs. Our packages range from essential health checks to comprehensive executive wellness programs. Visit the Health Packages section for details.",
    category: "Services",
  },
  {
    id: "reschedule",
    question: "Can I reschedule an appointment?",
    answer: "Yes, you can reschedule an appointment by contacting our reception at least 24 hours before your scheduled visit. You can also manage your appointments through the patient portal on our website.",
    category: "Appointments",
  },
  {
    id: "insurance",
    question: "Do you accept insurance?",
    answer: "We accept most major insurance plans. Please contact our billing department or check with your insurance provider to confirm coverage. Our staff can assist you with insurance-related questions.",
    category: "Billing",
  },
  {
    id: "telemedicine",
    question: "Do you offer telemedicine consultations?",
    answer: "Yes, we offer video consultations with our doctors for appropriate medical conditions. You can book a telemedicine appointment through our website. Our doctors will determine if your condition is suitable for a virtual consultation.",
    category: "Services",
  },
  {
    id: "medical-records",
    question: "How can I access my medical records?",
    answer: "You can request your medical records through our patient portal or by submitting a written request at our medical records department. Processing typically takes 3-5 business days.",
    category: "Records",
  },
  {
    id: "parking",
    question: "Is parking available at the hospital?",
    answer: "Yes, we have ample parking available for patients and visitors. There is a parking garage adjacent to the main entrance with designated spots for disabled visitors and expectant mothers. Parking validation is available at the reception desk.",
    category: "General",
  },
  {
    id: "visitor-hours",
    question: "What are the visiting hours?",
    answer: "General visiting hours are from 8:00 AM to 8:00 PM daily. ICU visiting hours may vary. Please check with the nursing station for specific ward policies. We ask that visitors limit the number per patient to ensure a restful environment.",
    category: "General",
  },
  {
    id: "second-opinion",
    question: "Can I get a second opinion?",
    answer: "Absolutely. We encourage patients to seek second opinions when they want additional perspective on their diagnosis or treatment plan. Our specialists are happy to review previous records and provide their expert assessment.",
    category: "General",
  },
];
