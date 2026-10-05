import { Context } from '../../index.js';
import { useContext } from 'react';
import { SHOP_ROUTE } from '../../utils/consts.js';
import styles from './NavBar.module.css'
import {Button} from 'bootstrap';

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark ${styles.myNavbar}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href={SHOP_ROUTE}>ConjureImageStore</a>
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                    <button type="button" className="btn btn-secondary" >
                        Регистрация
                    </button>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;