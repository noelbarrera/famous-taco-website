import { useState } from "react";
import "../styles/JoinOurTeamPage.css";
//TODO: Add back-end logic to store form data

type FormValues = {
  name: string,
  email: string,
  phone: string,
  resume: FileList | undefined
}
const JoinOurTeamPage = () => {

  const [submitted, setSubmitted] = useState(false);

  const [values,setValues] = useState<FormValues>({
    name : "",
    email : "",
    phone : "",
    resume: undefined,
});

const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const target = event.target as (HTMLInputElement | HTMLTextAreaElement) & { files: FileList}
  if(target.files === null || target.files === undefined) {
   setValues({...values,[target.name] : target.value})
   return
  }else{ 
    setValues({...values,[target.name] : target.files[0]});
  }
}


const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setSubmitted(true);
}

  return <div className="page-container"> {
    submitted ? <p className="page-container-submission"> Thank you for your inquiry. We'll be in touch shortly.</p> 
  : <>
  <h1>
    Work For Us!
  </h1>
  <p>Thank you for your interest. Please Fill out the form and upload your resume for consideration.</p>
  
  <form className="page-container-form" onSubmit={handleSubmit} >
   
    <input type="text" id="name" placeholder="Name" name="name" onChange={handleChange} required/>
    <input type="text" id="phone" placeholder="Phone" name="phone" onChange={handleChange}required/>
    <input type="text" id="email" placeholder="Email" name="email" onChange={handleChange}required/>
    <textarea id="coverLetter"placeholder="Cover Letter" name="coverLetter" onChange={handleChange} required/>
    <label htmlFor="resume">Resume</label>
    <input type="file" id="resume" name="resume" onChange={handleChange}required/>
    <button type="submit">Apply</button>
  </form>
  </> 
}
  </div>
};

export default JoinOurTeamPage;
