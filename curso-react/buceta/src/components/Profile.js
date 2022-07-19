import React from "react";
import { useAuth } from "../providers/Auth";

const Profile = () => {
    const { user } = useAuth();

    return (
        <div>
            <hr />
            <h2>{user.nome}</h2>
        </div>
    )
}

export default Profile;