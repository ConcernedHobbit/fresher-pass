import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const events: Prisma.PassEventCreateInput[] = [
  { title: "Fresher year head start", place: "Suomenlinna", start: new Date("2022-08-01") },
  { title: "KJYR 2027", description: "Fresher cruise with Kumpula organizations", start: new Date("2022-11-05") },
  { title: "Fresher sitz", description: "The first sitz! We'll teach you everything.", place: "Alina-sali", start: new Date("2022-09-09") },
  { title: "Unisport Reservation", description: "Weekly sportings", place: "UniSport Kumpula" }
]

const users: Prisma.UserCreateInput[] = [
  { username: "chobbit", name: "Eetu Raunio" },
  { username: "teoteppana", name: "Teo Uosukainen" },
  { username: "fresher" }
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
  .catch((e: unknown) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect);