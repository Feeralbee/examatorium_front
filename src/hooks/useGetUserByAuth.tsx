import { UsersService } from "@client";
import UserDataStore from "@misc/stores/UserDataStore";
import { authQueryKey } from "@constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

const useGetUserByAuth = () => {
    return useQuery({
        queryKey: authQueryKey,
        queryFn: async () => UsersService.getUserByAuthorizationUsersGet(UserDataStore.state),
        enabled: false,
        retry: 0,
        staleTime: 600 * 1000,
      });
}

export default useGetUserByAuth;