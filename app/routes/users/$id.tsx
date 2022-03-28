import { User } from "@prisma/client";
import { json, LoaderFunction, useCatch, useLoaderData } from "remix";
import { getById } from "~/services/userService.server";

export const loader: LoaderFunction = async ({
  params
}) => {
  if (params.id === undefined) {
    throw new Response(
      'No id provided as parameter', 
      { status: 400 }
    );
  }

  const userId: number = +params.id;
  if (Number.isNaN(userId)) {
    throw new Response(
      'Invalid ID',
      { status: 400 }
    );
  }

  const user = await getById(userId)

  if (!user) {
    throw new Response(
      'Event not found', 
      { status: 404 }
    );
  }

  return json(user);
}

export default function SingleUser() {
  const data = useLoaderData<User>();

  return <p>{data.name ?? data.username}</p>;
}

export function CatchBoundary() {
  const error = useCatch();

  switch (error.status) {
    case 404:
      return <p>There's no such user!</p>;
    
    default:
      return <p>{error.status} {error.data}</p>;
  }
}