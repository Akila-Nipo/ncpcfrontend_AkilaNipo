import React, {Fragment, useEffect, useState} from 'react';
import {Container, Dropdown, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faBullhorn} from "@fortawesome/free-solid-svg-icons";

function TopMenu() {
    const [isScroll,setIsScroll] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [css,setCss] = useState({
        navBar:'navBar',
        navLink:'navLink',
        ddBox:'ddBox'
    })

    useEffect(()=>{
        function handleScroll(){
            if(window.scrollY>70){
                setIsScroll(true);
                setCss({
                    navBar:'navBarScroll',
                    navLink:'navLinkScroll',
                    ddBox:'ddBoxScroll'
                })
            }
            else{
                setIsScroll(false);
                setCss({
                    navBar:'navBar',
                    navLink:'navLink',
                    ddBox:'ddBox'
                })
            }

        }
        window.addEventListener('scroll',handleScroll);
        return window.addEventListener('scroll',handleScroll);
    },[]);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };


    return (
        <Fragment>
           <Container fluid="true" className="text-center">
               <Navbar className={isScroll?'navBarScroll':'navBar'}  collapseOnSelect expand="sm">
                   <Navbar.Toggle className="custom-hamburger" aria-controls="responsive-navbar-nav" />
                   <Navbar.Collapse  className="justify-content-center" id="responsive-navbar-nav">
                       <Nav className="nav">
                           <Nav.Link ><Link to="/" className={css.navLink} >Home</Link></Nav.Link>
                           <Nav.Link ><Link to="about"  className={css.navLink} >About</Link></Nav.Link>
                           <Nav.Link ><Link to="registration"  className={css.navLink} >Registration</Link></Nav.Link>
                           <Dropdown
                               onMouseEnter={handleMouseEnter}
                               onMouseLeave={handleMouseLeave}
                               show={dropdownOpen}
                           >
                               <Dropdown.Toggle className={`${css.navLink} ddMenu`} id="dropdown-basic">Committee</Dropdown.Toggle>
                               <Dropdown.Menu className={`${css.ddBox}`}>
                                   <Dropdown.Item className={`${css.navLink} responsiveSubmenu`} as={Link} to="committee">Executive Committee</Dropdown.Item>
                                   <Dropdown.Item className={`${css.navLink} responsiveSubmenu`} as={Link} to="/">IT Committee</Dropdown.Item>
                                   <Dropdown.Item className={`${css.navLink} responsiveSubmenu`} as={Link} to="/">Social Media</Dropdown.Item>
                               </Dropdown.Menu>
                           </Dropdown>
                           <Nav.Link><Link to="gallery"  className={css.navLink} >Gallery</Link></Nav.Link>
                       </Nav>
                   </Navbar.Collapse>
               </Navbar>
               <div className="marquee-container">
               <div className="marquee">
                <span> Registration Begins</span>
                <span>Main Contest Date and Schedule</span>
                <span>Seat Plan List</span>  
                <span>Payment Details</span>
              </div>
                   
               </div>

           </Container>
        </Fragment>
    );
}

export default TopMenu;