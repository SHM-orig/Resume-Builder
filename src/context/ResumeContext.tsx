import { createContext, useState, useEffect } from "react";

export const ResumeContext = createContext<any>(null);

export function ResumeProvider({ children }: any) {

const [general,setGeneral] = useState<any>(
JSON.parse(localStorage.getItem("general") || "{}")
);

const [experiences,setExperiences] = useState<any[]>(
JSON.parse(localStorage.getItem("experiences") || "[]")
);

const [projects,setProjects] = useState<any[]>(
JSON.parse(localStorage.getItem("projects") || "[]")
);

const [education,setEducation] = useState<any[]>(
JSON.parse(localStorage.getItem("education") || "[]")
);

const [skills,setSkills] = useState<any[]>(
JSON.parse(localStorage.getItem("skills") || "[]")
);

const [languages,setLanguages] = useState<any[]>(
JSON.parse(localStorage.getItem("languages") || "[]")
);


// LOCAL STORAGE SAVE

useEffect(()=>{
localStorage.setItem("general",JSON.stringify(general))
},[general])

useEffect(()=>{
localStorage.setItem("experiences",JSON.stringify(experiences))
},[experiences])

useEffect(()=>{
localStorage.setItem("projects",JSON.stringify(projects))
},[projects])

useEffect(()=>{
localStorage.setItem("education",JSON.stringify(education))
},[education])

useEffect(()=>{
localStorage.setItem("skills",JSON.stringify(skills))
},[skills])

useEffect(()=>{
localStorage.setItem("languages",JSON.stringify(languages))
},[languages])


// DELETE ALL DATA

function clearResume(){

setGeneral({})
setExperiences([])
setProjects([])
setEducation([])
setSkills([])
setLanguages([])

localStorage.clear()

}

return(

<ResumeContext.Provider
value={{
general,setGeneral,
experiences,setExperiences,
projects,setProjects,
education,setEducation,
skills,setSkills,
languages,setLanguages,
clearResume
}}
>

{children}

</ResumeContext.Provider>

)

}