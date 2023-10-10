import React from "react";

const UserProfile = ({ params }: { params: { username: string } }) => {
    const username = params.username;
    return (
        <main id="user-profile">
            <h1>User Profile {username}</h1>
        </main>
    );
};

export default UserProfile;
