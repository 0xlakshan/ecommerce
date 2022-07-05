import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTag, faBoxArchive, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import './sideNav.scss';
import { useLocation } from 'react-router-dom';

export default function SideNav({ sideNavState }) {

    const { pathname } = useLocation();

    return (
        <div className={`side-nav ${sideNavState && 'side-nav-show'}`}>
            <div className={`side-nav-item ${pathname === '/dashboard' && 'side-nav-active-item'}`}>
                <FontAwesomeIcon icon={faHouse} />
                <p>home</p>
            </div>
            <div className="side-nav-item">
                <FontAwesomeIcon icon={faTag} />
                <p>orders</p>
            </div>
            <div className="side-nav-item">
                <FontAwesomeIcon icon={faBoxArchive} />
                <p>products</p>
            </div>
            <div className="side-nav-item">
                <FontAwesomeIcon icon={faUser} />
                <p>Customers</p>
            </div>
            <div className="side-nav-item">
                <FontAwesomeIcon icon={faGear} />
                <p>Settings</p>
            </div>
        </div>
    );
}