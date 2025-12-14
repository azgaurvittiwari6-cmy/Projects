// Medical Data for Body Parts
const medicalData = {
    brain: {
        name: "Brain",
        icon: "🧠",
        description: "The brain is the control center of the nervous system, responsible for thoughts, memory, emotions, and motor functions.",
        diseases: [
            {
                name: "Alzheimer's Disease",
                reaction: "Progressive memory loss, confusion, and cognitive decline. Brain cells deteriorate, leading to shrinkage of brain tissue and accumulation of abnormal proteins.",
                symptoms: ["Memory loss", "Confusion", "Difficulty speaking", "Mood changes", "Disorientation"]
            },
            {
                name: "Stroke",
                reaction: "Blood flow to part of the brain is blocked or a blood vessel bursts. Brain cells die rapidly without oxygen, causing sudden neurological symptoms.",
                symptoms: ["Sudden numbness", "Confusion", "Trouble speaking", "Severe headache", "Loss of balance"]
            },
            {
                name: "Migraine",
                reaction: "Abnormal brain activity causes temporary changes in nerve signals, chemicals, and blood flow in the brain, resulting in severe headaches.",
                symptoms: ["Intense headache", "Nausea", "Light sensitivity", "Visual disturbances", "Throbbing pain"]
            }
        ]
    },
    heart: {
        name: "Heart",
        icon: "❤️",
        description: "The heart is a muscular organ that pumps blood throughout the body, delivering oxygen and nutrients to tissues.",
        diseases: [
            {
                name: "Coronary Artery Disease",
                reaction: "Plaque builds up in coronary arteries, narrowing them and reducing blood flow to the heart muscle. This can cause chest pain and heart attacks.",
                symptoms: ["Chest pain", "Shortness of breath", "Fatigue", "Irregular heartbeat", "Weakness"]
            },
            {
                name: "Heart Failure",
                reaction: "The heart muscle weakens and cannot pump blood efficiently. Fluid backs up into lungs and other tissues, causing swelling and breathing difficulties.",
                symptoms: ["Shortness of breath", "Fatigue", "Swollen legs", "Rapid heartbeat", "Persistent cough"]
            },
            {
                name: "Arrhythmia",
                reaction: "Electrical signals in the heart malfunction, causing irregular heartbeats. The heart may beat too fast, too slow, or irregularly.",
                symptoms: ["Palpitations", "Dizziness", "Chest discomfort", "Shortness of breath", "Fainting"]
            }
        ]
    },
    lungs: {
        name: "Lungs",
        icon: "🫁",
        description: "The lungs are respiratory organs that take in oxygen from the air and expel carbon dioxide from the body.",
        diseases: [
            {
                name: "Asthma",
                reaction: "Airways become inflamed and narrow, muscles around them tighten, and excess mucus is produced, making breathing difficult.",
                symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Coughing", "Difficulty breathing"]
            },
            {
                name: "Pneumonia",
                reaction: "Infection causes air sacs in lungs to fill with fluid or pus, reducing oxygen absorption and causing inflammation.",
                symptoms: ["Cough with phlegm", "Fever", "Chest pain", "Shortness of breath", "Fatigue"]
            },
            {
                name: "COPD",
                reaction: "Chronic inflammation damages airways and alveoli, making it progressively harder to breathe. Airflow becomes limited.",
                symptoms: ["Chronic cough", "Shortness of breath", "Wheezing", "Chest tightness", "Frequent infections"]
            }
        ]
    },
    liver: {
        name: "Liver",
        icon: "🫀",
        description: "The liver processes nutrients, filters blood, produces bile for digestion, and removes toxins from the body.",
        diseases: [
            {
                name: "Hepatitis",
                reaction: "Viral infection or toxins cause liver inflammation. Liver cells become damaged, affecting the organ's ability to function properly.",
                symptoms: ["Jaundice", "Fatigue", "Abdominal pain", "Dark urine", "Loss of appetite"]
            },
            {
                name: "Cirrhosis",
                reaction: "Chronic damage causes scar tissue to replace healthy liver tissue, disrupting liver function and blood flow through the organ.",
                symptoms: ["Fatigue", "Easy bruising", "Swelling", "Jaundice", "Confusion"]
            },
            {
                name: "Fatty Liver Disease",
                reaction: "Excess fat accumulates in liver cells, causing inflammation and potential scarring. This can progress to more serious liver damage.",
                symptoms: ["Fatigue", "Abdominal discomfort", "Weakness", "Often asymptomatic", "Enlarged liver"]
            }
        ]
    },
    stomach: {
        name: "Stomach",
        icon: "🫃",
        description: "The stomach is a muscular organ that breaks down food using acids and enzymes as part of the digestive process.",
        diseases: [
            {
                name: "Gastritis",
                reaction: "Stomach lining becomes inflamed and irritated, often due to bacteria or excessive acid. The protective mucus layer is damaged.",
                symptoms: ["Nausea", "Vomiting", "Upper abdominal pain", "Bloating", "Loss of appetite"]
            },
            {
                name: "Peptic Ulcer",
                reaction: "Open sores develop in the stomach lining when digestive acids eat away at the protective mucus layer, exposing tissue.",
                symptoms: ["Burning stomach pain", "Bloating", "Nausea", "Dark stools", "Vomiting"]
            },
            {
                name: "GERD",
                reaction: "Stomach acid frequently flows back into the esophagus, irritating its lining. The lower esophageal sphincter weakens or relaxes abnormally.",
                symptoms: ["Heartburn", "Chest pain", "Difficulty swallowing", "Regurgitation", "Chronic cough"]
            }
        ]
    },
    kidneys: {
        name: "Kidneys",
        icon: "🫘",
        description: "The kidneys filter waste and excess fluids from blood, regulate blood pressure, and produce hormones.",
        diseases: [
            {
                name: "Kidney Stones",
                reaction: "Hard mineral deposits form in kidneys when urine contains high levels of certain substances. They can block urine flow and cause severe pain.",
                symptoms: ["Severe pain", "Blood in urine", "Nausea", "Frequent urination", "Fever"]
            },
            {
                name: "Chronic Kidney Disease",
                reaction: "Kidneys gradually lose function over time. They become less able to filter waste, leading to buildup of toxins in the blood.",
                symptoms: ["Fatigue", "Swelling", "Changes in urination", "Nausea", "Loss of appetite"]
            },
            {
                name: "Urinary Tract Infection",
                reaction: "Bacteria enter the urinary system and multiply, causing inflammation and infection in the kidneys, bladder, or urethra.",
                symptoms: ["Burning urination", "Frequent urination", "Cloudy urine", "Pelvic pain", "Fever"]
            }
        ]
    },
    intestines: {
        name: "Intestines",
        icon: "🌀",
        description: "The intestines absorb nutrients and water from food and eliminate waste. They play a crucial role in digestion and immunity.",
        diseases: [
            {
                name: "Irritable Bowel Syndrome",
                reaction: "The intestinal muscles contract abnormally, causing cramping and altered bowel habits. The gut becomes hypersensitive to certain triggers.",
                symptoms: ["Abdominal pain", "Bloating", "Diarrhea", "Constipation", "Gas"]
            },
            {
                name: "Crohn's Disease",
                reaction: "Chronic inflammation affects the entire thickness of intestinal walls, causing ulcers and scarring. The immune system attacks the digestive tract.",
                symptoms: ["Abdominal pain", "Diarrhea", "Weight loss", "Fatigue", "Blood in stool"]
            },
            {
                name: "Celiac Disease",
                reaction: "Immune system reacts to gluten, damaging the small intestine lining and preventing nutrient absorption. Villi become flattened.",
                symptoms: ["Diarrhea", "Bloating", "Weight loss", "Fatigue", "Anemia"]
            }
        ]
    },
    bones: {
        name: "Bones",
        icon: "🦴",
        description: "Bones provide structure, protect organs, anchor muscles, and store calcium. They are living tissue that constantly renews.",
        diseases: [
            {
                name: "Osteoporosis",
                reaction: "Bones lose density and become porous and brittle. The rate of bone breakdown exceeds the rate of bone formation, weakening skeletal structure.",
                symptoms: ["Bone fractures", "Loss of height", "Stooped posture", "Back pain", "Often asymptomatic"]
            },
            {
                name: "Arthritis",
                reaction: "Joint inflammation causes cartilage to break down. Bones may rub together, causing pain, swelling, and reduced mobility.",
                symptoms: ["Joint pain", "Stiffness", "Swelling", "Reduced range of motion", "Redness"]
            },
            {
                name: "Bone Fracture",
                reaction: "Bone structure breaks due to trauma or weakness. The body initiates healing by forming a blood clot, then new bone tissue.",
                symptoms: ["Severe pain", "Swelling", "Bruising", "Deformity", "Inability to move"]
            }
        ]
    }
};

// DOM Elements
const bodyParts = document.querySelectorAll('.body-part');
const infoCard = document.getElementById('info-card');
const navButtons = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

// Navigation
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetView = button.dataset.view;

        // Update active button
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Update active view
        views.forEach(view => view.classList.remove('active'));
        document.getElementById(`${targetView}-view`).classList.add('active');
    });
});

// Body Part Interaction
let currentActivePart = null;

bodyParts.forEach(part => {
    part.addEventListener('click', () => {
        const partName = part.dataset.part;
        const data = medicalData[partName];

        // Remove active class from previous part
        if (currentActivePart) {
            currentActivePart.classList.remove('active');
        }

        // Add active class to clicked part
        part.classList.add('active');
        currentActivePart = part;

        // Update info card
        displayInfo(data);
    });

    // Add hover effect sound (visual feedback)
    part.addEventListener('mouseenter', () => {
        if (!part.classList.contains('active')) {
            part.style.transform = 'scale(1.05)';
        }
    });

    part.addEventListener('mouseleave', () => {
        if (!part.classList.contains('active')) {
            part.style.transform = 'scale(1)';
        }
    });
});

// Display Information
function displayInfo(data) {
    const diseaseItems = data.diseases.map(disease => `
        <div class="disease-item">
            <h5>${disease.name}</h5>
            <p><strong>How it affects the ${data.name}:</strong> ${disease.reaction}</p>
            <ul class="symptoms-list">
                ${disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    const content = `
        <div class="info-content">
            <div class="info-header">
                <div class="info-icon">${data.icon}</div>
                <div>
                    <h3>${data.name}</h3>
                </div>
            </div>
            <p class="info-description">${data.description}</p>
            <div class="disease-section">
                <h4>🔬 Common Diseases & Reactions</h4>
                <div class="disease-list">
                    ${diseaseItems}
                </div>
            </div>
        </div>
    `;

    infoCard.innerHTML = content;
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add entrance animation on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to background circles
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;

    const pulseCircles = document.querySelectorAll('.pulse-circle');
    pulseCircles.forEach((circle, index) => {
        const speed = (index + 1) * 20;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
});

console.log('🏥 Body Health Analyzer loaded successfully!');
console.log('Click on any body part to learn about diseases and their effects.');
