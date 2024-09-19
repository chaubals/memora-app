import React from "react";
import ReactDom from "react-dom";

function App(){
    return(
        <div>
            <h1>Welcome to Memora!</h1>
            <h2>This is a subheading.</h2>
        </div>
    );
}

ReactDom.render(<App />, document.getElementById('root'));