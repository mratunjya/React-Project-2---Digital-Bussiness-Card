import './App.css';
import BussinessCard from './Components/Bussiness Card/BussinessCard';

function App() {
  let name = "Laurie Smith";
  let title = "Frontend Developer";
  let website = "laurismith.website";
  let email = "laura@gmail.com";
  let linkedin = "https://www.linkedin.comlaurasmith";
  let about = "I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
  let interests = "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
  return (
    <div className="root flex flex-align-center flex-justify-content-center">
      <BussinessCard name={name} title={title} website={website} email={email} linkedin={linkedin} about={about} interests={interests}></BussinessCard>
    </div>
  );
}

export default App;