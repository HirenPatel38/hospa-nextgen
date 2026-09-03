// ========================================
// HOSPA Diseases Data
// ========================================

export interface Disease {
  id: string;
  name: string;
  slug: string;
  category: string;
  departmentId: string;
  overview: string;
  causes: string[];
  symptoms: string[];
  riskFactors: string[];
  complications: string[];
  diagnosis: string[];
  treatment: string[];
  prevention: string[];
  whenToSeekHelp: string;
  faqs: { question: string; answer: string }[];
}

export const diseaseCategories = [
  "Cardiovascular",
  "Neurological",
  "Respiratory",
  "Digestive",
  "Endocrine",
  "Musculoskeletal",
  "Renal",
  "Dermatological",
  "Women's Health",
  "Men's Health",
  "Pediatric",
  "Oncology",
  "Infectious Diseases",
] as const;

export type DiseaseCategory = (typeof diseaseCategories)[number];

export const diseases: Disease[] = [
  {
    id: "coronary-artery-disease",
    name: "Coronary Artery Disease",
    slug: "coronary-artery-disease",
    category: "Cardiovascular",
    departmentId: "cardiology",
    overview: "Coronary artery disease (CAD) is a condition where the major blood vessels that supply your heart with blood, oxygen and nutrients become damaged or diseased. Cholesterol-containing deposits (plaque) in your arteries and inflammation are usually to blame.",
    causes: ["Plaque buildup in coronary arteries", "Atherosclerosis", "Damage to arterial lining"],
    symptoms: ["Chest pain (angina)", "Shortness of breath", "Fatigue", "Heart palpitations", "Dizziness", "Nausea"],
    riskFactors: ["High blood pressure", "High cholesterol", "Diabetes", "Smoking", "Obesity", "Family history", "Age"],
    complications: ["Heart attack", "Heart failure", "Arrhythmias", "Cardiac arrest"],
    diagnosis: ["ECG", "Stress test", "Echocardiogram", "Coronary angiography", "Blood tests"],
    treatment: ["Lifestyle changes", "Medications (statins, aspirin, beta-blockers)", "Angioplasty and stenting", "Coronary artery bypass surgery", "Cardiac rehabilitation"],
    prevention: ["Heart-healthy diet", "Regular exercise", "Maintain healthy weight", "Don't smoke", "Manage blood pressure and cholesterol", "Control diabetes"],
    whenToSeekHelp: "Seek immediate medical attention if you experience chest pain, especially if it's new, persistent, or accompanied by shortness of breath, sweating, or nausea.",
    faqs: [
      { question: "Can CAD be reversed?", answer: "While CAD cannot be completely reversed, lifestyle changes and medications can slow progression and reduce symptoms. In some cases, aggressive lifestyle changes have shown regression of plaque." },
      { question: "Is CAD hereditary?", answer: "Genetic factors play a role. Having a family history of heart disease increases your risk, but lifestyle modifications can significantly reduce that risk." },
    ],
  },
  {
    id: "heart-failure",
    name: "Heart Failure",
    slug: "heart-failure",
    category: "Cardiovascular",
    departmentId: "cardiology",
    overview: "Heart failure occurs when the heart muscle doesn't pump blood as well as it should. It doesn't mean the heart has stopped working — it means the heart needs support to function effectively.",
    causes: ["Coronary artery disease", "High blood pressure", "Previous heart attack", "Damaged heart muscle", "Cardiomyopathy"],
    symptoms: ["Shortness of breath", "Swelling in legs/ankles", "Fatigue", "Rapid or irregular heartbeat", "Reduced exercise ability", "Persistent cough"],
    riskFactors: ["Age over 65", "High blood pressure", "Diabetes", "Obesity", "Previous heart attack"],
    complications: ["Kidney damage", "Liver damage", "Heart rhythm problems", "Fluid buildup in lungs"],
    diagnosis: ["Echocardiogram", "ECG", "Chest X-ray", "Blood tests (BNP)", "Cardiac MRI"],
    treatment: ["Medications (ACE inhibitors, beta-blockers, diuretics)", "Lifestyle modifications", "Implanted devices (pacemaker, ICD)", "Surgery in severe cases", "Heart transplant evaluation"],
    prevention: ["Control blood pressure", "Treat coronary artery disease", "Maintain healthy weight", "Regular exercise", "Limit sodium intake", "Avoid alcohol excess"],
    whenToSeekHelp: "Seek care if you notice increasing shortness of breath, weight gain of more than 2-3 pounds in a day, or swelling that worsens.",
    faqs: [
      { question: "Is heart failure curable?", answer: "Heart failure is typically a chronic condition that requires ongoing management. Treatment can significantly improve symptoms and quality of life." },
    ],
  },
  {
    id: "stroke",
    name: "Stroke",
    slug: "stroke",
    category: "Neurological",
    departmentId: "neurology",
    overview: "A stroke occurs when blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes, making prompt treatment critical.",
    causes: ["Blocked artery (ischemic stroke)", "Leaking or burst blood vessel (hemorrhagic stroke)", "Blood clot traveling to the brain"],
    symptoms: ["Sudden numbness or weakness (face, arm, leg)", "Confusion", "Trouble speaking", "Vision problems", "Sudden severe headache", "Difficulty walking", "Dizziness"],
    riskFactors: ["High blood pressure", "Smoking", "Diabetes", "Heart disease", "High cholesterol", "Obesity", "Age"],
    complications: ["Paralysis or weakness", "Speech difficulties", "Memory problems", "Emotional difficulties", "Pain", "Brain damage"],
    diagnosis: ["CT scan", "MRI", "Carotid ultrasound", "Blood tests", "ECG", "Cerebral angiogram"],
    treatment: ["Emergency thrombolysis (tPA for ischemic stroke)", "Mechanical thrombectomy", "Blood pressure management", "Surgery for hemorrhagic stroke", "Rehabilitation (physical, occupational, speech therapy)"],
    prevention: ["Control blood pressure", "Manage diabetes", "Don't smoke", "Maintain healthy weight", "Regular exercise", "Limit alcohol", "Manage atrial fibrillation"],
    whenToSeekHelp: "Remember BE FAST: Balance loss, Eyes vision changes, Face drooping, Arm weakness, Speech difficulty, Time to call emergency. Call immediately.",
    faqs: [
      { question: "What is a TIA (mini-stroke)?", answer: "A TIA (transient ischemic attack) produces stroke-like symptoms that resolve within minutes to hours. It's a warning sign — seek immediate medical attention as it may predict a full stroke." },
    ],
  },
  {
    id: "migraine",
    name: "Migraine",
    slug: "migraine",
    category: "Neurological",
    departmentId: "neurology",
    overview: "Migraine is a neurological condition that can cause severe throbbing pain, usually on one side of the head. It's often accompanied by nausea, vomiting, and sensitivity to light and sound.",
    causes: ["Abnormal brain activity affecting nerve signals, chemicals, and blood vessels", "Genetic factors", "Triggers vary by individual"],
    symptoms: ["Intense headache (often one-sided)", "Nausea and vomiting", "Sensitivity to light and sound", "Aura (visual disturbances)", "Throbbing or pulsing pain"],
    riskFactors: ["Family history", "Gender (more common in women)", "Hormonal changes", "Stress", "Certain foods", "Sleep changes"],
    complications: ["Chronic migraine", "Status migrainosus (prolonged attack)", "Medication overuse headache"],
    diagnosis: ["Clinical evaluation", "Neurological examination", "MRI (to rule out other causes)", "Headache diary"],
    treatment: ["Acute medications (triptans, NSAIDs)", "Preventive medications (beta-blockers, anti-seizure drugs)", "Botox injections", "CGRP inhibitors", "Lifestyle modifications", "Stress management"],
    prevention: ["Identify and avoid triggers", "Regular sleep schedule", "Stress management", "Regular exercise", "Stay hydrated", "Preventive medications"],
    whenToSeekHelp: "Seek medical attention for sudden severe headaches, headaches with fever and stiff neck, headaches after head injury, or headaches that worsen despite treatment.",
    faqs: [
      { question: "Can migraines be cured?", answer: "There is no cure for migraines, but effective treatments and lifestyle modifications can significantly reduce frequency and severity of attacks." },
    ],
  },
  {
    id: "asthma",
    name: "Asthma",
    slug: "asthma",
    category: "Respiratory",
    departmentId: "pulmonology",
    overview: "Asthma is a chronic condition in which the airways narrow and swell and may produce extra mucus. This can make breathing difficult and trigger coughing, wheezing, and shortness of breath.",
    causes: ["Inflammation and narrowing of airways", "Genetic factors", "Environmental triggers"],
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing (especially at night or early morning)", "Difficulty exercising"],
    riskFactors: ["Family history of asthma", "Allergies", "Exposure to air pollution", "Smoking", "Obesity", "Occupational exposures"],
    complications: ["Severe asthma attacks", "Sleep disturbances", "Reduced quality of life", "Airway remodeling", "Missed work/school"],
    diagnosis: ["Spirometry (lung function tests)", "Peak flow measurement", "Allergy testing", "Chest X-ray", "Blood tests"],
    treatment: ["Inhaled corticosteroids", "Long-acting bronchodilators", "Quick-relief inhalers (rescue)", "Biologic therapies", "Asthma action plan", "Avoiding triggers"],
    prevention: ["Identify and avoid triggers", "Take medications as prescribed", "Monitor symptoms", "Get annual flu vaccine", "Maintain healthy weight"],
    whenToSeekHelp: "Seek emergency care if your rescue inhaler doesn't provide relief, you're too breathless to speak or walk, or your lips/fingernails turn blue.",
    faqs: [
      { question: "Can children outgrow asthma?", answer: "Some children may see improvement as they grow older, but asthma typically doesn't go away completely. Proper management is essential throughout life." },
    ],
  },
  {
    id: "copd",
    name: "COPD",
    slug: "copd",
    category: "Respiratory",
    departmentId: "pulmonology",
    overview: "Chronic Obstructive Pulmonary Disease (COPD) is a chronic inflammatory lung disease that obstructs airflow from the lungs. It includes emphysema and chronic bronchitis.",
    causes: ["Long-term exposure to lung irritants", "Cigarette smoking (primary cause)", "Air pollution", "Occupational dust and chemicals"],
    symptoms: ["Chronic cough", "Shortness of breath", "Wheezing", "Chest tightness", "Frequent respiratory infections", "Fatigue", "Cyanosis"],
    riskFactors: ["Smoking", "Age over 40", "Long-term exposure to dust/chemicals", "Alpha-1 antitrypsin deficiency", "History of respiratory infections"],
    complications: ["Respiratory infections", "Heart problems", "Lung cancer", "Pulmonary hypertension", "Depression"],
    diagnosis: ["Spirometry", "Chest X-ray", "CT scan", "Arterial blood gas", "Pulse oximetry"],
    treatment: ["Bronchodilators", "Inhaled steroids", "Pulmonary rehabilitation", "Oxygen therapy", "Surgery (in severe cases)", "Vaccinations"],
    prevention: ["Don't smoke", "Avoid lung irritants", "Get vaccinated", "Regular exercise", "Healthy diet"],
    whenToSeekHelp: "If your symptoms worsen suddenly, your breathing becomes difficult, or you notice a change in sputum color, seek medical attention promptly.",
    faqs: [
      { question: "Is COPD reversible?", answer: "COPD is a chronic condition and lung damage cannot be fully reversed. However, treatment can slow progression, manage symptoms, and improve quality of life." },
    ],
  },
  {
    id: "fatty-liver-disease",
    name: "Fatty Liver Disease",
    slug: "fatty-liver-disease",
    category: "Digestive",
    departmentId: "gastroenterology",
    overview: "Fatty liver disease occurs when excess fat builds up in liver cells. It can progress from simple steatosis (fat accumulation) to non-alcoholic steatohepatitis (NASH), potentially leading to cirrhosis.",
    causes: ["Excess body weight", "Insulin resistance", "Metabolic syndrome", "Certain medications", "Rapid weight loss"],
    symptoms: ["Often asymptomatic in early stages", "Fatigue", "Abdominal discomfort", "Mild liver enzyme elevation"],
    riskFactors: ["Obesity", "Type 2 diabetes", "High cholesterol", "Metabolic syndrome", "Sedentary lifestyle"],
    complications: ["NASH (steatohepatitis)", "Liver fibrosis", "Cirrhosis", "Liver failure (rare)"],
    diagnosis: ["Blood tests (liver enzymes)", "Ultrasound", "FibroScan", "CT scan", "Liver biopsy (in select cases)"],
    treatment: ["Weight loss", "Dietary changes", "Regular exercise", "Control diabetes and cholesterol", "Avoid alcohol", "Medications for underlying conditions"],
    prevention: ["Maintain healthy weight", "Balanced diet", "Regular exercise", "Limit alcohol", "Manage metabolic conditions"],
    whenToSeekHelp: "If you notice unexplained fatigue, abdominal pain, or have risk factors, consult your healthcare provider for liver function assessment.",
    faqs: [
      { question: "Can fatty liver be reversed?", answer: "In early stages, fatty liver disease can often be reversed with lifestyle changes including weight loss, healthy diet, and regular exercise." },
    ],
  },
  {
    id: "type-2-diabetes",
    name: "Type 2 Diabetes",
    slug: "type-2-diabetes",
    category: "Endocrine",
    departmentId: "endocrinology",
    overview: "Type 2 diabetes is a chronic condition that affects the way the body processes blood sugar (glucose). The body either doesn't produce enough insulin or becomes resistant to insulin.",
    causes: ["Insulin resistance", "Pancreatic beta cell dysfunction", "Genetic factors", "Lifestyle factors"],
    symptoms: ["Increased thirst and urination", "Increased hunger", "Fatigue", "Blurred vision", "Slow-healing wounds", "Numbness in extremities"],
    riskFactors: ["Obesity", "Sedentary lifestyle", "Family history", "Age over 45", "Gestational diabetes history", "PCOS"],
    complications: ["Cardiovascular disease", "Neuropathy", "Nephropathy", "Retinopathy", "Foot problems", "Skin conditions"],
    diagnosis: ["Fasting blood glucose", "HbA1c test", "Oral glucose tolerance test", "Random blood glucose"],
    treatment: ["Lifestyle modifications (diet, exercise)", "Oral medications (metformin)", "Insulin therapy", "Blood sugar monitoring", "Diabetes self-management education"],
    prevention: ["Maintain healthy weight", "Regular physical activity", "Healthy diet", "Monitor blood sugar if at risk", "Control blood pressure and cholesterol"],
    whenToSeekHelp: "Seek medical care if you experience persistent symptoms of high blood sugar, or if your blood sugar remains uncontrolled despite treatment.",
    faqs: [
      { question: "Can type 2 diabetes be reversed?", answer: "Some people can achieve remission through significant weight loss, dietary changes, and exercise, particularly in the early stages. Long-term management is usually necessary." },
    ],
  },
  {
    id: "kidney-stones",
    name: "Kidney Stones",
    slug: "kidney-stones",
    category: "Renal",
    departmentId: "urology",
    overview: "Kidney stones are hard deposits made of minerals and salts that form inside the kidneys. They can affect any part of your urinary tract and can be very painful when they move.",
    causes: ["Concentration of minerals in urine", "Dehydration", "Diet high in sodium and protein", "Obesity", "Genetic predisposition"],
    symptoms: ["Severe back/side pain", "Blood in urine", "Nausea and vomiting", "Frequent urination", "Pain during urination", "Fever (if infection)"],
    riskFactors: ["Dehydration", "High-sodium diet", "Family history", "Obesity", "Previous kidney stones", "Certain medications"],
    complications: ["Urinary tract infection", "Kidney damage", "Ureteral obstruction", "Recurrent stones"],
    diagnosis: ["CT scan", "Ultrasound", "Urinalysis", "Blood tests", "X-ray"],
    treatment: ["Pain management", "Increased fluid intake", "Medical expulsive therapy", "Lithotripsy (shock wave)", "Ureteroscopy", "Surgical removal (for large stones)"],
    prevention: ["Drink plenty of water", "Reduce sodium intake", "Moderate protein intake", "Maintain healthy weight", "Limit oxalate-rich foods", "Medications (if recurrent)"],
    whenToSeekHelp: "Seek emergency care for severe pain, fever with kidney pain, persistent nausea/vomiting, or blood in urine.",
    faqs: [
      { question: "Are kidney stones dangerous?", answer: "Most kidney stones pass on their own, but they can cause severe pain and complications like infection or kidney damage. Large stones or those blocking the urinary tract require medical intervention." },
    ],
  },
  {
    id: "chronic-kidney-disease",
    name: "Chronic Kidney Disease",
    slug: "chronic-kidney-disease",
    category: "Renal",
    departmentId: "nephrology",
    overview: "Chronic kidney disease (CKD) is a condition characterized by a gradual loss of kidney function over time. The kidneys filter waste and excess fluids from the blood, which are then excreted in urine.",
    causes: ["Diabetes", "High blood pressure", "Glomerulonephritis", "Polycystic kidney disease", "Prolonged urinary tract obstruction"],
    symptoms: ["Often no early symptoms", "Fatigue", "Swelling (edema)", "Changes in urination", "Nausea", "Loss of appetite", "Muscle cramps"],
    riskFactors: ["Diabetes", "Hypertension", "Family history of kidney disease", "Age over 60", "Obesity", "Smoking"],
    complications: ["End-stage kidney disease", "Cardiovascular disease", "Anemia", "Bone disease", "Electrolyte imbalances"],
    diagnosis: ["Blood tests (creatinine, GFR)", "Urinalysis", "Urine albumin test", "Kidney ultrasound", "Kidney biopsy"],
    treatment: ["Blood pressure management", "Blood sugar control", "Dietary modifications", "Medications to slow progression", "Dialysis (in advanced stages)", "Kidney transplant evaluation"],
    prevention: ["Control diabetes and blood pressure", "Healthy diet", "Regular exercise", "Avoid NSAIDs", "Don't smoke", "Maintain healthy weight"],
    whenToSeekHelp: "If you have risk factors for CKD, regular screening is important. Seek care for persistent swelling, changes in urination, or unexplained fatigue.",
    faqs: [
      { question: "Can kidney disease be stopped?", answer: "Treatment can slow the progression of CKD and manage complications. Early detection and management of underlying conditions are key to preserving kidney function." },
    ],
  },
  {
    id: "gastroesophageal-reflux",
    name: "GERD (Acid Reflux)",
    slug: "gastroesophageal-reflux",
    category: "Digestive",
    departmentId: "gastroenterology",
    overview: "Gastroesophageal Reflux Disease (GERD) is a chronic digestive disorder in which stomach acid frequently flows back into the esophagus, irritating its lining.",
    causes: ["Weakened lower esophageal sphincter", "Hiatal hernia", "Obesity", "Pregnancy", "Certain foods and beverages"],
    symptoms: ["Heartburn", "Regurgitation", "Chest pain", "Difficulty swallowing", "Chronic cough", "Hoarse voice"],
    riskFactors: ["Obesity", "Pregnancy", "Smoking", "Hiatal hernia", "Certain medications", "Large meals"],
    complications: ["Esophagitis", "Barrett's esophagus", "Esophageal stricture", "Dental problems"],
    diagnosis: ["Upper endoscopy", "pH monitoring", "Esophageal manometry", "Barium swallow"],
    treatment: ["Lifestyle modifications", "Antacids", "H2 blockers", "Proton pump inhibitors (PPIs)", "Surgery (fundoplication) in severe cases"],
    prevention: ["Avoid trigger foods", "Eat smaller meals", "Don't lie down after eating", "Elevate head of bed", "Maintain healthy weight", "Limit alcohol and caffeine"],
    whenToSeekHelp: "If you experience persistent heartburn more than twice a week, difficulty swallowing, unexplained weight loss, or vomiting blood, consult a healthcare provider.",
    faqs: [
      { question: "Is GERD a lifelong condition?", answer: "GERD is often a chronic condition that requires long-term management. However, lifestyle changes and medications can effectively control symptoms in most people." },
    ],
  },
  {
    id: "gastritis",
    name: "Gastritis",
    slug: "gastritis",
    category: "Digestive",
    departmentId: "gastroenterology",
    overview: "Gastritis is inflammation of the stomach lining. It can be caused by infection, regular use of certain pain relievers, excessive alcohol consumption, or stress.",
    causes: ["H. pylori infection", "NSAID use", "Excessive alcohol", "Stress", "Autoimmune conditions"],
    symptoms: ["Abdominal pain or burning", "Nausea", "Vomiting", "Bloating", "Loss of appetite", "Hiccups"],
    riskFactors: ["H. pylori infection", "Regular NSAID use", "Excessive alcohol", "Stress", "Age"],
    complications: ["Stomach ulcers", "Stomach bleeding", "Stomach cancer (in some cases)"],
    diagnosis: ["Endoscopy", "H. pylori testing", "Blood tests", "Stool tests"],
    treatment: ["Antacids", "H2 blockers", "Proton pump inhibitors", "Antibiotics (for H. pylori)", "Avoiding irritants"],
    prevention: ["Limit alcohol", "Avoid excessive NSAIDs", "Manage stress", "Treat H. pylori infection", "Eat a balanced diet"],
    whenToSeekHelp: "Seek care for persistent abdominal pain, vomiting blood, black stools, or symptoms lasting more than a few days.",
    faqs: [],
  },
  {
    id: "osteoarthritis",
    name: "Osteoarthritis",
    slug: "osteoarthritis",
    category: "Musculoskeletal",
    departmentId: "orthopedics",
    overview: "Osteoarthritis is the most common form of arthritis, occurring when the protective cartilage that cushions the ends of your bones wears down over time.",
    causes: ["Wear and tear on joints", "Aging", "Joint injury", "Obesity", "Genetics"],
    symptoms: ["Joint pain during/after movement", "Joint stiffness after inactivity", "Loss of flexibility", "Grating sensation", "Bone spurs", "Swelling"],
    riskFactors: ["Age", "Obesity", "Joint injuries", "Repetitive stress", "Family history", "Female gender"],
    complications: ["Chronic pain", "Disability", "Joint deformity", "Reduced quality of life"],
    diagnosis: ["Physical examination", "X-ray", "MRI", "Blood tests (to rule out other types)"],
    treatment: ["Physical therapy", "Pain medications", "Joint injections", "Weight management", "Joint replacement surgery (in severe cases)", "Occupational therapy"],
    prevention: ["Maintain healthy weight", "Stay active", "Protect joints from injury", "Strengthen muscles around joints"],
    whenToSeekHelp: "If joint pain interferes with daily activities or doesn't improve with over-the-counter treatments, consult a healthcare provider.",
    faqs: [
      { question: "Can osteoarthritis be reversed?", answer: "Currently, there is no way to reverse joint damage from osteoarthritis. However, treatments can effectively manage pain and improve function." },
    ],
  },
  {
    id: "hypertension",
    name: "Hypertension",
    slug: "hypertension",
    category: "Cardiovascular",
    departmentId: "cardiology",
    overview: "Hypertension (high blood pressure) is a common condition where the force of blood against artery walls is consistently too high. It's often called the 'silent killer' because it typically has no symptoms.",
    causes: ["Often no single cause", "Genetics", "Lifestyle factors", "Underlying health conditions"],
    symptoms: ["Usually asymptomatic", "Headaches (severe cases)", "Shortness of breath", "Nosebleeds (severe cases)", "Dizziness"],
    riskFactors: ["Age", "Family history", "Obesity", "Sedentary lifestyle", "High sodium diet", "Smoking", "Excessive alcohol", "Stress"],
    complications: ["Heart attack", "Stroke", "Heart failure", "Kidney disease", "Vision loss", "Peripheral artery disease"],
    diagnosis: ["Blood pressure monitoring", "Blood tests", "Urinalysis", "Echocardiogram", "ECG"],
    treatment: ["Lifestyle changes", "Diuretics", "ACE inhibitors", "ARBs", "Calcium channel blockers", "Beta-blockers"],
    prevention: ["Healthy diet (DASH diet)", "Regular exercise", "Maintain healthy weight", "Limit sodium", "Limit alcohol", "Don't smoke", "Manage stress"],
    whenToSeekHelp: "If your blood pressure consistently reads above 130/80 mmHg, consult a healthcare provider. Seek emergency care for readings above 180/120 mmHg with symptoms.",
    faqs: [
      { question: "Do I need medication for high blood pressure?", answer: "Medication depends on your blood pressure level and overall risk. Lifestyle changes are always recommended. Your doctor will determine if medication is necessary." },
    ],
  },
  {
    id: "breast-cancer",
    name: "Breast Cancer",
    slug: "breast-cancer",
    category: "Oncology",
    departmentId: "oncology",
    overview: "Breast cancer is a disease in which cells in the breast grow out of control. There are different kinds of breast cancer, depending on which cells in the breast turn cancerous.",
    causes: ["Genetic mutations (BRCA1, BRCA2)", "Hormonal factors", "Lifestyle factors", "Environmental factors"],
    symptoms: ["New lump in breast", "Change in breast shape", "Skin dimpling", "Nipple discharge", "Nipple retraction", "Swollen lymph nodes"],
    riskFactors: ["Age", "Family history", "Genetic mutations", "Hormone replacement therapy", "Obesity", "Alcohol use", "Dense breast tissue"],
    complications: ["Metastasis to other organs", "Lymphedema", "Treatment side effects"],
    diagnosis: ["Mammogram", "Ultrasound", "MRI", "Biopsy", "Blood tests"],
    treatment: ["Surgery (lumpectomy, mastectomy)", "Chemotherapy", "Radiation therapy", "Hormone therapy", "Targeted therapy", "Immunotherapy"],
    prevention: ["Regular mammograms", "Breast self-exams", "Maintain healthy weight", "Exercise regularly", "Limit alcohol", "Genetic counseling (if high risk)"],
    whenToSeekHelp: "If you discover a breast lump, notice changes in breast appearance, or have a family history, consult a healthcare provider promptly.",
    faqs: [
      { question: "What is the survival rate for breast cancer?", answer: "Survival rates vary based on stage at diagnosis, type, and other factors. Early detection significantly improves outcomes. Consult with your oncologist for specific information." },
    ],
  },
  {
    id: "diabetes-mellitus",
    name: "Diabetes Mellitus",
    slug: "diabetes-mellitus",
    category: "Endocrine",
    departmentId: "endocrinology",
    overview: "Diabetes mellitus is a group of metabolic diseases characterized by high blood sugar levels over a prolonged period. It results from defects in insulin secretion, insulin action, or both.",
    causes: ["Autoimmune destruction of beta cells (Type 1)", "Insulin resistance (Type 2)", "Gestational hormonal changes", "Genetic factors"],
    symptoms: ["Increased thirst", "Frequent urination", "Extreme hunger", "Unexplained weight loss", "Fatigue", "Blurred vision", "Slow-healing wounds"],
    riskFactors: ["Obesity", "Sedentary lifestyle", "Family history", "Age", "Ethnicity", "Gestational diabetes history"],
    complications: ["Cardiovascular disease", "Neuropathy", "Nephropathy", "Retinopathy", "Foot ulcers", "Diabetic ketoacidosis"],
    diagnosis: ["Fasting glucose test", "HbA1c", "Oral glucose tolerance test", "Random glucose"],
    treatment: ["Lifestyle changes", "Oral medications", "Insulin therapy", "Blood glucose monitoring", "Diabetes education"],
    prevention: ["Healthy diet", "Regular exercise", "Maintain healthy weight", "Monitor blood sugar if at risk", "Manage other risk factors"],
    whenToSeekHelp: "If you notice persistent symptoms of high or low blood sugar, or if your blood sugar is consistently outside your target range, contact your healthcare provider.",
    faqs: [],
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    slug: "psoriasis",
    category: "Dermatological",
    departmentId: "dermatology",
    overview: "Psoriasis is a chronic skin condition that causes rapid skin cell buildup, resulting in scaling on the skin surface. It's an immune-mediated disease that speeds up skin cell turnover.",
    causes: ["Autoimmune response", "Genetic factors", "Environmental triggers"],
    symptoms: ["Red patches with thick silvery scales", "Dry, cracked skin that may bleed", "Itching, burning", "Stiff and swollen joints", "Thickened nails"],
    riskFactors: ["Family history", "Stress", "Infections", "Certain medications", "Smoking", "Obesity"],
    complications: ["Psoriatic arthritis", "Eye problems", "Metabolic syndrome", "Depression", "Cardiovascular disease"],
    diagnosis: ["Physical examination", "Skin biopsy", "Assessment of family history"],
    treatment: ["Topical treatments (corticosteroids, vitamin D analogues)", "Phototherapy", "Systemic medications", "Biologics", "Lifestyle modifications"],
    prevention: ["Avoid triggers", "Manage stress", "Moisturize regularly", "Limit alcohol", "Don't smoke", "Maintain healthy weight"],
    whenToSeekHelp: "If over-the-counter treatments aren't effective, or if psoriasis is affecting your quality of life, see a dermatologist.",
    faqs: [
      { question: "Is psoriasis contagious?", answer: "No, psoriasis is not contagious. It's an autoimmune condition that cannot be spread through contact." },
    ],
  },
  {
    id: "peptic-ulcer",
    name: "Peptic Ulcer Disease",
    slug: "peptic-ulcer",
    category: "Digestive",
    departmentId: "gastroenterology",
    overview: "Peptic ulcers are open sores that develop on the inside lining of your stomach and the upper portion of your small intestine. The most common cause is infection with H. pylori bacteria or regular use of NSAIDs.",
    causes: ["H. pylori infection", "Regular use of NSAIDs", "Excessive alcohol consumption", "Smoking", "Stress"],
    symptoms: ["Burning stomach pain", "Nausea", "Vomiting", "Bloating", "Heartburn", "Changes in appetite"],
    riskFactors: ["H. pylori infection", "NSAID use", "Smoking", "Alcohol", "Age over 60", "Stress"],
    complications: ["Bleeding", "Perforation", "Obstruction", "Peritonitis"],
    diagnosis: ["Upper endoscopy", "H. pylori testing (breath, stool, blood test)", "CT scan"],
    treatment: ["Antibiotics (for H. pylori)", "Proton pump inhibitors", "H2 blockers", "Avoiding NSAIDs", "Lifestyle changes", "Surgery (in complicated cases)"],
    prevention: ["Avoid excessive NSAIDs", "Limit alcohol", "Don't smoke", "Manage stress", "Treat H. pylori infection"],
    whenToSeekHelp: "Seek immediate care for severe abdominal pain, vomiting blood, black/tarry stools, or sudden worsening of symptoms.",
    faqs: [],
  },
];

export function getDiseaseBySlug(slug: string): Disease | undefined {
  return diseases.find((d) => d.slug === slug);
}

export function getDiseasesByCategory(category: string): Disease[] {
  return diseases.filter((d) => d.category === category);
}

export function searchDiseases(query: string): Disease[] {
  const q = query.toLowerCase();
  return diseases.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q) ||
      d.symptoms.some((s) => s.toLowerCase().includes(q)) ||
      d.overview.toLowerCase().includes(q)
  );
}
