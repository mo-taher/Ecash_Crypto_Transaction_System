import React from 'react'
// import ReactDOM from 'react-dom/client'
import ReactDOM from 'react-dom'


import App from './App'
import './index.css'

import { TransactionProvider } from '../Controller/TransactionContext';

ReactDOM.render(
  <TransactionProvider>
      < React.StrictMode  >
        < App />
      </  React.StrictMode  >
  </TransactionProvider>,

  document.getElementById('root')
)

// ReactDOM.createRoot(document.getElementById('root')).render(
  
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
 
//   document.getElementById("root"),
// );


// First Problem occured here