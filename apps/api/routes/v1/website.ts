import { Router, type Request, type Response } from "express";
import { prisma } from "@repo/db/client";
import { authMiddleware } from "../../middleware";

const websiteRouter = Router();

websiteRouter.post("/add-website", authMiddleware, async (req: Request, res: Response) => {
    try {
        const { url, name } = req.body;

        const newWebsite = await prisma.website.create({
            data: {
                url,
                name,
                user_id: req.userId!
            },
        });

        res.status(200).json({
            message: "Website added successfully!",
            newWebsite,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error while adding website",
            error,
        });
    }
});

websiteRouter.get("/status/websites/:websiteId", authMiddleware, async (req: Request, res: Response) => {
    try {
        const website = await prisma.website.findFirst({
            where: {
                user_id: req.userId,
                id: req.params.websiteId,
            },
            include: {
                ticks: {
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 10,
                },
            },
        });

        if (!website) {
            res.status(404).json({ message: "Website not found" });
            return;
        }

        res.status(200).json({ url: website.url, id: website.id, user_id: website.user_id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server failure", error });
    }
});

websiteRouter.get("/websites", authMiddleware, async (req: Request, res: Response) => {
    const websites = await prisma.website.findMany({ where: {
        user_id: req.userId
    } });

    res.status(200).json({ websites });
})

export default websiteRouter;
