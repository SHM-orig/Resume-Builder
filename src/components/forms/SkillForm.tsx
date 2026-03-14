import { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function SkillForm(){

const ctx = useContext(ResumeContext);
if(!ctx) return null;

const {skills,setSkills} = ctx;

const [skill,setSkill] = useState("");
const [editIndex,setEditIndex] = useState<number | null>(null);

function save(){

if(editIndex !== null){

const updated = [...skills];
updated[editIndex] = skill;
setSkills(updated);
setEditIndex(null);

}else{

setSkills([...skills,skill]);

}

setSkill("");

}

function editItem(i:number){

setSkill(skills[i]);
setEditIndex(i);

}

function deleteItem(i:number){

const filtered = skills.filter((_:any,index:number)=>index !== i);
setSkills(filtered);

}

return(

<div className="card shadow p-4">

<input
className="form-control mb-3"
placeholder="Skill"
value={skill}
onChange={(e)=>setSkill(e.target.value)}
/>

<button className="btn btn-primary mb-4" onClick={save}>
{editIndex !== null ? "Update" : "Save"}
</button>

{skills.map((s:any,i:number)=>(

<div key={i} className="card p-3 mb-3">

{s}

<div className="d-flex gap-2 mt-2">

<button
className="btn btn-warning btn-sm"
onClick={()=>editItem(i)}
>

Edit

</button>

<button
className="btn btn-danger btn-sm"
onClick={()=>deleteItem(i)}
>

Delete

</button>

</div>

</div>

))}

</div>

)

}