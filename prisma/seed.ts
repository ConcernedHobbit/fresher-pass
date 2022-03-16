import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const events: Prisma.PassEventCreateInput[] = [
  { title: "Fresher year head start" },
  { title: "KJYR 2027" },
  { title: "Fresher sitz" },
  { title: "Unisport Reservation" }
]

const users: Prisma.UserCreateInput[] = [
  { username: "chobbit", name: "Eetu Raunio" },
  { username: "teoteppana", name: "Teo Uosukainen" },
  { username: "fresher", name: "Alfred J. Kwak" }
]

async function seed() {
  users.forEach(async (seedUser) => {
    const user = await prisma.user.create({
      data: seedUser
    });

    console.log(`Seeded user '${user.username}' (id ${user.id})`)
  });

  events.forEach(async (seedEvent) => {
    const event = await prisma.passEvent.create({
      data: seedEvent
    });

    console.log(`Seeded event '${event.title}' (id ${event.id})`)
  })
}

// Wish we had top-level await...
// Promises will have to do.
seed()
  .then(() => console.log(`Finished seeding. Exiting...`))
  .catch((e: unknown) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect);