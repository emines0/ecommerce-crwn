import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../asset/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../context/user.context';
import { signOutUser } from '../../utils/firebas.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {CartContext} from '../../context/cart.context';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
 
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>
                            {' '}
                            SIGN OUT {' '}
                            </span>
                        ):
                        (
                            <Link className='nav-link' to='/sign-in'>
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
                 {isCartOpen && <CartDropdown />} {/*if isCartOpen true render <CartDropdown /> component */}
            </div>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;