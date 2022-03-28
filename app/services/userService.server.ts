import { db } from "~/util/db.server";

export const getUsers = async (amount?: number) =>
  await db.user.findMany({ take: amount })

export const getById = async (id: number) =>
  await db.user.findUnique({
    where: { id }
  })

export const createUser = async (username: string, name?: string) =>
  await db.user.create({
    data: { username, name }
  })
