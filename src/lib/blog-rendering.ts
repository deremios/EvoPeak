import type { BlogPost } from "@/types/blog";

export type ArticleSection = {
  id: string;
  title: string;
  level: 2 | 3;
};

function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .replace(/&amp;/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripTags(value: string) {
  return value.replace(/<[^>]*>/g, "").trim();
}

export function extractArticleSections(content: string): ArticleSection[] {
  const matches = content.matchAll(/<h([23])>(.*?)<\/h\1>/g);
  const seen = new Map<string, number>();

  return Array.from(matches).map((match) => {
    const title = stripTags(match[2]);
    const baseId = slugifyHeading(title) || "section";
    const count = seen.get(baseId) || 0;
    seen.set(baseId, count + 1);

    return {
      id: count === 0 ? baseId : `${baseId}-${count + 1}`,
      title,
      level: Number(match[1]) as 2 | 3,
    };
  });
}

export function addHeadingIds(content: string, sections: ArticleSection[]) {
  let index = 0;

  return content.replace(/<h([23])>(.*?)<\/h\1>/g, (heading, level, title) => {
    const section = sections[index];
    index += 1;

    if (!section) return heading;
    return `<h${level} id="${section.id}">${title}</h${level}>`;
  });
}

export function getReadingTime(content: string) {
  const words = stripTags(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function getRelatedPosts(post: BlogPost, allPosts: BlogPost[], limit = 3) {
  return allPosts
    .filter((candidate) => candidate.slug !== post.slug && candidate.published)
    .map((candidate) => {
      const overlap = candidate.tags.filter((tag) => post.tags.includes(tag)).length;
      return { candidate, score: overlap };
    })
    .sort((a, b) => b.score - a.score || new Date(b.candidate.createdAt).getTime() - new Date(a.candidate.createdAt).getTime())
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
