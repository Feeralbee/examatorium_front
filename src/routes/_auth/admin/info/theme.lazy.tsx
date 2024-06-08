import { ThemesService, UpdateThemeRequest } from "@client";
import { Link, createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import ButtonElement from "@components/Button";
import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { EditTheme, EditThemeExam } from "@components/info/theme";

const ThemeInfoPage = () => {
  const search: UpdateThemeRequest = Route.useSearch();
  const navigate = useNavigate();
  const deleteMutation = useMutation({
    mutationFn: () =>
      ThemesService.deleteThemesThemesIdDelete({
        themeId: search.id,
      }),
    onSuccess: () => navigate({ to: "/admin/themes" }),
  });
  return (
    <>
      <h1>{search.name}</h1>
      <EditTheme search={search} />
      <EditThemeExam search={search} />
      <Link to={"/admin/themes"}>
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

export const Route = createLazyFileRoute("/_auth/admin/info/theme")({
  component: ThemeInfoPage,
});
