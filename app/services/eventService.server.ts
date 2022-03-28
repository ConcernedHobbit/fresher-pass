import { db } from "~/util/db.server";

export async function getEvents(
  amount?: number
) {
  return await db.passEvent.findMany({
    take: amount
  });
}

export async function getById(
  id: number
) {
  return await db.passEvent.findUnique({
    where: { id }
  });
}

export async function createEvent(
  title: string
) {
  return await db.passEvent.create({
    data: {
      title
    }
  })
}