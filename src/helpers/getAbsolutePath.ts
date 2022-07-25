import path from "node:path";

export default function getAbsolutePath(
  linkFile: string,
  sourceFileDir: string | undefined
): string {
  if (!sourceFileDir) throw new Error(`Can't find the source file.`);
  const currentDir = path.dirname(sourceFileDir);
  return path.resolve(currentDir, linkFile);
}
