import React from "react";
import {UserDomainEntity} from "@client";

const useAuth = () => {
    const [userData, setUserData] = React.useState<UserDomainEntity | null>(null);


    return {
        userData,

    };
}