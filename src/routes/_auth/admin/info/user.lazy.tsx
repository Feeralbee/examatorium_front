import { UpdateUserRequest, UsersService } from "@client";
import ButtonElement from "@components/Button";
import { EditUser, ChangePassword } from "@components/info/user";
import AddToGroup from "@components/info/user/AddToGroup";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";

const UserInfo = () => {
  const search: UpdateUserRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      UsersService.deleteUserUsersUserIdDelete({ userId: search.id }),
    onSuccess: () => navigate({ to: "/admin/users" }),
  });
  return (
    <>
      <h1>{`${search.surname} ${search.name} ${search.patronymic ?? ""}`}</h1>
      <EditUser search={search} />
      {search.role !== "admin" && <ChangePassword search={search} />}
      {search.role === "student" && <AddToGroup search={search} />}
      <Link to={"/admin/users"}>
        <ButtonElement style={{ width: 100, marginTop: 30, marginRight: 10 }}>
          Назад
        </ButtonElement>
      </Link>
      <Button
        disabled={search.role === "admin"}
        color="error"
        variant="contained"
        onClick={() => deleteMutation.mutate()}
      >
        Удалить
      </Button>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/info/user")({
  component: UserInfo,
});
