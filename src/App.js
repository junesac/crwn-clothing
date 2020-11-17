import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user});
      // console.log(user);
      // console.log(createUserProfileDocument(user));

      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot( snapShot => {
          console.log(snapShot.data());

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state);
          });  
        });
      }

      this.setState({currentUser: userAuth}, ()=> {
        console.log(this.state);
      });

    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signin' component={SignInAndSignUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
