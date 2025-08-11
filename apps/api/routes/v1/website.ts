import { Router, type Request, type Response } from "express";
import { prisma } from "@repo/db/client";
import { authMiddleware } from "../../middleware";
import * as cheerio from "cheerio";
import axios from "axios";

const websiteRouter = Router();

websiteRouter.post(
  "/add-website",
  authMiddleware,
  async (req: Request, res: Response) => {
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
      console.error(
        "Failed to add website:",
        // @ts-ignore
        error.response?.data || error.message
      );
      res.status(500).json({
        message: "Error while adding website",
        error,
      });
    }
  }
);

websiteRouter.get(
  "/status/websites/:websiteId",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const website = await prisma.website.findFirst({
        where: {
          user_id: req.userId,
          id: req.params.websiteId,
        },
        include: {
          ticks: {
            orderBy: [
              {
                createdAt: "desc",
              },
            ],
            take: 10,
          },
        },
      });

      if (!website) {
        res.status(404).json({ message: "Website not found" });
        return;
      }

      res.status(200).json({
        url: website.url,
        name: website.name,
        id: website.id,
        user_id: website.user_id,
      });
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
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        take: 1,
      },
    },
  });

  res.status(200).json({ websites });
});

websiteRouter.get(
  "/og-image",
  authMiddleware,
  async (req: Request, res: Response) => {
    const url = req.query.url as string;

    const urlPattern = /^https?:\/\//i;

    if (typeof url !== "string" || !urlPattern.test(url)) {
      res.status(400).json({
        error: "Invalid URL format. Must start with http:// or https://",
      });
      return;
    }

    try {
      const { data: html } = await axios.get(url);
      const $ = cheerio.load(html);

      // Extract OG image
      let ogImage = $('meta[property="og:image"]').attr("content") || null;
      if (ogImage && !ogImage.startsWith("http")) {
        ogImage = new URL(ogImage, url).href;
      }

      // Extract meta description
      let metaDescription =
        $('meta[property="og:description"]').attr("content") ||
        $('meta[name="description"]').attr("content") ||
        null;

      // Extract possible logo image
      let logo =
        $('img[src*="logo" i]').attr("src") ||
        $('img[alt*="logo" i]').attr("src") ||
        null;
      if (logo && !logo.startsWith("http")) {
        logo = new URL(logo, url).href;
      }

      // Extract favicon
      let favicon =
        $('link[rel="icon"]').attr("href") ||
        $('link[rel="shortcut icon"]').attr("href") ||
        $('link[rel="apple-touch-icon"]').attr("href") ||
        $('link[rel="apple-touch-icon-precomposed"]').attr("href") ||
        null;

      // If favicon path is relative, make it absolute
      if (favicon && !favicon.startsWith("http")) {
        favicon = new URL(favicon, url).href;
      }

      // Fallback: default favicon.ico at root
      if (!favicon) {
        favicon = new URL("/favicon.ico", url).href;
      }

      // If logo not found, use favicon
      if (!logo) {
        logo = favicon;
      }

      res.json({
        ogImage,
        metaDescription,
        logo,
        favicon, // also send favicon separately if needed
      });
    } catch (error) {
      console.error("OG image fetch error:", error);
      res.status(500).json({
        error: "Failed to fetch website metadata.",
        details: (error as Error).message,
      });
    }
  }
);

export default websiteRouter;
