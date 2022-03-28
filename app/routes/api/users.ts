import { json, LoaderFunction } from "remix";
import { getUsers } from "~/services/userService.server";

export const loader: LoaderFunction = async () => {
  const users = await getUsers()
  return json(users)
}
