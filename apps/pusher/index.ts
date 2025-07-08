import { prisma } from "@repo/db/client";
import { xAddBulk } from "@repo/redis/client";

async function main() {
    let websites = await prisma.website.findMany({
        select: {
            name: true,
            url: true,
            id: true,
        },
    });

    console.log(websites.length);

    await xAddBulk(websites.map((w) => ({
            name: w.name!,
            url: w.url!,
            id: w.id!
        }))
    );
}

setInterval(() => {
    main();
}, 3 * 60 * 1000);

main();
