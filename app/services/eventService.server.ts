import { db } from "~/util/db.server";

export const getEvents = async (amount?: number) =>
  await db.passEvent.findMany({ take: amount })

export const getById = async (id: number) =>
  await db.passEvent.findUnique({
    where: { id }
  })

export const createEvent = async (title: string) =>
  await db.passEvent.create({
    data: { title }
  })
