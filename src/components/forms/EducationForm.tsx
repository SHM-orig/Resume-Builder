import { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function EducationForm(){

const ctx = useContext(ResumeContext);
if(!ctx) return null;

const {education,setEducation} = ctx;

const [form,setForm] = useState<any>({});
const [editIndex,setEditIndex] = useState<number | null>(null);

function handleChange(e:any){

setForm({
...form,
[e.target.name]:e.target.value
})

}

function save(){

if(editIndex !== null){

const updated = [...education];
updated[editIndex] = form;
setEducation(updated);
setEditIndex(null);

}else{

setEducation([...education,form]);

}

setForm({});

}

function editItem(i:number){

setForm(education[i]);
setEditIndex(i);

}

function deleteItem(i:number){

const filtered = education.filter((_:any,index:number)=>index !== i);
setEducation(filtered);

}

return(

<div>

<div className="card shadow p-4 mb-4">

<h4>Education</h4>

<input
className="form-control mb-2"
placeholder="Institution Name"
name="institution"
value={form.institution || ""}
onChange={handleChange}
/>

<input
className="form-control mb-2"
placeholder="Degree"
name="degree"
value={form.degree || ""}
onChange={handleChange}
/>

<input
className="form-control mb-2"
placeholder="Field of Study"
name="field"
value={form.field || ""}
onChange={handleChange}
/>

<button className="btn btn-primary" onClick={save}>
{editIndex !== null ? "Update" : "Save"}
</button>

</div>

{education.map((e:any,i:number)=>(

<div key={i} className="card p-3 mb-3">

<strong>{e.institution}</strong>

<div className="d-flex gap-2">

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