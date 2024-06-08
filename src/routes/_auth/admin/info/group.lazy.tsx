import { GroupsService, UpdateGroupRequest } from "@client";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { EditGroup } from "@components/info/group";
import EditGroupQualification from "@components/info/group/EditGroupQualification";

const GroupInfoPage = () => {
  const search: UpdateGroupRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      GroupsService.deleteGroupsGroupIdDelete({
        groupId: search.id,
      }),
    onSuccess: () => navigate({ to: "/admin/groups" }),
  });
  return (
    <>
      <h1>{search.name}</h1>
      <EditGroup search={search} />
      <EditGroupQualification search={search} />
      <Link to={"/admin/groups"}>
        <ButtonElement style={{ width: 100, marginTop: 30, marginRight: 10 }}>
          Назад
        </ButtonElement>
      </Link>
      <Button
        color="error"
        variant="contained"
        onClick={() => deleteMutation.mutate()}
      >
        Удалить
      </Button>
    </>
  );
};

export const Route = createLazyFileRoute("/_auth/admin/info/group")({
  component: GroupInfoPage,
});
