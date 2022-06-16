import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Signup from "./components/SignUp/Signup";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import Quiz from "./components/Home/Quiz";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBars from './components/NavBars/NavBars';
import Statistics from './components/Statistics/Statistics';
import Settings from './components/Settings/Settings';

function App() {

   return (
      <div className="App">
        <NavBars />
        {!localStorage.getItem("isLoggedIn") ? (
          <>
         <h2>You need to <a href="/sign-up">sign up</a> first, before start the quiz</h2>
         <h5>If you already have an account <a href="/sign-in">sign in</a></h5>
         <Router>
           <Routes>
           <Route exact path="/sign-up" element={<Signup/>} />
           <Route exact path="/sign-in" element={<Signin/>} />
           </Routes>
         </Router>
         </>
        ) : (
          <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/statistics" element={<Statistics/>} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/sign-in" element={<Signin/>} />
            <Route exact path="/quiz" element={<Quiz />} />
          </Routes>
        </Router>
        )
        }
  
      </div>
    );
}

export default App;