import fs from "fs";
import path from "path";
import matter from "gray-matter";

const root = process.cwd();

async function getAllBlogsMetadata() {
  const files = fs.readdirSync(path.join(root, "src", "routes", "blog"));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "src", "routes", "blog", postSlug),
      "utf8"
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace(".svx", ""),
      },
      ...allPosts,
    ];
  }, []);
}

export async function get(_req, res, _next) {
  const blogsMetadata = await getAllBlogsMetadata();

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(blogsMetadata));
}
