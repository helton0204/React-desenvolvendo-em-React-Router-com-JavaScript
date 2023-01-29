import { NavLink, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = ({children, to}) => {
    const location = useLocation();
    return(
        <NavLink 
            className={`
                ${styles.link} 
                ${location.pathname === to ? styles.linkDestacado : ''}`
            } 
            to={to} 
        >
            {children}
        </NavLink>
    )
}
export default MenuLink;