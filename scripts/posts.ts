import path from "path";
import fs from "fs/promises";

export async function main(): Promise<void> {
    const postsDirectory = path.join(process.cwd(), "public/blog");
    const posts = await fs.readdir(postsDirectory);

    const paths = await Promise.all(posts.map(async (post) => {
        const name = post.split(".")[0];
        const filePath = path.join(
            process.cwd(),
            `public/blog/${post}`,
        );
        const content = await fs.readFile(filePath, "utf-8");
        const firstLine = content.split("\n")[0];
        const title = firstLine.replace("# ", "");

        return { name, title };
    }));
    const content = JSON.stringify(paths);
    const fileName = path.join(process.cwd(), "public/posts.json");
    fs.writeFile(fileName, content, "utf-8");
}

main();
