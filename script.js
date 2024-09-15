// Skills Section (using JavaScript Loops and Conditional Statements)
const skills = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Intermediate' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Advanced' }
];

const skillsContainer = document.getElementById('skills-list');

skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('col-md-4', 'skill-item');
    skillDiv.innerHTML = `<strong>${skill.name}</strong> - ${skill.level}`;
    if (skill.level === 'Expert') {
        skillDiv.style.borderLeftColor = 'green';
    }
    skillsContainer.appendChild(skillDiv);
});

// Experience Section (using JavaScript Functions and Arrow Functions)
const experiences = [
    { company: 'ABC Corp', role: 'Web Developer', years: 2 },
    { company: 'XYZ Ltd', role: 'Frontend Developer', years: 3 }
];

const experienceContainer = document.getElementById('experience-list');

const displayExperiences = () => {
    experiences.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.classList.add('col-md-6', 'experience-item');
        expDiv.innerHTML = `<strong>${exp.role}</strong> at ${exp.company} (${exp.years} years)`;
        experienceContainer.appendChild(expDiv);
    });
};

displayExperiences();

// Education Section (using Callback Functions and async/await)
const fetchEducationData = async (callback) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    callback(data.slice(0, 3));  // Limiting to 3 items
};

const displayEducation = (data) => {
    const educationContainer = document.getElementById('education-list');
    data.forEach(item => {
        const eduDiv = document.createElement('div');
        eduDiv.classList.add('col-md-6', 'education-item');
        eduDiv.innerHTML = `<strong>${item.title}</strong>`;
        educationContainer.appendChild(eduDiv);
    });
};

fetchEducationData(displayEducation);

// Contact Form (Fetch API and setTimeout)
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(() => {
        setTimeout(() => {
            alert('Message sent successfully!');
        }, 2000); // Simulating a delay
    });
});
