import {  faBook, faGauge, faCaretLeft, faCogs, faTag, faTimesCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState } from "react";
import '../../css/menu/Sidebar.css';


export const Sidebar = forwardRef((props, ref) => {

    const [isSubmenuOpened,setSubmenuOpen] = useState(false);
    const openclose = (index) =>{
        if(isSubmenuOpened){
            setSubmenuOpen(false);
            const submenu= document.getElementById(index);
            submenu.classList.add("closed");
            submenu.classList.add("bg-primary-dark");
        }
        else{
            setSubmenuOpen(true);
            const submenu= document.getElementById(index);
            submenu.classList.remove("closed");
            submenu.classList.remove("bg-primary-dark");
        }
    }

    // const menuContentAdmin = [
    //     {name: "Dashboard", submenu : null},
    //     {name: "Trade data", submenu: ["Trade remedies"]},
    //     {name: "Administration", submenu: ["Company","Role", "User", "Country Types", "Standard Types", "Partner", "Policy",
    //     "Policy", "Batch", "PGA Configuration", "Pref Prog Configuration", "Upload Center"]}
    // ]

    // const menuContentCompanyAdmin = [
    //     {name: "Dashboard", submenu : null},
    //     {name: "Administration", submenu: ["Company","Role", "User"]},
    // ]

    const menuContentSuperUser = [
        {name: "Dashboard", submenu : null, role: ["Super user", "Company admin", "Admin"], icon: [faGauge]},
        {name: "Product data", submenu: ["Product", "Product analysis", "Product analysis Work Queue", "Upload Center"], icon: [faTag]},
        {name: "Trade data", submenu: ["Country", "Harmonized Tariff", "Ports", "Preferential programs", "Tax/Fee", "UOM Customs Correlation", "Trade remedies"],icon: [faBook]},
        {name: "User data", submenu: ["Notes","HS Import Controls","Carrier Information","Partner","Rulings","UOM Conversion","Hazadrous Material"], icon: [faUser]},
        {name: "Administration", submenu: ["Policy", "Batch", "PGA Configuration", "Pref Prog Configuration"], icon: [faCogs]}
    ]

    

    return (
    <div className="sidebar">
        <span className="sidebar-bg"></span>
        <div className="sidebar-menu bg-primary-light">
            <ul>
                <li>
                    <div className="form-control has-feedback d-flex justify-content-between align-items-center">
                        <input type="text" style={{border: "0"}} placeholder="Quick find"/>
                        <FontAwesomeIcon icon={faTimesCircle} color="#8DABCD"/>
                    </div>
                </li>
                {
                    menuContentSuperUser.map((item, index) => {
                        return (
                            <>
                            <li key={index}>
                                <div>
                                <a className="d-flex justify-content-between align-items-center" href="#!/">
                                    <div >
                                        <FontAwesomeIcon icon={item.icon[0]} color="white"/>
                                        <span className="p-1 span-menu">{item.name}</span>
                                    </div>
                                    {item.submenu && (
                                        <FontAwesomeIcon icon={faCaretLeft} color="white" onClick={(e)=>{e.preventDefault();openclose(index)}}/>
                                    )}
                               </a>
                               </div>
                            </li>
                               {
                                    item.submenu && 
                                    <>
                                        <ul id={index} key={index} className="sidebar-submenu closed">
                                            {item.submenu.map((submenuitem, i) => {
                                                return(
                                                <li key={i}>
                                                    <div>
                                                        <a className="submenu-item"  href="" onClick={()=>{console.log(submenuitem)}}>{submenuitem}</a>
                                                    </div>
                                                </li>
                                                )
                                            })}
                                        </ul>
                                    </>
                               }
                               </>
                )})}
            </ul>
        </div>
    </div>
    );
})
