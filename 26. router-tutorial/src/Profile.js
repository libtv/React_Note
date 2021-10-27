import React from "react";

const profileData = {
    admin: {
        name: "admin",
        description: "페이지 관리자",
    },
    user: {
        name: "user",
        description: "페이지 이용자",
    },
};

export default function Profile({ match }) {
    const { username } = match.params;
    const profile = profileData[username];

    return (
        <div className="profile">
            <>
                <h2>{profile.name}</h2>
                <h3>{profile.description}</h3>
            </>
        </div>
    );
}
