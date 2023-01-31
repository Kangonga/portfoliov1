import { useState } from "react"
import "./Navbar.scss"

export default function NavBar(){
    const [showNav,setShowNav] = useState(true)
    return (
        <main id="Navbar">
            <span>G</span>
            <ul id="Navbar__ul">
                <li>
                    <div className="hoverIcon"></div>
                    <a href="#about">01. About</a>
                </li>
                <li>
                    <div className="hoverIcon"></div>
                    <a href="#experience">02. Experience </a>
                    </li>
                <li>
                    <div className="hoverIcon"></div>
                    <a href="#work"> 03. Work </a>
                </li>
                <li>
                    <div className="hoverIcon"></div>
                    <a href="#contact"> 04. Contact </a>
                </li>
                <button id="Navbar__button">View CV</button>
            </ul>
            <section className="Navbar__sideNav">
            {!showNav && <button className="nav_close-open" onClick={()=>setShowNav(true)}>Show</button> }
            {showNav && <button className="nav_close-open" onClick={()=>setShowNav(false)}>Close</button> }
            {showNav &&  <ul >
                {["About", "Experience", "Work", "Contact"].map((item,index)=>
                <a href={`#{item}`} key={`${item} ${index}`}>0{index+1}. {item}</a>
                )}
                <button>View CV</button>
            </ul>}
            </section>
        </main>
    )
}