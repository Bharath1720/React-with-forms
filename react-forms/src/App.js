
import './App.css';
import ChangeSelectBox from './components/ChangeSelectBox';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import RegistrationFormAnotherway from './components/RegistrationFormAnotherway';
import ShowPassword from './components/ShowPassword';
import SMSApplication from './components/SMSApplication';

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a href="/" className="navbar-brand" >React With Forms</a>
      </nav>
      <ChangeSelectBox/>
      <SMSApplication/>
      <ShowPassword/>
      <LoginForm/>
      <RegistrationForm/>
      <RegistrationFormAnotherway/>
    </div>
  );
}

export default App;
