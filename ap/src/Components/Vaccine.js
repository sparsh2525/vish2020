import React from 'react'
import ReactDOM from 'react-dom';
import {Radio, Switch } from 'pretty-checkbox-react';
import { RiCheckboxCircleLine } from 'react-icons/ri'

import '@djthoms/pretty-checkbox';
import '../css/vaccine.css'


const Vaccine = () => {
    return(
       <div className = "form">
            <div className = "ADtls">
                <div className = "h3">
                    <h3 style = {{textAlign : "center"}}>General Details</h3>
                </div>
                <div className = "AForm">
                    <div className = "fdtl input-container">
                        <input type="text" required=""/>
		                <label>Full Name</label>
                    </div>
                    <div className = "fdtl input-container">
                        <input type="text" required=""/>
                        <label>Address</label>
                    </div>
                    <div className = "fdtl input-container">
                        <input type="text" required=""/>
                        <label>State</label>
                    </div>
                    {/* <div className = "fdtl input-container">
                        <input type="text" required=""/>
                        <label>West Bengal</label>
                    </div> */}
                    <div className = "fdtl input-container">
                        <input type="text" required=""/>
                        <label>PinCode</label>
                    </div>
                    <div className = "fdtl input-container">
                        <input type="text" required=""/>
                        <label>Email Address</label>
                    </div>
                    <div className = "fdtl input-container">
                        <input type="text" required=""/>
                        <label>Mobile Number</label>
                    </div>
                </div>
            </div>
            <div className = "HDtls">
                <div className = "h3">
                    <h3 style = {{textAlign : "center"}}>Health Details</h3>
                </div>
                <div style = {{flex : 7 , display : "flex" , flexDirection : "row"}}>
                    <div className = "form1">
                        <div className = "fdtl input-container" style = {{marginTop : "15px"}}>
                            <input type="text" required=""/>
                            <label>Age</label>
                        </div>
                        <Switch shape="round" color="success" icon={<i className="mdi mdi-check"/>} animation="smooth" className = "sy">Are You Feeling Well ?</Switch>
                        <Switch shape="round" color="success" icon={<i className="mdi mdi-check"/>} animation="smooth" className = "sy">Do you have Cough ?</Switch>
                        <Switch shape="round" color="success" icon={<i className="mdi mdi-check"/>} animation="smooth" className = "sy">Do you have Fever ?</Switch>
                        <Switch shape="round" color="success" icon={<i className="mdi mdi-check"/>} animation="smooth" className = "sy">Do you have Difficulty in Breathing ?</Switch>
                        <Switch shape="round" color="success" icon={<i className="mdi mdi-check"/>} animation="smooth" className = "sy">Loss of Smell and Taste  ?</Switch>
                        <Switch shape="round" color="success" icon={<i className="mdi mdi-check"/>} animation="smooth" className = "sy">Do you have Cough ?</Switch>
                        {/* <Switch shape="round" color="success" icon={<i className="mdi mdi-check"/>} animation="smooth">Tuesday</Switch>  */}
                    </div>
                    <div className = "form1">
                        <div style = {{height : "100%" , marginTop : "65px"}}>
                            <Switch shape="round" color="success" icon={<i className="mdi mdi-check"/>} animation="smooth" className = "sy">Do you have Cough ?</Switch>
                            <Switch shape = "slim" className = "sy">Any History of Diabetes</Switch>
                            <Switch shape = "slim" className = "sy">Any History of Hypertension</Switch>
                            <Switch shape = "slim" className = "sy">Any History of Lung Disease</Switch>
                            <Switch shape = "slim" className = "sy">Any History of Heart Disease</Switch>
                            <Switch shape = "slim" className = "sy">Any History of Kidney Disorder</Switch>
                        </div>
                    </div>
                </div>
                <div style = {{flex : "1"}}>
                <div className="button_cont" align="center"><a className="example_d">Get Vaccine</a></div>
                </div>
            </div>
       </div>
    )
}
export default Vaccine;