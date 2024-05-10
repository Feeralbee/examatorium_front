import { UseQueryResult } from "@tanstack/react-query";
import { SubmitErrorHandler } from "react-hook-form";
import { Store } from "react-notifications-component";
import { formError } from "./notifications";
import UserDataStore from "@misc/stores/UserDataStore";
import { UserAuthData } from "@misc/types";

const onSubmit = (query: UseQueryResult, data: UserAuthData) => {
  UserDataStore.setState(() => data);
  query.refetch();
};

const onError: SubmitErrorHandler<UserAuthData> = (data) =>
  Store.addNotification(formError(data));

export { onSubmit, onError };
