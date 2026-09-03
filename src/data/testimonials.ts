// ========================================
// HOSPA Testimonials Data
// ========================================

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  department: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Margaret Chen",
    role: "Cardiac Patient",
    content: "After my heart surgery at HOSPA, the care I received was exceptional. Dr. Khan and his team were not only highly skilled but also incredibly compassionate. The recovery process was well-managed, and I felt supported every step of the way.",
    rating: 5,
    department: "Cardiology",
  },
  {
    id: "t2",
    name: "Robert Williams",
    role: "Orthopedic Patient",
    content: "I was nervous about my knee replacement, but the orthopedic team at HOSPA made the entire experience smooth. From pre-surgery education to post-operative rehabilitation, every detail was taken care of. I'm now walking pain-free.",
    rating: 5,
    department: "Orthopedics",
  },
  {
    id: "t3",
    name: "Amira Hassan",
    role: "Pediatric Patient's Parent",
    content: "As a mother, nothing matters more than my child's well-being. The pediatric team at HOSPA treated my son with such warmth and professionalism. They explained everything clearly and made him feel comfortable throughout his treatment.",
    rating: 5,
    department: "Pediatrics",
  },
  {
    id: "t4",
    name: "David Okonkwo",
    role: "Neurology Patient",
    content: "Managing my chronic migraines had been a constant struggle until I found Dr. Mitchell at HOSPA. She took the time to understand my history and developed a treatment plan that has significantly improved my quality of life.",
    rating: 5,
    department: "Neurology",
  },
  {
    id: "t5",
    name: "Sarah Thompson",
    role: "Dermatology Patient",
    content: "Dr. Park's approach to treating my skin condition was thorough and effective. She explained every treatment option and helped me choose the best path forward. The results have been remarkable, and I finally feel confident in my skin again.",
    rating: 5,
    department: "Dermatology",
  },
  {
    id: "t6",
    name: "James Rodriguez",
    role: "Executive Health Check",
    content: "The executive health checkup at HOSPA was comprehensive and professionally conducted. The follow-up report was detailed with clear recommendations. I appreciate the proactive approach to preventive healthcare.",
    rating: 5,
    department: "Preventive Health",
  },
  {
    id: "t7",
    name: "Fatima Al-Rashid",
    role: "Endocrinology Patient",
    content: "Dr. Johnson has been managing my diabetes with a personalized approach that works for my lifestyle. The diabetes education program at HOSPA has given me the knowledge and confidence to take control of my health.",
    rating: 5,
    department: "Endocrinology",
  },
  {
    id: "t8",
    name: "Michael Brooks",
    role: "Gastroenterology Patient",
    content: "The gastroenterology department at HOSPA provided excellent care. From the initial consultation to the follow-up, every interaction was professional and caring. The endoscopy was performed smoothly and recovery was quick.",
    rating: 5,
    department: "Gastroenterology",
  },
];
