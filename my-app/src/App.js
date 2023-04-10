
import "./App.css";

function App() {
  let password = ""
  
  const handleClick = () => {
    password = ""
    let passwordChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcedfghijklmnopqrstuvwxy1234567890!?@#$%&"
    for (let index = 0; index < 9; index++) {
      password += passwordChar.charAt(Math.floor(Math.random() * passwordChar.length));
    }
    alert(`Password: ${password}`)
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Password Generator</h1>
        <button onClick={handleClick}>Generate Password</button>
        <p>{password}</p>
      </div>
    </div>
  );
}

export default App;
