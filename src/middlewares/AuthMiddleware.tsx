import Auth from "@components/Auth";
import { useGetUserByAuth } from "@hooks";

type AuthMiddlewareProps = {
  children: JSX.Element[];
};

export default function AuthMiddleware({ children }: AuthMiddlewareProps) {
  const query = useGetUserByAuth();

  if (!query.data) return <Auth />;
  return children;
}
