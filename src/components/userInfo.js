import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const UserInfo = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
         isAuthenticated && (<label>{user.name}</label>)
    )
}
