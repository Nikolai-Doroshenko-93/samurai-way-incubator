import React from "react";
import './Toggle.scss'
import {createField, Input} from "../FormControls/FormControls";


export const Toggle = (props: any) => {
    return (<div>
        <div className="toggle-container">
                <input className="toggle-input" type="checkbox"/>
                <svg className="toggle" viewBox="0 0 292 142" xmlns="http://www.w3.org/2000/svg">
                    <path className="toggle-background"
                          d="M71 142C31.7878 142 0 110.212 0 71C0 31.7878 31.7878 0 71 0C110.212 0 119 30 146 30C173 30 182 0 221 0C260 0 292 31.7878 292 71C292 110.212 260.212 142 221 142C181.788 142 173 112 146 112C119 112 110.212 142 71 142Z"/>
                    <rect className="toggle-icon on" x="64" y="39" width="12" height="64" rx="6"/>
                    <path className="toggle-icon off" fill-rule="evenodd"
                          d="M221 91C232.046 91 241 82.0457 241 71C241 59.9543 232.046 51 221 51C209.954 51 201 59.9543 201 71C201 82.0457 209.954 91 221 91ZM221 103C238.673 103 253 88.6731 253 71C253 53.3269 238.673 39 221 39C203.327 39 189 53.3269 189 71C189 88.6731 203.327 103 221 103Z"/>
                    <g filter="url('#goo')">
                        <rect className="toggle-circle-center" x="13" y="42" width="116" height="58" rx="29"
                              fill="#fff"/>
                        <rect className="toggle-circle left" x="14" y="14" width="114" height="114" rx="58"
                              fill="#fff"/>
                        <rect className="toggle-circle right" x="164" y="14" width="114" height="114" rx="58"
                              fill="#fff"/>
                    </g>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"/>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                       result="goo"/>
                    </filter>
                </svg>
        </div>
    </div>)
}