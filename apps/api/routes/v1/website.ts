import { Router } from "express";
import { prisma } from "@repo/db/client";

const websiteRouter = Router();

websiteRouter.post("/add-website", async (req, res) => {
    try {
        const { url, name } = req.body;
        const newWebsite = await prisma.website.create({
            data: { url, name },
        });
        res.status(200).json({
            message: "Website added successfully!",
            newWebsite,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error while adding website", error });
    }
});

websiteRouter.get("/status/websites/:websiteId", (req, res) => {});

export default websiteRouter;
