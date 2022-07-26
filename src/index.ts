import fs from "node:fs";
import { createPlugin, Plugin, utils } from "stylelint";

import isProjectLink from "./helpers/isProjectLink";
import getLinkFile from "./helpers/getLinkFile";
import getAbsolutePath from "./helpers/getAbsolutePath";

type PrimaryOption = boolean;

const { report, ruleMessages, validateOptions } = utils;

const ruleName = "plugin/project-links";
const messages = ruleMessages(ruleName, {
  fileExistance: (file) => `File: "${file as string}"は存在しません。`,
});

const rule: Plugin<PrimaryOption> = (primaryOption) => {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: primaryOption,
      possible: (value) => typeof value === "boolean",
    });

    if (!validOptions || !primaryOption) return;

    root.walkComments((comment) => {
      if (isProjectLink(comment)) {
        const linkFile = getLinkFile(comment);
        const absolutePath = getAbsolutePath(
          linkFile,
          comment.source?.input.file
        );

        try {
          fs.accessSync(absolutePath, fs.constants.F_OK);
        } catch (err) {
          const message = messages.fileExistance(linkFile);
          report({ ruleName, result, message, node: comment });
        }
      }
    });
  };
};

const plugin = createPlugin(ruleName, rule);

export default plugin;
