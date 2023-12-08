import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import {Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from "./aws-exports"
Amplify.configure(awsExports);

/*
Amplify.configure({
   Auth: {
     region: 'us-east-1',
     userPoolId: 'us-east-1_XXXXXXXXXX',
     userPoolWebClientId: 'XXXXXXXXXXXXXXXXXXXX',
     identityPoolId: 'us-east-1:XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXX',
     oauth: {
       domain: 'XXXX.auth.us-east-1.amazoncognito.com',
       scope: ['openid'],
       redirectSignIn: 'https://localhost:3000/',
       redirectSignOut: 'https://localhost:3000/',
       responseType: 'code'
     }
  }
})


*/
function App({ signOut, user}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>Hello world!</div>
        {user ? (
          <>
          <h3>私は権限を持っています:{user.username}</h3>
          <button onClick={signOut}>サインアウト</button>
          </>
        ) : (
          <h3>権限ありません</h3>
        )}
      </header>
    </div>
  );
}

export default withAuthenticator(App);
