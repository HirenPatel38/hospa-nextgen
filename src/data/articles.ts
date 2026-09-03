// ========================================
// HOSPA Health Library Data
// ========================================

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
}

export const articleCategories = [
  "Nutrition",
  "Fitness",
  "Heart Health",
  "Diabetes",
  "Mental Wellness",
  "Women's Health",
  "Men's Health",
  "Children's Health",
  "Preventive Care",
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

export const articles: Article[] = [
  {
    id: "a1",
    title: "Understanding Heart-Healthy Diets",
    slug: "understanding-heart-healthy-diets",
    category: "Heart Health",
    excerpt: "A balanced diet is one of the most important factors in maintaining cardiovascular health. Learn about foods that support a healthy heart.",
    content: "Heart disease remains one of the leading causes of death worldwide. However, research consistently shows that dietary choices play a significant role in cardiovascular health. A heart-healthy diet typically emphasizes fruits, vegetables, whole grains, lean proteins, and healthy fats while limiting sodium, added sugars, and processed foods. The Mediterranean diet and DASH diet are two well-studied dietary patterns that have shown benefits for heart health. Key principles include choosing whole foods over processed ones, incorporating omega-3 rich fish, using olive oil as a primary fat source, and maintaining portion control.",
    author: "Dr. Ahmed Khan",
    date: "2025-08-15",
    readTime: "5 min read",
    tags: ["nutrition", "heart health", "diet", "prevention"],
  },
  {
    id: "a2",
    title: "The Importance of Regular Exercise",
    slug: "importance-of-regular-exercise",
    category: "Fitness",
    excerpt: "Physical activity is essential for overall health. Discover how regular exercise can improve your physical and mental well-being.",
    content: "Regular physical activity is one of the most effective ways to improve and maintain overall health. The World Health Organization recommends at least 150 minutes of moderate-intensity aerobic activity per week for adults. Exercise helps control weight, reduce the risk of cardiovascular disease, type 2 diabetes, and some cancers. It also strengthens bones and muscles, improves mental health, and enhances quality of life. Even moderate activities like brisk walking, cycling, or swimming can provide significant health benefits when done consistently.",
    author: "Dr. Priya Sharma",
    date: "2025-08-10",
    readTime: "4 min read",
    tags: ["fitness", "exercise", "prevention", "wellness"],
  },
  {
    id: "a3",
    title: "Managing Stress for Better Health",
    slug: "managing-stress-better-health",
    category: "Mental Wellness",
    excerpt: "Chronic stress can impact both physical and mental health. Learn effective strategies for stress management.",
    content: "Chronic stress affects virtually every system in the body, contributing to conditions like hypertension, heart disease, obesity, diabetes, and depression. Effective stress management techniques include regular physical activity, adequate sleep, mindfulness meditation, deep breathing exercises, maintaining social connections, and seeking professional help when needed. Setting boundaries, managing time effectively, and engaging in hobbies can also significantly reduce stress levels. Remember, managing stress is not about eliminating all stress but about developing healthy coping mechanisms.",
    author: "Dr. Sarah Mitchell",
    date: "2025-08-05",
    readTime: "6 min read",
    tags: ["mental health", "stress", "wellness", "mindfulness"],
  },
  {
    id: "a4",
    title: "Diabetes Prevention and Management",
    slug: "diabetes-prevention-management",
    category: "Diabetes",
    excerpt: "Type 2 diabetes is largely preventable. Learn about risk factors, prevention strategies, and management approaches.",
    content: "Type 2 diabetes affects millions of people worldwide, but many cases are preventable through lifestyle modifications. Key prevention strategies include maintaining a healthy weight, eating a balanced diet rich in whole grains and vegetables, engaging in regular physical activity, and monitoring blood sugar levels if you have risk factors. For those already diagnosed, effective management involves a combination of diet, exercise, medication adherence, and regular monitoring. Diabetes self-management education programs can provide valuable knowledge and skills for living well with diabetes.",
    author: "Dr. Amara Johnson",
    date: "2025-07-28",
    readTime: "5 min read",
    tags: ["diabetes", "prevention", "management", "lifestyle"],
  },
  {
    id: "a5",
    title: "Women's Health: Essential Screenings by Age",
    slug: "womens-health-essential-screenings",
    category: "Women's Health",
    excerpt: "Regular health screenings are crucial for early detection. Learn which screenings are recommended at every age.",
    content: "Preventive health screenings are vital for early detection and treatment of various conditions. For women, recommended screenings vary by age: In your 20s, start with blood pressure checks and STI screening. In your 30s, add thyroid screening and diabetes testing. From 40 onwards, mammograms become important. Pap smears should begin at 21. From 45, colon cancer screening is recommended. Bone density scans become important around 65. Regular eye exams, skin checks, and dental visits should be part of your routine healthcare throughout life.",
    author: "Dr. Elena Rodriguez",
    date: "2025-07-20",
    readTime: "7 min read",
    tags: ["women's health", "screening", "prevention", "aging"],
  },
  {
    id: "a6",
    title: "Protecting Your Child's Health",
    slug: "protecting-child-health",
    category: "Children's Health",
    excerpt: "From vaccinations to nutrition, learn how to keep your child healthy and thriving.",
    content: "A child's health is the foundation for their lifelong well-being. Key aspects of protecting your child's health include staying current with vaccinations, providing nutritious meals, ensuring regular physical activity, maintaining consistent sleep schedules, and scheduling regular pediatric check-ups. Mental health is equally important — watch for signs of anxiety, depression, or behavioral changes and seek help early. Teaching good hygiene habits, limiting screen time, and creating a safe environment are also essential components of comprehensive child health care.",
    author: "Dr. Priya Sharma",
    date: "2025-07-15",
    readTime: "5 min read",
    tags: ["children", "pediatrics", "vaccination", "nutrition"],
  },
  {
    id: "a7",
    title: "Understanding Blood Pressure",
    slug: "understanding-blood-pressure",
    category: "Heart Health",
    excerpt: "High blood pressure is a major risk factor for heart disease and stroke. Learn what the numbers mean and how to manage them.",
    content: "Blood pressure measures the force of blood pushing against artery walls. Normal blood pressure is below 120/80 mmHg. Elevated readings between 120-129/less than 80 indicate a risk of developing hypertension. Stage 1 hypertension is 130-139/80-89, and Stage 2 is 140+/90+. Managing blood pressure involves dietary changes (reducing sodium, increasing potassium), regular exercise, maintaining healthy weight, limiting alcohol, managing stress, and taking prescribed medications as directed.",
    author: "Dr. David Okafor",
    date: "2025-07-10",
    readTime: "4 min read",
    tags: ["blood pressure", "heart health", "prevention", "cardiovascular"],
  },
  {
    id: "a8",
    title: "Men's Health: Don't Skip Your Checkups",
    slug: "mens-health-checkups",
    category: "Men's Health",
    excerpt: "Men are less likely to visit doctors regularly. Learn why preventive checkups are crucial for men's health.",
    content: "Studies show that men are significantly less likely than women to visit a doctor for preventive care. This gap in healthcare utilization contributes to later diagnoses and poorer outcomes for many conditions. Key screenings for men include blood pressure checks starting at age 18, cholesterol testing starting at 20, diabetes screening at 45 (earlier if at risk), prostate cancer screening discussions with your doctor, colorectal cancer screening at 45, and testicular self-exams. Mental health check-ins are equally important, as men are less likely to seek help for depression and anxiety.",
    author: "Dr. James Wright",
    date: "2025-07-05",
    readTime: "5 min read",
    tags: ["men's health", "screening", "prevention", "checkups"],
  },
  {
    id: "a9",
    title: "The Role of Sleep in Health",
    slug: "role-of-sleep-health",
    category: "Preventive Care",
    excerpt: "Quality sleep is fundamental to health. Learn about the importance of sleep and tips for better rest.",
    content: "Sleep is a critical pillar of health, alongside nutrition and exercise. Adults need 7-9 hours of quality sleep per night. Chronic sleep deprivation is linked to increased risk of obesity, diabetes, cardiovascular disease, depression, and weakened immunity. Good sleep hygiene includes maintaining a consistent sleep schedule, creating a dark and cool sleeping environment, limiting caffeine and screen time before bed, and establishing a relaxing bedtime routine. If you consistently struggle with sleep, consult a healthcare provider as sleep disorders like sleep apnea may require treatment.",
    author: "Dr. Sarah Mitchell",
    date: "2025-06-28",
    readTime: "4 min read",
    tags: ["sleep", "wellness", "prevention", "lifestyle"],
  },
  {
    id: "a10",
    title: "Building Strong Bones: A Guide to Bone Health",
    slug: "building-strong-bones",
    category: "Preventive Care",
    excerpt: "Bone health is important at every age. Learn how to maintain strong bones throughout your life.",
    content: "Peak bone mass is reached by the late 20s, after which bone density gradually decreases. To build and maintain strong bones, focus on adequate calcium intake (1000-1200mg daily), vitamin D (600-800 IU daily), weight-bearing exercise, and resistance training. Avoid smoking and limit alcohol consumption, as both can weaken bones. Women are at higher risk of osteoporosis after menopause. Regular bone density testing is recommended for women over 65 and men over 70, or earlier if risk factors are present.",
    author: "Dr. Michael Chen",
    date: "2025-06-20",
    readTime: "5 min read",
    tags: ["bones", "osteoporosis", "calcium", "exercise"],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function searchArticles(query: string): Article[] {
  const q = query.toLowerCase();
  return articles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q)) ||
      a.content.toLowerCase().includes(q)
  );
}
