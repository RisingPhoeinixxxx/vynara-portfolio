const knowledgeBase = {

    about: [

        "who is vinaya",
        "tell me about vinaya",
        "introduce vinaya",
        "about vinaya",
        "who are you"
    ],

    education: [

        "education",
        "college",
        "degree",
        "university",
        "study",
        "where does she study",
        "student"
    ],

    skills: [

        "skills",
        "technologies",
        "technology",
        "programming",
        "python",
        "machine learning",
        "ai",
        "artificial intelligence",
        "flask",
        "cybersecurity",
        "javascript"
    ],

    goals: [

        "goal",
        "goals",
        "future",
        "career",
        "ambition",
        "dream"
    ],

    motivation: [

        "motivation",
        "motivates",
        "inspiration",
        "inspired"
    ],

    expectations: [

        "expectations",
        "company",
        "workplace",
        "job expectations"
    ],

    strengths: [

        "strength",
        "strengths",
        "best quality"
    ],

    weaknesses: [

        "weakness",
        "weaknesses"
    ],

    teamwork: [

        "team",
        "teamwork",
        "collaboration"
    ],

    leadership: [

        "leader",
        "leadership"
    ],

    certifications: [

        "certification",
        "certifications",
        "certificate",
        "sap",
        "anthropic",
        "claude"
    ],

    contact: [

        "contact",
        "email",
        "phone",
        "linkedin",
        "github"
    ],

    projects: [

        "project",
        "projects"
    ]
};



function searchKnowledge(question){

    const q =
    question.toLowerCase();



    if(match(q, knowledgeBase.about)){

        return profile.about;
    }



    if(match(q, knowledgeBase.education)){

        return `
Current Education:

${profile.education[0].degree}

${profile.education[0].specialization}

Institution:
${profile.education[0].institution}

Expected Graduation:
${profile.education[0].expectedGraduation}
        `;
    }



    if(match(q, knowledgeBase.skills)){

        return `
Skills:

${profile.skills.join(", ")}
        `;
    }



    if(match(q, knowledgeBase.goals)){

        return profile.goals;
    }



    if(match(q, knowledgeBase.motivation)){

        return profile.motivation;
    }



    if(match(q, knowledgeBase.expectations)){

        return interview.expectations;
    }



    if(match(q, knowledgeBase.strengths)){

        return interview.strengths;
    }



    if(match(q, knowledgeBase.weaknesses)){

        return interview.weaknesses;
    }



    if(match(q, knowledgeBase.teamwork)){

        return interview.teamwork;
    }



    if(match(q, knowledgeBase.leadership)){

        return interview.leadership;
    }



    if(match(q, knowledgeBase.contact)){

        return `
Email:
${profile.email}

Phone:
${profile.phone}

Location:
${profile.location}
        `;
    }



    if(match(q, knowledgeBase.certifications)){

        return `
Certifications Include:

• SAP Certified - SAP Fiori Application Developer

• Claude 101

• Claude Code 101

• AI Fluency Framework & Foundations

• AI Fluency for Nonprofits

• GitHub Copilot for Developers

• Generative AI Landscape

• Introduction to R

• Python for Machine Learning

• SAPUI5 Development Courses
        `;
    }



    if(q.includes("neural")){

        return projects.neuralos.description;
    }



    if(q.includes("witness")){

        return projects.witness.description;
    }



    if(q.includes("securenet")){

        return projects.securenet.description;
    }



    if(q.includes("bb-8") || q.includes("bb8")){

        return projects.bb8.description;
    }



    if(q.includes("acm")){

        return projects.acmmem.description;
    }



    if(q.includes("celeste")){

        return projects.celesteviel.description;
    }



    if(q.includes("league")){

        return projects.leagueanalytics.description;
    }



    if(match(q, knowledgeBase.projects)){

        return `
Projects:

• Neural-OS

• Witness

• SecureNet

• ACM-MEM

• BB-8 Droid

• CelesteViel

• League Analytics


Ask me about any specific project.
        `;
    }



    return null;
}



function match(question, keywords){

    return keywords.some(

        keyword =>

        question.includes(keyword)
    );
}



console.log(
    "Knowledge Base Loaded"
);