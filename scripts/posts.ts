import path from 'path';
import fs from 'fs/promises';

export async function main() {
    const postsDirectory = path.join(process.cwd(), 'public/blog');
    const posts = await fs.readdir(postsDirectory);
    const paths = posts.map(post => post.split('.')[0]);
    const content = JSON.stringify(paths);
    const fileName = path.join(process.cwd(), 'public/posts.json');
    fs.writeFile(fileName, content, 'utf-8');
}

main();
