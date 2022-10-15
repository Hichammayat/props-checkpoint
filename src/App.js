
import './App.css';
import Profile from './profile/Profile';

const App=()=> {
  const alertMyInput = (name) => alert(name);
  return (
    <div className="App">
      <Profile fullName ="hicham mayat" bio ="" profession ="developer" alertMyInput={alertMyInput}/>
     <image >
       <img src="logo192.png"></img>
     </image>
    </div>
  );
}

export default App;
