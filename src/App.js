import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports'; // Make sure this file is correctly generated
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'; // Importing the newer Authenticator
import HomePage from "./Components/HomePage";
import '@aws-amplify/ui-react/styles.css'; // Importing styles
import { Route, Router, Routes } from "react-router-dom";
import FlashcardBundle from "./Components/FlashcardBundle";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { fetchUserAttributes } from 'aws-amplify/auth';
import  "./App.css";

Amplify.configure(awsconfig);

export default function MyApp() {
    const [userEmail, setUserEmail] = useState(null);

    const printUserAttributes = async () => {
        try {
            const userAttributes = await fetchUserAttributes();
            const email = userAttributes.email;
            setUserEmail(email);
            console.log("Email: " + email);
        } catch (e) {
            console.error("Error fetching user attributes: ", e);
    }
    }

    return (
        <div>
            <Authenticator>
                {({ signOut, user }) => (
                    <>
                        {user && <Navbar user={user} signOut={signOut} />}
                        <div>
                            <Routes>
                                <Route path="/" element={<HomePage/>} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/flashcards/:topic" element={<FlashcardBundle userEmail={userEmail} />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                            <button onClick={printUserAttributes}>Print Attributes</button>
                        </div>
                    </>
                )}
            </Authenticator>
        </div>
    );
}