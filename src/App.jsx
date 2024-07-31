
import Header from './Header.jsx';
import Pomodoro from './Pomodoro.jsx'
import Previous from './Previous_tasks.jsx';
import Todo from './ToDo.jsx';


function App() {
  

  return (
    <>
    <Header/>
    <div className="container">
    <Pomodoro/>
    <Todo/>
    <Previous>
    </Previous>
    </div>
    </>
  );

}

export default App
