import Profile from './profile/Profile';
import picture from './profile-pic.png';
import CV from './CV.pdf';


function App() {

  const handlerEvent = (n) => alert (`My name is ${n}`);
 
  return (

    <div className="App" style = {{height: '100vh',display: 'flex',justifyContent: 'center',
                  alignItems: 'center',textAlign: 'center',backgroundColor: '#ccc'}}>

      <Profile handleName = {handlerEvent} image = {picture} bio = {CV}/>

    </div>
  );
   
}

export default App;
