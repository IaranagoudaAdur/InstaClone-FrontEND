import './App.css';
import AppRouter from './routers/AppRouters';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostContext from './contexts/PostContext'

function App() {
  return (<PostContext>
    <AppRouter/>
    </PostContext>
  );
}

export default App;
