import React from "react";

function Language(props) {
    return <div style={{display: 'inline'}} className="mr-4">
        <span className="dot" style={{background: props.language.color}}/> {props.language.name}
    </div>
}

export default Language;