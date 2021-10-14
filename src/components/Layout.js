import React from 'react';
import Header from './Header';


export default function Layout(props) {

    return (
        <div className="main-layout-wrap">
            
            <Header
             />
             <img src="https://media-exp1.licdn.com/dms/image/C4E16AQGaiT7Hxq1JzQ/profile-displaybackgroundimage-shrink_350_1400/0/1606469782378?e=1639612800&v=beta&t=iyR-2fYrTB98C7-ZTW6_GGr5dUahgGKFW_HfPGqjpyY" alt="inspireIt" />
            {props.children}
        </div>
    )
}