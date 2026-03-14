import { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function LanguageForm(){

const ctx = useContext(ResumeContext);
if(!ctx) return null;

const {languages,setLanguages} = ctx;

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

const updated = [...languages];
updated[editIndex] = form;
setLanguages(updated);
setEditIndex(null);

}else{

setLanguages([...languages,form]);

}

setForm({});

}

function editItem(i:number){

setForm(languages[i]);
setEditIndex(i);

}

function deleteItem(i:number){

const filtered = languages.filter((_:any,index:number)=>index !== i);
setLanguages(filtered);

}

return(

<div>

<input
className="form-control mb-2"
placeholder="Language"
name="language"
value={form.language || ""}
onChange={handleChange}
/>

<select
className="form-control mb-3"
name="level"
value={form.level || ""}
onChange={handleChange}
>

<option>Junior</option>
<option>Middle</option>
<option>Senior</option>

</select>

<button className="btn btn-primary mb-4" onClick={save}>
{editIndex !== null ? "Update" : "Save"}
</button>

{languages.map((l:any,i:number)=>(

<div key={i} className="card p-3 mb-3">

{l.language} — {l.level}

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