import React from 'react';

import './styles/AppStyles.css';
import astronautImg from './assets/Group 4032.png'

export const App = () => {
  return (
    <div className="main-background" >
      <div className="d-flex align-items-center justify-content-center">
        <img src={astronautImg} alt="" />
        <div className="">
          <span className="h1 text-white" >Desarrolla todo</span><br />
          <span className="h1 text-warning" >tu POTENCIAL</span><br />
          <span className="h1 text-white" >dentro del equipo</span><br />
          <span className="h1 text-warning" >ATOMIC</span><span className="h1 text-white" >LABS</span><br /><br />
          <button type="button" className="btn btn-primary">¡Quiero ser parte!</button>
        </div>
      </div>
    </div>
  )
}
