import React from 'react';
import logo from '../assets/20190404_atomiclabs_mx_blango.png';

export const Header = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <img className="logo" src={logo} alt="logo atomic labs" />
            </div>
        </div>
    </div>
  )
}
