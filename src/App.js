import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports'; // Make sure this file is correctly generated
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'; // Importing the newer Authenticator
import '@aws-amplify/ui-react/styles.css'; // Importing styles

Amplify.configure(awsconfig);

function App() {
    return (
        <div className="login-container">
            <header className="app-header">
                <h2>Welcome to Memora. This is the Homepage</h2>
            </header>
        </div>
    );
}


//export default withAuthenticator(App);

export default function MyApp() {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <App />
                    <button onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
    );
}
