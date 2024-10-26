import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports'; // Make sure this file is correctly generated
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'; // Importing the newer Authenticator
import HomePage from "./Components/HomePage";
import '@aws-amplify/ui-react/styles.css'; // Importing styles
import { Route, Router, Routes } from "react-router-dom";
import FlashcardBundle from "./Components/FlashcardBundle";
import  "./App.css";

Amplify.configure(awsconfig);

export default function MyApp() {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>Memora Header</h2>
        <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <Routes>
                        <Route path="/" element = {<HomePage/>} />
                        <Route path="/flashcards/:topic" element= {<FlashcardBundle/>} />
                    </Routes>
                    <button className="button-signout" onClick={signOut}>Sign out</button>
                </div>
            )}
        </Authenticator>
        </div>
    );
}
