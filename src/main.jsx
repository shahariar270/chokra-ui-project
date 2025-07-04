import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as ChakraProvider } from "./components/ui/provider.jsx"
import './index.css'
import App from './App.jsx'
import store from './reduer/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
         <App/>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </StrictMode>,
)
