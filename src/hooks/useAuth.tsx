import { UsersService } from "@client";
import { authQueryKey } from "@misc/queryKeys";
import UserDataStore from "@misc/stores/UserDataStore";
import { UserAuthData, UseAuthReturn } from "@misc/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const useAuth = (): UseAuthReturn => {
  const [authData, setAuthData] = useState<UserAuthData | null>(null);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: authQueryKey,
    queryFn: async () => {
      if (authData)
        return UsersService.getUserByAuthorizationUsersGet(authData);
      return null;
    },
    enabled: false,
    retry: 0,
    staleTime: 600 * 1000,
  });

  useEffect(() => {
    if (authData) {
      query.refetch();
    }
  }, [authData]);

  useEffect(() => {
    if (query.data) {
        UserDataStore.setState(()=> query.data);
        navigate({to: `/${query.data.role}`,});
    }
  }, [query.data]);

  const login = (login: string, password: string) => {
    setAuthData({ login: login, password: password });
  };

  const logout = () => {
    queryClient.clear();
    setAuthData(null);
    UserDataStore.setState(()=> null);
  };

  return { login, logout, query};
};

export default useAuth;
