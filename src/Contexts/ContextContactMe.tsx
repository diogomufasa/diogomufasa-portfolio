"use client";
import React from "react";

interface ContextContactMeProps {
    children: React.ReactNode;
}

export const ContactMeContext = React.createContext<any>(null);

export const ContactMeProvider: React.FC<ContextContactMeProps> = ({ children }) => {
    const [HasContacted, setHasContacted] = React.useState(false);

    return(
        <ContactMeContext.Provider value={{HasContacted, setHasContacted}}>
            {children}
        </ContactMeContext.Provider>
    )
}
