import { UserDomainEntity } from "@client";
import { Store } from "@tanstack/react-store";

const UserDataStore = new Store<UserDomainEntity | null>(null);

export default UserDataStore;
