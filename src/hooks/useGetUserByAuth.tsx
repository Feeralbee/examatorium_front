import { UsersService } from "@client";
import UserDataStore from "@misc/stores/UserDataStore";
import { authQueryKey } from "@misc/queryKeys";
import { useQuery } from "@tanstack/react-query";

const useGetUserByAuth = () => {
  const query = useQuery({
    queryKey: authQueryKey,
    queryFn: async () => {
      if (UserDataStore.state)
        return UsersService.getUserByAuthorizationUsersGet(UserDataStore.state);
      return null;
    },
    retry: 0,
    staleTime: 600 * 1000,
  });

  return query;
};

export default useGetUserByAuth;
