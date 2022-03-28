import { User } from "@prisma/client";
import { json, LoaderFunction, useLoaderData } from "remix";
import { getUsers } from "~/services/userService.server";

export const loader: LoaderFunction = async () => {
  const users = await getUsers();
  return json(users);
}

export default function Events() {
  const data = useLoaderData<Array<User>>();

  return (
    <>
      {data.map(user => <p key={user.id}>{user.name ?? user.username}</p>)}
    </>
  )
}