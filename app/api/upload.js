import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { file } = req.body;

    const blob = await put(file.name, file, {
      access: "public",
    });

    return res.status(200).json({ url: blob.url });
  }

  return res.status(405).json({ message: "Method not allowed" });
}

const handleImageUpload = async (file) => {
  const response = await fetch("/api/upload", {
    method: "POST",
    body: JSON.stringify({ file }),
  });
  const { url } = await response.json();
  return url;
};