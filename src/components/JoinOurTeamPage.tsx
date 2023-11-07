import "../styles/JoinOurTeamPage.css";
//TODO: Add back-end logic to store informations
const JoinOurTeamPage = () => {
  return <div className="page-container">
    <h1>
      Work For Us!
    </h1>
    <p>Thank you for your interest. Please Fill out the form and upload your resume for consideration.</p>

    <form className="page-container-form" >
    
      <input type="text" placeholder="Name" required/>
      <input type="text" placeholder="Phone" required/>
      <input type="text" placeholder="Email" required/>
      <button type="submit">Apply</button>
    </form>
  </div>;
};

export default JoinOurTeamPage;
