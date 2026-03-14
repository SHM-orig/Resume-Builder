import { useState } from "react";
import SectionList from "../components/SectionList";
import { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import ExperienceForm from "../components/forms/ExperinceForm";
import ProjectForm from "../components/forms/ProjectForm";
import EducationForm from "../components/forms/EducationForm";
import SkillForm from "../components/forms/SkillForm";
import LanguageForm from "../components/forms/LanguageForm";
import GeneralForm from "../components/forms/GeneralForm";

export default function Builder() {

const [activeSection,setActiveSection] = useState("experience");
const { clearResume } = useContext(ResumeContext);

function renderForm(){

switch(activeSection){

case "experience":
return <ExperienceForm/>

case "project":
return <ProjectForm/>

case "education":
return <EducationForm/>

case "skill":
return <SkillForm/>

case "language":
return <LanguageForm/>

default:
return <ExperienceForm/>

}

}

return(

<div className="container mt-5">

<div className="row mb-5">

<div className="col-12">

<GeneralForm/>

</div>

</div>

<div className="row">

<div className="col-md-4 mb-4">

<SectionList setActiveSection={setActiveSection}/>

</div>

<div className="col-md-8">

{renderForm()}

</div>

</div>

<div className="mb-4">
    <button
className="btn btn-danger w-full"
onClick={clearResume}
>
Delete All Resume Data
</button>
</div>

</div>

)

}