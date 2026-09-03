// ========================================
// HOSPA Anatomy Data - Organs & Body Systems
// ========================================

export interface Organ {
  id: string;
  name: string;
  system: BodySystem;
  description: string;
  function: string;
  conditions: string[];
  symptoms: string[];
  diagnosis: string[];
  treatment: string[];
  prevention: string[];
  color: string;
  position: [number, number, number];
  scale: [number, number, number];
  departmentId: string;
}

export type BodySystem =
  | "circulatory"
  | "respiratory"
  | "digestive"
  | "nervous"
  | "skeletal"
  | "muscular"
  | "urinary"
  | "endocrine"
  | "reproductive";

export interface BodySystemInfo {
  id: BodySystem;
  name: string;
  color: string;
  description: string;
}

export const bodySystems: BodySystemInfo[] = [
  { id: "circulatory", name: "Circulatory System", color: "#ef4444", description: "Transports blood throughout the body, delivering oxygen and nutrients." },
  { id: "respiratory", name: "Respiratory System", color: "#3b82f6", description: "Enables gas exchange — bringing oxygen in and removing carbon dioxide." },
  { id: "digestive", name: "Digestive System", color: "#f59e0b", description: "Breaks down food into nutrients the body can use for energy and repair." },
  { id: "nervous", name: "Nervous System", color: "#8b5cf6", description: "Controls body functions and communicates between the brain and body." },
  { id: "skeletal", name: "Skeletal System", color: "#e5e7eb", description: "Provides structural support, protection, and enables movement." },
  { id: "muscular", name: "Muscular System", color: "#ef4444", description: "Enables movement, maintains posture, and generates body heat." },
  { id: "urinary", name: "Urinary System", color: "#06b6d4", description: "Filters blood and removes waste through urine production." },
  { id: "endocrine", name: "Endocrine System", color: "#10b981", description: "Produces hormones that regulate metabolism, growth, and reproduction." },
  { id: "reproductive", name: "Reproductive System", color: "#ec4899", description: "Enables reproduction and production of hormones." },
];

export const organs: Organ[] = [
  // Circulatory
  {
    id: "heart",
    name: "Heart",
    system: "circulatory",
    description: "The heart is a muscular organ about the size of your fist, located slightly left of center in the chest. It pumps blood throughout the body via the circulatory system.",
    function: "Pumps oxygenated blood to the body's tissues and receives deoxygenated blood to send to the lungs. Beats approximately 100,000 times per day.",
    conditions: ["Coronary artery disease", "Heart failure", "Arrhythmia", "Heart valve disease", "Cardiomyopathy"],
    symptoms: ["Chest pain or discomfort", "Shortness of breath", "Fatigue", "Palpitations", "Swelling in legs", "Dizziness"],
    diagnosis: ["ECG/EKG", "Echocardiogram", "Stress test", "Coronary angiography", "Cardiac MRI", "Blood tests"],
    treatment: ["Medications (ACE inhibitors, beta-blockers, statins)", "Angioplasty and stenting", "Bypass surgery", "Pacemaker", "Heart transplant (in severe cases)", "Lifestyle modifications"],
    prevention: ["Heart-healthy diet", "Regular exercise", "Don't smoke", "Manage blood pressure and cholesterol", "Maintain healthy weight", "Limit alcohol"],
    color: "#dc2626",
    position: [0.1, 0.15, 0.3],
    scale: [0.15, 0.15, 0.15],
    departmentId: "cardiology",
  },
  // Respiratory
  {
    id: "lungs",
    name: "Lungs",
    system: "respiratory",
    description: "The lungs are a pair of spongy, air-filled organs located on either side of the chest. The primary function of the lungs is to transport oxygen from the atmosphere into the bloodstream.",
    function: "Facilitates gas exchange — oxygen enters the blood and carbon dioxide is removed. The right lung has three lobes and the left lung has two lobes.",
    conditions: ["Asthma", "COPD", "Pneumonia", "Lung cancer", "Pulmonary fibrosis", "Pulmonary embolism"],
    symptoms: ["Shortness of breath", "Chronic cough", "Wheezing", "Chest pain", "Coughing up blood", "Fatigue"],
    diagnosis: ["Chest X-ray", "CT scan", "Pulmonary function tests", "Bronchoscopy", "Arterial blood gas", "Pulse oximetry"],
    treatment: ["Bronchodilators", "Corticosteroids", "Oxygen therapy", "Pulmonary rehabilitation", "Surgery (in some cases)", "Antibiotics (for infections)"],
    prevention: ["Don't smoke", "Avoid secondhand smoke", "Get vaccinated (flu, pneumonia)", "Avoid air pollution", "Exercise regularly", "Practice good hand hygiene"],
    color: "#60a5fa",
    position: [0, 0.2, 0.25],
    scale: [0.35, 0.25, 0.2],
    departmentId: "pulmonology",
  },
  // Digestive
  {
    id: "stomach",
    name: "Stomach",
    system: "digestive",
    description: "The stomach is a J-shaped muscular organ in the upper abdomen. It receives food from the esophagus and begins the digestion process using acid and enzymes.",
    function: "Stores food, breaks it down using gastric acid and enzymes, and gradually releases partially digested food into the small intestine.",
    conditions: ["Gastritis", "Peptic ulcers", "GERD", "Gastric cancer", "Functional dyspepsia"],
    symptoms: ["Abdominal pain", "Nausea", "Vomiting", "Bloating", "Heartburn", "Loss of appetite", "Weight loss"],
    diagnosis: ["Upper endoscopy", "H. pylori testing", "Barium swallow", "CT scan", "Biopsy"],
    treatment: ["Antacids", "H2 blockers", "Proton pump inhibitors", "Antibiotics (for H. pylori)", "Surgery (in severe cases)", "Dietary changes"],
    prevention: ["Limit alcohol", "Avoid excessive NSAIDs", "Eat balanced meals", "Manage stress", "Don't smoke", "Treat H. pylori promptly"],
    color: "#f59e0b",
    position: [0.05, -0.1, 0.35],
    scale: [0.18, 0.12, 0.12],
    departmentId: "gastroenterology",
  },
  {
    id: "liver",
    name: "Liver",
    system: "digestive",
    description: "The liver is the largest internal organ, located in the upper right abdomen. It performs over 500 vital functions including detoxification, protein synthesis, and bile production.",
    function: "Detoxifies blood, produces bile for fat digestion, stores glycogen, synthesizes proteins, and metabolizes drugs and hormones.",
    conditions: ["Fatty liver disease", "Hepatitis", "Cirrhosis", "Liver cancer", "Hemochromatosis"],
    symptoms: ["Fatigue", "Abdominal pain", "Jaundice (yellowing of skin/eyes)", "Swelling", "Dark urine", "Nausea"],
    diagnosis: ["Blood tests (liver enzymes)", "Ultrasound", "CT scan", "MRI", "Liver biopsy", "FibroScan"],
    treatment: ["Medications for underlying condition", "Lifestyle modifications", "Antiviral therapy (for hepatitis)", "Liver transplant (in end-stage disease)"],
    prevention: ["Limit alcohol", "Maintain healthy weight", "Get vaccinated (hepatitis A & B)", "Use medications safely", "Practice safe hygiene"],
    color: "#b45309",
    position: [0.15, 0.0, 0.3],
    scale: [0.2, 0.12, 0.1],
    departmentId: "gastroenterology",
  },
  {
    id: "pancreas",
    name: "Pancreas",
    system: "digestive",
    description: "The pancreas is a glandular organ behind the stomach. It produces digestive enzymes and important hormones like insulin and glucagon.",
    function: "Produces digestive enzymes (exocrine function) and hormones that regulate blood sugar levels (endocrine function).",
    conditions: ["Pancreatitis", "Type 1 & Type 2 diabetes", "Pancreatic cancer", "Cystic fibrosis"],
    symptoms: ["Abdominal pain radiating to back", "Nausea", "Vomiting", "Weight loss", "High blood sugar", "Digestive problems"],
    diagnosis: ["Blood tests (amylase, lipase, glucose)", "CT scan", "MRI", "Endoscopic ultrasound", "Biopsy"],
    treatment: ["Pain management", "Insulin therapy", "Enzyme supplements", "Surgery", "Chemotherapy (for cancer)"],
    prevention: ["Don't smoke", "Maintain healthy weight", "Limit alcohol", "Healthy diet", "Regular exercise"],
    color: "#d97706",
    position: [0.05, -0.05, 0.25],
    scale: [0.2, 0.06, 0.06],
    departmentId: "gastroenterology",
  },
  {
    id: "small-intestine",
    name: "Small Intestine",
    system: "digestive",
    description: "The small intestine is a long, coiled tube where most digestion and nutrient absorption occurs. It is about 20 feet long in adults.",
    function: "Digests food and absorbs nutrients including vitamins, minerals, carbohydrates, fats, and proteins into the bloodstream.",
    conditions: ["Celiac disease", "Crohn's disease", "Small bowel obstruction", "Bacterial overgrowth", "Intestinal tumors"],
    symptoms: ["Abdominal cramping", "Diarrhea", "Weight loss", "Bloating", "Fatigue", "Malnutrition"],
    diagnosis: ["Endoscopy", "Capsule endoscopy", "CT scan", "Blood tests", "Stool tests"],
    treatment: ["Medications", "Dietary changes (gluten-free for celiac)", "Surgery (for obstruction)", "Antibiotics", "Nutritional supplements"],
    prevention: ["Balanced diet", "Avoid known food triggers", "Maintain hydration", "Regular exercise"],
    color: "#fbbf24",
    position: [0, -0.2, 0.3],
    scale: [0.3, 0.15, 0.1],
    departmentId: "gastroenterology",
  },
  {
    id: "large-intestine",
    name: "Large Intestine",
    system: "digestive",
    description: "The large intestine (colon) is the final section of the digestive tract. It absorbs water and electrolytes from remaining food matter and forms waste for elimination.",
    function: "Absorbs water and electrolytes, forms and stores stool, and houses beneficial gut bacteria.",
    conditions: ["Colorectal cancer", "Ulcerative colitis", "Crohn's disease", "Diverticulitis", "Irritable bowel syndrome"],
    symptoms: ["Changes in bowel habits", "Blood in stool", "Abdominal pain", "Bloating", "Fatigue", "Unexplained weight loss"],
    diagnosis: ["Colonoscopy", "Stool tests", "CT scan", "Biopsy"],
    treatment: ["Medications", "Dietary changes", "Surgery (for cancer or severe disease)", "Biologics (for IBD)"],
    prevention: ["High-fiber diet", "Regular exercise", "Regular screening colonoscopy (age 45+)", "Limit red/processed meats", "Maintain healthy weight"],
    color: "#d97706",
    position: [0, -0.3, 0.3],
    scale: [0.35, 0.08, 0.08],
    departmentId: "gastroenterology",
  },
  // Nervous
  {
    id: "brain",
    name: "Brain",
    system: "nervous",
    description: "The brain is the most complex organ in the body, located inside the skull. It controls thought, memory, emotion, motor skills, vision, breathing, temperature, and every process that regulates the body.",
    function: "Controls all body functions, processes sensory information, enables thought, memory, emotion, speech, and movement. Contains approximately 86 billion neurons.",
    conditions: ["Stroke", "Alzheimer's disease", "Parkinson's disease", "Epilepsy", "Brain tumors", "Migraine", "Multiple sclerosis"],
    symptoms: ["Headache", "Confusion", "Memory problems", "Difficulty speaking", "Numbness or weakness", "Seizures", "Vision changes"],
    diagnosis: ["CT scan", "MRI", "EEG", "Neurological examination", "Lumbar puncture", "PET scan"],
    treatment: ["Medications", "Surgery (for tumors, bleeding)", "Rehabilitation therapy", "Physical therapy", "Occupational therapy", "Speech therapy"],
    prevention: ["Wear helmets", "Control blood pressure and cholesterol", "Exercise regularly", "Stay mentally active", "Get adequate sleep", "Limit alcohol"],
    color: "#a78bfa",
    position: [0, 0.65, 0.1],
    scale: [0.25, 0.2, 0.22],
    departmentId: "neurology",
  },
  // Urinary
  {
    id: "kidneys",
    name: "Kidneys",
    system: "urinary",
    description: "The kidneys are a pair of bean-shaped organs located on either side of the spine, just below the rib cage. Each kidney is about the size of a fist and filters about 200 liters of blood daily.",
    function: "Filter waste products from blood, regulate fluid balance, produce urine, regulate blood pressure, and produce hormones for red blood cell production.",
    conditions: ["Kidney stones", "Chronic kidney disease", "Kidney infection (pyelonephritis)", "Glomerulonephritis", "Polycystic kidney disease", "Kidney cancer"],
    symptoms: ["Changes in urination", "Swelling (edema)", "Fatigue", "Back/flank pain", "Nausea", "High blood pressure"],
    diagnosis: ["Blood tests (creatinine, GFR)", "Urinalysis", "Kidney ultrasound", "CT scan", "Kidney biopsy"],
    treatment: ["Medications", "Lifestyle changes", "Dialysis (in advanced stages)", "Kidney transplant", "Antibiotics (for infection)"],
    prevention: ["Stay hydrated", "Limit sodium", "Maintain healthy weight", "Control blood pressure and diabetes", "Avoid excessive NSAIDs", "Regular checkups"],
    color: "#06b6d4",
    position: [0, -0.05, -0.2],
    scale: [0.22, 0.1, 0.08],
    departmentId: "nephrology",
  },
  // Endocrine
  {
    id: "thyroid",
    name: "Thyroid",
    system: "endocrine",
    description: "The thyroid is a butterfly-shaped gland located in the front of the neck. It produces hormones that regulate metabolism, growth, and development.",
    function: "Produces thyroid hormones (T3 and T4) that regulate metabolic rate, heart rate, body temperature, and growth.",
    conditions: ["Hypothyroidism", "Hyperthyroidism", "Thyroid nodules", "Thyroid cancer", "Goiter", "Hashimoto's thyroiditis"],
    symptoms: ["Fatigue", "Weight changes", "Temperature sensitivity", "Heart rate changes", "Swelling in neck", "Hair changes", "Mood changes"],
    diagnosis: ["Blood tests (TSH, T3, T4)", "Thyroid ultrasound", "Thyroid scan", "Fine needle aspiration biopsy"],
    treatment: ["Thyroid hormone replacement (for hypothyroidism)", "Anti-thyroid medications", "Radioactive iodine", "Surgery", "Regular monitoring"],
    prevention: ["Adequate iodine intake", "Regular checkups if at risk", "Report neck changes early"],
    color: "#10b981",
    position: [0, 0.5, 0.25],
    scale: [0.1, 0.06, 0.05],
    departmentId: "endocrinology",
  },
];

export function getOrganById(id: string): Organ | undefined {
  return organs.find((o) => o.id === id);
}

export function getOrgansBySystem(system: BodySystem): Organ[] {
  return organs.filter((o) => o.system === system);
}

export function searchOrgans(query: string): Organ[] {
  const q = query.toLowerCase();
  return organs.filter(
    (o) =>
      o.name.toLowerCase().includes(q) ||
      o.system.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q)
  );
}
