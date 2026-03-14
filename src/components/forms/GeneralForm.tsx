import { useContext, useState } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function GeneralForm() {

const ctx = useContext(ResumeContext);
if(!ctx) return null;

const { general, setGeneral } = ctx;

const [form,setForm] = useState<any>(general);

function handleChange(e:any){
setForm({
...form,
[e.target.name]:e.target.value
});
}

function saveData(){
setGeneral(form);
}

return(

<div className="container mt-4">

<div className="card shadow p-4">

<h4 className="mb-4">General</h4>

<div className="row">

<div className="col-md-6 mb-3">
<label className="form-label">Full Name</label>
<input className="form-control"
name="name"
value={form.name || ""}
onChange={handleChange}
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Email Address</label>
<input className="form-control"
name="email"
value={form.email || ""}
onChange={handleChange}
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Mobile Number</label>
<input className="form-control"
name="phone"
value={form.phone || ""}
onChange={handleChange}
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">LinkedIn</label>
<input className="form-control"
name="linkedin"
value={form.linkedin || ""}
onChange={handleChange}
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">GitHub</label>
<input className="form-control"
name="github"
value={form.github || ""}
onChange={handleChange}
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Portfolio</label>
<input className="form-control"
name="portfolio"
value={form.portfolio || ""}
onChange={handleChange}
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Address</label>
<input className="form-control"
name="address"
value={form.address || ""}
onChange={handleChange}
/>
</div>

<div className="col-md-6 mb-3">
<label className="form-label">Job Title</label>
<input className="form-control"
name="job"
value={form.job || ""}
onChange={handleChange}
/>
</div>

<div className="col-12 mb-3">
<label className="form-label">Summary (About Yourself)</label>
<textarea
className="form-control"
rows={5}
name="summary"
value={form.summary || ""}
onChange={handleChange}
/>
</div>

</div>

<button className="btn btn-primary" onClick={saveData}>
Save
</button>

</div>

</div>

)

}