import { Link, createLazyFileRoute } from "@tanstack/react-router";
import LogoIcon from "@assests/logo_sm.svg";
import Button from "@components/Button";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="index-page-container">
      <LogoIcon />
      Нажимая кнопку "Продолжить" вы соглашаетесь на обработку персональных
      данных.
      <br />
      <br />
      Забыли пароль? Напишите администратору на почту mail@mail.ru
      <Link to="/login">
        <Button className="index-page-button">Продолжить</Button>
      </Link>
    </div>
  );
}
