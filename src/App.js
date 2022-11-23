
import './App.css';
import useTitle from './Components/Hoks/useHoks';
import { RouterProvider } from 'react-router-dom';
import router from './Components/Others/Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  useTitle('Home')
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
      position='bottom-right'
      ></Toaster>
    </div>
  );
}

export default App;
