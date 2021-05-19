import React from 'react'
import img_home from '../../../assets/img/img_home.png'
export default function home() {
    return (
        <div className="row">
           <div className="col-md-6">
                <img src={img_home} alt=""   />
           </div>
           <div className="col-md-6">
                home
           </div>
        </div>
    )
}
