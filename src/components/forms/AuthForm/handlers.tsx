import { SubmitErrorHandler } from "react-hook-form";
import { Store } from "react-notifications-component";
import { formError } from "./notifications";
import { UserAuthData, UseAuthReturn } from "@misc/types";

const onSubmit = (auth: UseAuthReturn, data: UserAuthData) => {
  auth.login(data.login, data.password);
};

const onError: SubmitErrorHandler<UserAuthData> = (data) =>
  Store.addNotification(formError(data));

export { onSubmit, onError };
