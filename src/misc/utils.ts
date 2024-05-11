import { UserDomainEntity } from "@client";

const parseUserFullName = (userData: UserDomainEntity | null): string => {
  if (userData)
    return `${userData.name} ${userData.surname} ${userData.patronymic ?? ""}`;
  return "";
};

export { parseUserFullName };
