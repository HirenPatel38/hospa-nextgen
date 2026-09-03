// ========================================
// HOSPA Symptoms Data
// ========================================

export interface Symptom {
  id: string;
  name: string;
  icon: string;
  possibleCauses: {
    category: string;
    conditions: string[];
    urgency: "low" | "medium" | "high";
  }[];
  emergencyWarning: string;
}

export const symptoms: Symptom[] = [
  {
    id: "headache",
    name: "Headache",
    icon: "🧠",
    possibleCauses: [
      { category: "Neurological", conditions: ["Migraine", "Tension headache", "Cluster headache", "Sinus headache"], urgency: "low" },
      { category: "Cardiovascular", conditions: ["Hypertension (severe)"], urgency: "medium" },
      { category: "Other", conditions: ["Dehydration", "Eye strain", "Stress", "Sleep deprivation"], urgency: "low" },
    ],
    emergencyWarning: "Seek emergency care if headache is sudden and severe ('thunderclap'), accompanied by fever, stiff neck, confusion, seizures, or vision changes.",
  },
  {
    id: "fever",
    name: "Fever",
    icon: "🌡️",
    possibleCauses: [
      { category: "Infectious Diseases", conditions: ["Common cold", "Influenza", "COVID-19", "Urinary tract infection", "Pneumonia"], urgency: "medium" },
      { category: "Inflammatory", conditions: ["Autoimmune conditions"], urgency: "medium" },
      { category: "Other", conditions: ["Heat exhaustion", "Medication reaction"], urgency: "medium" },
    ],
    emergencyWarning: "Seek emergency care if fever is above 103°F (39.4°C), lasts more than 3 days, is accompanied by severe headache, rash, difficulty breathing, or confusion.",
  },
  {
    id: "cough",
    name: "Cough",
    icon: "🫁",
    possibleCauses: [
      { category: "Respiratory", conditions: ["Common cold", "Bronchitis", "Asthma", "Pneumonia", "COPD exacerbation"], urgency: "medium" },
      { category: "Allergic", conditions: ["Allergies", "Post-nasal drip"], urgency: "low" },
      { category: "Other", conditions: ["GERD", "ACE inhibitor medication side effect"], urgency: "low" },
    ],
    emergencyWarning: "Seek emergency care if you're coughing up blood, have severe difficulty breathing, chest pain, or high fever with cough.",
  },
  {
    id: "chest-discomfort",
    name: "Chest Discomfort",
    icon: "❤️",
    possibleCauses: [
      { category: "Cardiovascular", conditions: ["Angina", "Heart attack", "Pericarditis"], urgency: "high" },
      { category: "Respiratory", conditions: ["Pneumonia", "Pulmonary embolism", "Pleurisy"], urgency: "high" },
      { category: "Digestive", conditions: ["GERD", "Esophageal spasm"], urgency: "medium" },
      { category: "Musculoskeletal", conditions: ["Costochondritis", "Muscle strain"], urgency: "low" },
    ],
    emergencyWarning: "Call emergency services immediately if you experience sudden chest pain, especially with shortness of breath, sweating, nausea, or pain radiating to the arm, neck, or jaw.",
  },
  {
    id: "abdominal-pain",
    name: "Abdominal Pain",
    icon: "🩺",
    possibleCauses: [
      { category: "Digestive", conditions: ["Gastritis", "Appendicitis", "Gallstones", "Kidney stones", "Pancreatitis"], urgency: "medium" },
      { category: "Gynecological", conditions: ["Ovarian cyst", "Endometriosis", "Ectopic pregnancy"], urgency: "medium" },
      { category: "Other", conditions: ["Muscle strain", "Stress"], urgency: "low" },
    ],
    emergencyWarning: "Seek emergency care for severe, sudden abdominal pain, pain with fever and vomiting, abdominal rigidity, or blood in stool.",
  },
  {
    id: "back-pain",
    name: "Back Pain",
    icon: "🦴",
    possibleCauses: [
      { category: "Musculoskeletal", conditions: ["Muscle strain", "Herniated disc", "Spinal stenosis", "Degenerative disc disease"], urgency: "low" },
      { category: "Renal", conditions: ["Kidney stones", "Kidney infection"], urgency: "medium" },
      { category: "Other", conditions: ["Poor posture", "Stress", "Sciatica"], urgency: "low" },
    ],
    emergencyWarning: "Seek emergency care if back pain is accompanied by loss of bladder or bowel control, numbness in legs, or severe progressive pain.",
  },
  {
    id: "fatigue",
    name: "Fatigue",
    icon: "😴",
    possibleCauses: [
      { category: "Endocrine", conditions: ["Hypothyroidism", "Diabetes", "Adrenal insufficiency"], urgency: "medium" },
      { category: "Hematological", conditions: ["Anemia", "Vitamin B12 deficiency"], urgency: "medium" },
      { category: "Mental Health", conditions: ["Depression", "Anxiety", "Chronic fatigue syndrome"], urgency: "medium" },
      { category: "Other", conditions: ["Sleep disorders", "Dehydration", "Poor nutrition"], urgency: "low" },
    ],
    emergencyWarning: "Seek care if fatigue is severe, sudden, and unexplained, or accompanied by unexplained weight loss, fever, or shortness of breath.",
  },
  {
    id: "shortness-of-breath",
    name: "Shortness of Breath",
    icon: "💨",
    possibleCauses: [
      { category: "Respiratory", conditions: ["Asthma", "COPD", "Pneumonia", "Pulmonary embolism"], urgency: "high" },
      { category: "Cardiovascular", conditions: ["Heart failure", "Arrhythmia", "Heart attack"], urgency: "high" },
      { category: "Other", conditions: ["Anxiety/panic attack", "Obesity", "Anemia", "Deconditioning"], urgency: "medium" },
    ],
    emergencyWarning: "Seek emergency care if shortness of breath is sudden, severe, or occurs at rest. This could indicate a life-threatening condition.",
  },
  {
    id: "dizziness",
    name: "Dizziness",
    icon: "💫",
    possibleCauses: [
      { category: "Neurological", conditions: ["Vertigo", "Migraine", "Stroke", "Inner ear disorder"], urgency: "medium" },
      { category: "Cardiovascular", conditions: ["Low blood pressure", "Arrhythmia", "Dehydration"], urgency: "medium" },
      { category: "Other", conditions: ["Anemia", "Medication side effect", "Hypoglycemia"], urgency: "medium" },
    ],
    emergencyWarning: "Seek emergency care if dizziness is accompanied by severe headache, chest pain, numbness, difficulty speaking, or loss of consciousness.",
  },
  {
    id: "nausea",
    name: "Nausea",
    icon: "🤢",
    possibleCauses: [
      { category: "Digestive", conditions: ["Gastritis", "GERD", "Appendicitis", "Gallbladder disease", "Pancreatitis"], urgency: "medium" },
      { category: "Neurological", conditions: ["Migraine", "Vertigo", "Concussion"], urgency: "medium" },
      { category: "Other", conditions: ["Pregnancy", "Medication side effect", "Food poisoning", "Anxiety"], urgency: "low" },
    ],
    emergencyWarning: "Seek emergency care if nausea is persistent with severe abdominal pain, blood in vomit, signs of dehydration, or accompanied by chest pain.",
  },
];
