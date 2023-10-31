import FadingImages from "./FadingImages";
const Homepage = () => {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>- Welcome to Famous Taco -</h1>
      <FadingImages></FadingImages>
    </div>
    </>
  );
};

export default Homepage;
