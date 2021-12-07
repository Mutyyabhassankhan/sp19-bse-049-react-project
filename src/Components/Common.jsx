import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/index.css";
import pic from "../Images/computers.svg";

const Common = (props) => {
    return (
        <>
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h4>{props.name}</h4><h1><strong className="brand-name">
                        Pas E Pardah Studios
                        </strong>
                        </h1>
                        <h4 className="my-3">
                            {props.content}
                        </h4>
                        <div className="mt-3">
                            <NavLink className="btn btn-get-Started" to={props.visit}>{props.btname}</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 my-5 order-1 order-lg-2 header-img d-flex justify-content-center" >
                        <img src={props.imgsrc} className="img-fluid w-100" alt="Pas e Pardah" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    );
};

export default Common;

