import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { ConvertForm } from "./components/ConvertForm";

function App() {
  return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-8">
              Text to PDF Converter
          </h1>
          <ConvertForm/>
          <ToastContainer/>
      </div>
  )
}

export default App
