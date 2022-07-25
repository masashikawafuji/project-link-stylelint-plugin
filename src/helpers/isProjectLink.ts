import { Comment } from "postcss";

import projectLinksRegex from "./projectLinksRegex";

export default function isProjectLink(comment: Comment): boolean {
  const { text } = comment;
  return projectLinksRegex.test(text);
}
