import { xAckBulk, xReadGroup } from "@repo/redis/client";
import axios from "axios";
import { prisma } from "@repo/db/client";

const REGION_ID = process.env.REGION_ID!;
const WORKER_ID = process.env.WORKER_ID!;

if (!REGION_ID) {
    throw new Error("Region not provided");
}

if (!WORKER_ID) {
    throw new Error("Worker not provided");
}

async function main() {
    while(true) {
        const res = await xReadGroup(REGION_ID, WORKER_ID);
    
        if (!res) continue;
    
        let promises = res.map(({ message }) =>
            fetchWebsite(message.name, message.url, message.id)
        );
    
        await Promise.all(promises);
    
        xAckBulk(REGION_ID, res.map(({id}) => id));
    }
}

async function fetchWebsite(name: string, url: string, websiteId: string) {
    return new Promise<void>((resolve, reject) => {
        const startTime = Date.now();
        axios
            .get(url)
            .then(async () => {
                const endTime = Date.now();
                await prisma.websiteTick.create({
                    data: {
                        response_time_ms: endTime - startTime,
                        status: "Up",
                        region_id: REGION_ID,
                        website_id: websiteId,
                    },
                });
                resolve();
            })
            .catch(async () => {
                const endTime = Date.now();
                await prisma.websiteTick.create({
                    data: {
                        response_time_ms: endTime - startTime,
                        status: "Down",
                        region_id: REGION_ID,
                        website_id: websiteId,
                    },
                });
                resolve();
            });
    });
}

main();
