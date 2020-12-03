import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.seletor';
import { selectCartHidden } from '../../redux/cart/cart.selector';

import { createStructuredSelector } from 'reselect';
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    OptionDiv
}
    from './header.styles';

const Header = ({ currentUser, hidden }) => (


    <HeaderContainer>
        <LogoContainer to='/' />
        <Logo className='logo' />

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
        </OptionLink>
            {
                currentUser ?
                    <OptionDiv onClick={() => { auth.signOut() }}>
                        Sign Out
            </OptionDiv>
                    :
                    <OptionLink to='/signin'>
                        Sign In
            </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ?
                null :
                <CartDropdown />
        }

    </HeaderContainer>
);

/**
 * 2 ways to do mapStateToProps
 * 
 */
// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// });

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header);