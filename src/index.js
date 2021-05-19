import React , { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.scss'; 
import { store } from "./redux/storeConfig/store"
import { Provider } from "react-redux"
import reportWebVitals from './reportWebVitals';

const Spinner = () => {return <div>Cargando...</div>};
const LazyApp = lazy(() => import("./App"))
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<Spinner />}> 
            <LazyApp />  
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

 
reportWebVitals();
