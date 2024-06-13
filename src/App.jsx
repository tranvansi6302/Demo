import useRoutesElement from './routers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
    const routersElement = useRoutesElement()
    return (
        <main>
            {routersElement}
            <ToastContainer autoClose='1000' />
        </main>
    )
}

export default App
