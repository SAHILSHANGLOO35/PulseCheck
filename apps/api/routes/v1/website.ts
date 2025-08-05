import { Router, type Request, type Response } from "express";
import { prisma } from "@repo/db/client";
import { authMiddleware } from "../../middleware";
import * as cheerio from "cheerio";
import axios from "axios";

const websiteRouter = Router();

websiteRouter.post("/add-website", authMiddleware, async (req: Request, res: Response) => {
    try {
      const { url, name } = req.body;

      const newWebsite = await prisma.website.create({
        data: {
          url,
          name,
          user_id: req.userId!,
        },
      });

      res.status(200).json({
        message: "Website added successfully!",
        newWebsite,
      });
    } catch (error) {
      // @ts-ignore
      console.error("Failed to add website:", error.response?.data ||  error.message
      );
      res.status(500).json({
        message: "Error while adding website",
        error,
      });
    }
  }
);

websiteRouter.get("/status/websites/:websiteId", authMiddleware, async (req: Request, res: Response) => {
    try {
      const website = await prisma.website.findFirst({
        where: {
          user_id: req.userId,
          id: req.params.websiteId,
        },
        include: {
          ticks: {
            orderBy: [{
              createdAt: "desc",
            }],
            take: 10,
          },
        },
      });

      if (!website) {
        res.status(404).json({ message: "Website not found" });
        return;
      }

      res
        .status(200)
        .json({ url: website.url, id: website.id, user_id: website.user_id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server failure", error });
    }
  }
);

websiteRouter.get("/", authMiddleware, async (req: Request, res: Response) => {
  const websites = await prisma.website.findMany({
    where: {
      user_id: req.userId,
    },
    include: {
      ticks: {
        orderBy: [{
          createdAt: "desc"
        }],
        take: 1
      }
    }
  });

  res.status(200).json({ websites });
});

websiteRouter.get("/og-image", authMiddleware, async (req: Request, res: Response) => {
  const url = req.query.url as string;

  const urlPattern = /^https?:\/\//i;

  if (typeof url !== "string" || !urlPattern.test(url)) {
    res.status(400).json({ error: "Invalid URL format. Must start with http:// or https://" });
    return;
  }

  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);
    const ogImage = $('meta[property="og:image"]').attr("content");

    if (!ogImage) {
      res.status(404).json({ error: "OG image not found" });
      return;
    }

    res.json({ ogImage });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch OG Image", details: error });
  }
});

export default websiteRouter;
