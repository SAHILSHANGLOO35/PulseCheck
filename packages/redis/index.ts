import { createClient } from "redis";

const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

type WebsiteEvent = {
    name: string;
    url: string;
    id: string;
};

type MessageType = {
    id: string;
    message: {
        name: string;
        url: string;
        id: string;
    };
};

const STREAM_NAME = "pulsecheck:website";

async function xAdd({ name, url, id }: WebsiteEvent) {
    await client.xAdd(STREAM_NAME, "*", { name, url, id });
}

export async function xAddBulk(websites: WebsiteEvent[]) {
    for (let i = 0; i < websites.length; i++) {
        const { name, url, id } = websites[i]!;
        await xAdd({ name, url, id });
    }
}

export async function xReadGroup(
    consumerGroup: string,
    workerId: string
): Promise<MessageType[] | undefined> {
    const res = await client.xReadGroup(
        consumerGroup,
        workerId,
        {
            key: STREAM_NAME,
            id: ">",
        },
        {
            COUNT: 5,
        }
    );

    // @ts-ignore
    let messages: MessageType[] | undefined = res?.[0]?.messages;
    console.log(res);

    return messages;
}

async function xAck(consumerGroup: string, eventId: string) {
    await client.xAck(STREAM_NAME, consumerGroup, eventId);
}

export async function xAckBulk(consumerGroup: string, eventIds: string[]) {
    eventIds.map((eventId) => xAck(consumerGroup, eventId));
}
