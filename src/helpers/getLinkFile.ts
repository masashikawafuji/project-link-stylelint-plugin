import { Comment } from "postcss";

import projectLinksRegex from "./projectLinksRegex";

export default function getLinkFile(comment: Comment): string {
  const { text } = comment;
  return text.replace("// ", "").replace(projectLinksRegex, "");
}
