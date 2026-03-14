import { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function ProjectForm(){

const ctx = useContext(ResumeContext);
if(!ctx) return null;

const {projects,setProjects} = ctx;

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

const updated = [...projects];
updated[editIndex] = form;
setProjects(updated);
setEditIndex(null);

}else{

setProjects([...projects,form]);

}

setForm({});

}

function editItem(i:number){

setForm(projects[i]);
setEditIndex(i);

}

function deleteItem(i:number){

const filtered = projects.filter((_:any,index:number)=>index !== i);
setProjects(filtered);

}

return(

<div>

<div className="card shadow p-4 mb-4">

<h4>Project</h4>

<input
className="form-control mb-2"
placeholder="Project Name"
name="name"
value={form.name || ""}
onChange={handleChange}
/>

<input
className="form-control mb-2"
placeholder="Deployment Link"
name="deploy"
value={form.deploy || ""}
onChange={handleChange}
/>

<input
className="form-control mb-2"
placeholder="Repository Link"
name="repo"
value={form.repo || ""}
onChange={handleChange}
/>

<textarea
className="form-control mb-3"
placeholder="Description"
name="description"
value={form.description || ""}
onChange={handleChange}
/>

<button className="btn btn-primary" onClick={save}>
{editIndex !== null ? "Update" : "Save"}
</button>

</div>

{projects.map((p:any,i:number)=>(

<div key={i} className="card p-3 mb-3">

<strong>{p.name}</strong>

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