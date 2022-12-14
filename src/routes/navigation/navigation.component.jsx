import {Outlet} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../asset/crown.svg';
import {NavigationContainer, NavLink, NavLinks, LogoContainer} from  './navigation.styles.jsx';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {CartContext} from '../../contexts/cart.context';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext)
 
    return(
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks>
                    <NavLink className='nav-link' to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span'onClick={signOutUser}>
                            {' '}
                            SIGN OUT {' '}
                            </NavLink>
                        ):
                        (
                            <NavLink className='nav-link' to='/sign-in'>
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
                 {isCartOpen && <CartDropdown />} {/*if isCartOpen true render <CartDropdown /> component */}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}
export default Navigation;