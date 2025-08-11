import { prisma } from "@repo/db/client";

async function main() {
  const region = await prisma.region.create({
    data: {
      name: "India Region", // You can name it anything
    },
  });

  console.log("✅ Region created:", region);
}

main();
