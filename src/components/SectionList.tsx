export default function SectionList({setActiveSection}:any){

return(

<div>

<h5>Experiences</h5>

<button
className="btn btn-outline-dark w-100 mb-2"
onClick={()=>setActiveSection("experience")}
>

Exp

</button>

<hr/>

<h5>Projects</h5>

<button
className="btn btn-outline-dark w-100 mb-2"
onClick={()=>setActiveSection("project")}
>

Project

</button>

<hr/>

<h5>Education</h5>

<button
className="btn btn-outline-dark w-100 mb-2"
onClick={()=>setActiveSection("education")}
>

Education

</button>

<hr/>

<h5>Skills</h5>

<button
className="btn btn-outline-dark w-100 mb-2"
onClick={()=>setActiveSection("skill")}
>

Skill

</button>

<hr/>

<h5>Languages</h5>

<button
className="btn btn-outline-dark w-100"
onClick={()=>setActiveSection("language")}
>

Language

</button>

</div>

)

}