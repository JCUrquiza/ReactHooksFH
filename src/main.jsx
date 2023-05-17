import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomerHook } from './01-useState/CounterWithCustomerHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 
    <HooksApp />
    <CounterApp />
    <CounterWithCustomerHook />
    <SimpleForm />
    */}
    <FormWithCustomHook />
  </React.StrictMode>,
)
