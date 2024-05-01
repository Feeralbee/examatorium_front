import React from "react";
import {UserDomainEntity} from "@client";
import { useQuery } from "@tanstack/react-query";
import { auth } from "@constants/queryKeys";
import {UsersService} from "@client";

const useAuth = (authData: {login: string, password: string}) => {
    const [login, setLogin] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    return useQuery({
        queryKey: [auth], 
        queryFn: () => UsersService.getUserByAuthorizationUsersGet(authData),
        staleTime: 10*1000,
    })
}

export default useAuth;