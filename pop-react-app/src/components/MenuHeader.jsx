import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Sidebar } from "./Sidebar";
import "../css/MenuHeader.css"

export const MenuHeader = () => {

    const sidebarRef = useRef(null);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const handleDocumentClick = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setSidebarOpen(false);
        }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
        document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
        console.log(isSidebarOpen)
    };

    return (
        <div className='header'>
            
            <div className='container-fluid bg-white border-bottom shadow-sm p-3'>
                <div className='row flex-fill'>
                    <div className='col'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div >
                                <button id="sidebar-btn" type="button" className='btn btn-primary bg-lii-blue btn-sm mr-1' onClick={toggleSidebar}>
                                    <span>Product optimizer |   </span>
                                    <FontAwesomeIcon icon={faBars} />
                                </button>
                                
                            </div>
                            <div className='logo w-175px w-md-225px' >
	                             <a className='lii-logo hidden-xs' href="#!/" >
	                                 <img className='w-100 h-auto' src="images/livingston-color.svg" alt="Livingston International"/>
	                            </a>
		 		            </div>
                        </div>
                    </div>   
                </div>
            </div>
                    {isSidebarOpen && (
                        <>
                                    <div className="overlay" onClick={toggleSidebar}>
                                    </div>
                                        <Sidebar ref={sidebarRef}/>
                        </>
                                )}             
        </div>
       
    );
} 
