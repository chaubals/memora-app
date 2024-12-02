import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports'; // Make sure this file is correctly generated
import { Authenticator, withAuthenticator, View, Image, useTheme } from '@aws-amplify/ui-react'; // Importing the newer Authenticator
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

    useEffect(() => {
        const fetchUserEmail = async() => {
            try {
                const userAttributes = await fetchUserAttributes();
                console.log("User Attributes: ", userAttributes);
                const email = userAttributes.email;
                setUserEmail(email);
                console.log("Email (from App.js): " + userAttributes.email);
            } catch (e) {
                console.error("Error fetching user attributes: ", e);
        }
        }
        fetchUserEmail();
    }, []); //Dependency array ensures this runs only once after the component mounts   

    //Amplify customized components
    const components = {
        Header() {
            const { tokens } = useTheme();
    
            return (
            <div className="d-flex justify-content-center align-items-center min-vh-25" style={{ backgroundColor: "#f9f9f9", padding: "20px", transform: "translate(0px, -50px)" }}>
                <div className="text-center">
                <View textAlign="center" padding="20px">
                <Image
                    alt="Memora logo"
                    src="./logo_no_bg.png"
                    style={{
                    maxWidth: "300px",
                    marginBottom: "20px",
                    transition: "transform 0.3s ease-in-out"
                    }}
                    className="logo-img"
                />
                </View>
                    <div className="fs-4 fw-bold text-success-emphasis mb-3">
                    Master learning with flashcards
                    </div>
                    <div className="fs-6 text-muted">
                Start your learning journey with flashcards, the most effective and interactive way to master new skills.
                    </div>
                    <div className="fs-6 text-muted mt-4">
                        Give it a try. It's free!
                    </div>
                </div>
            </div>

              );
        }
    };
    

    return (
<div className="app-container">
            <Authenticator components={components}>
                {({ signOut, user }) => (
                    <>
                        {/* After user logs in, show the Navbar and Routes */}
                        {user && <Navbar user={user} signOut={signOut} />}
                        <div>
                            {userEmail === null ? (
                                <div>Loading...</div> // Show a loader or message until email is fetched
                            ) : (
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route
                                        path="/flashcards/:topic"
                                        element={<FlashcardBundle userEmail={userEmail} />}
                                    />
                                    <Route path="/about" element={<About />} />
                                </Routes>
                            )}
                        </div>
                    </>
                )}
            </Authenticator>
        </div>
    );
}