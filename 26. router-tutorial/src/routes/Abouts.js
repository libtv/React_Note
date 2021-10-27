import React from "react";
import querystring from "querystring";

export default function Abouts({ location }) {
    console.log(location);
    const name = querystring.parse(location.search);
    console.log(name);

    return (
        <div className="abouts">
            <>
                <h2>여기는 Abouts 입니다.</h2>
            </>
        </div>
    );
}
