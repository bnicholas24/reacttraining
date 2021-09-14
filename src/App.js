import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Training</h1>
        <p>Form</p>
        <form>
          <p><input type="text" placeholder="Name" id="name" /></p>
          <p><input type="text" placeholder="Email" id="email" /></p>
          <p><input type="password" placeholder="Password" id="password" /></p>
          <p><input type="password" placeholder="Reset Password" id="repossword" /></p>
          <p><input type="text" placeholder="Phone number" id="password" /></p>
          <p><button type="submit" value="Submit">Submit</button></p>
        </form>
    </div>
  );
}

export default App;
