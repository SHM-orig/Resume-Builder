import { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function ExperienceForm(){

const ctx = useContext(ResumeContext);
if(!ctx) return null;

const {experiences,setExperiences} = ctx;

const [form,setForm] = useState<any>({});
const [editIndex,setEditIndex] = useState<number | null>(null);

function handleChange(e:any){

setForm({
...form,
[e.target.name]:e.target.value
})

}



function editItem(i:number){

setForm(experiences[i]);
setEditIndex(i);

}

function deleteItem(i:number){

const filtered = experiences.filter((_:any,index:number)=>index !== i);

setExperiences(filtered);

}

return(

<div>

<div className="card shadow p-4 mb-4">

<h4>Experience</h4>

<input
className="form-control mb-2"
placeholder="Company Name"
name="company"
value={form.company || ""}
onChange={handleChange}
/>

<input
className="form-control mb-2"
placeholder="Role"
name="role"
value={form.role || ""}
onChange={handleChange}
/>

<input
className="form-control mb-2"
placeholder="Location"
name="location"
value={form.location || ""}
onChange={handleChange}
/>

<input
className="form-control mb-2"
type="date"
name="start"
value={form.start || ""}
onChange={handleChange}
/>

<input
className="form-control mb-2"
type="date"
name="end"
value={form.end || ""}
onChange={handleChange}
/>

<textarea
className="form-control mb-3"
placeholder="Description"
name="description"
value={form.description || ""}
onChange={handleChange}
/>

<button className="btn btn-primary">

{editIndex !== null ? "Update" : "Save"}

</button>

</div>


{/* LIST */}

<div>

{experiences.map((exp:any,i:number)=>(

<div key={i} className="card p-3 mb-3">

<strong>{exp.role}</strong>
<p>{exp.company}</p>

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

</div>

)

}