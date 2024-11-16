import React, { useState } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports'; // Make sure this file is correctly generated
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'; // Importing the newer Authenticator
import HomePage from "./Components/HomePage";
import Card from "./Components/Card";
import '@aws-amplify/ui-react/styles.css'; // Importing styles
import { Route, Router, Routes } from "react-router-dom";
import FlashcardBundle from "./Components/FlashcardBundle";
import Navbar from "./Components/Navbar";
import  "./App.css";

Amplify.configure(awsconfig);

export default function MyApp() {
    return (
            <div>
            <Authenticator>
                {({ signOut, user }) => (
                    <>
                    {user && <Navbar user={user} signOut={signOut}/>}
                    <div>
                        <Routes>
                            <Route path="/" element = {<HomePage/>} />
                            <Route path="/flashcards/:topic" element= {<FlashcardBundle/>} />
                        </Routes>
                    </div>
                    </>
                )}
            </Authenticator>
            </div>
    );
}
