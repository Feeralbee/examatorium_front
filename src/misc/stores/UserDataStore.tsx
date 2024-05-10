import { UserAuthData } from "@misc/types";
import { Store } from "@tanstack/react-store";

const UserDataStore = new Store<UserAuthData>({login: "", password: ""})

export default UserDataStore;