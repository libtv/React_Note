import React from "react";
import Consumer from "./Consumer";
import UserProvider from "./UserContextProvider";

function App() {
    return (
        <div className="App">
            <>
                <UserProvider>
                    <Consumer></Consumer>
                </UserProvider>
            </>
        </div>
    );
}

export default App;
