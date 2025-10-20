import fs from "fs";
import path from "path";

export async function getImagesFromFolder(folderName: string): Promise<string[]> {
  const folderPath = path.join(process.cwd(), "public/images/prosjekter", folderName);

  try {
    const files = fs.readdirSync(folderPath);
    const imageFiles = files.filter((file) =>
      [".jpg", ".jpeg", ".png", ".webp"].some((ext) => file.endsWith(ext))
    );
    return imageFiles.map((file) => `/images/prosjekter/${folderName}/${file}`);
  } catch (error) {
    console.error("Feil ved lesing av mappe:", error);
    return [];
  }
}
