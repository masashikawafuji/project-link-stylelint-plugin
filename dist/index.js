"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_fs_1 = tslib_1.__importDefault(require("node:fs"));
const stylelint_1 = require("stylelint");
const isProjectLink_1 = tslib_1.__importDefault(require("./helpers/isProjectLink"));
const getLinkFile_1 = tslib_1.__importDefault(require("./helpers/getLinkFile"));
const getAbsolutePath_1 = tslib_1.__importDefault(require("./helpers/getAbsolutePath"));
const { report, ruleMessages, validateOptions } = stylelint_1.utils;
const ruleName = "plugin/project-links";
const messages = ruleMessages(ruleName, {
    fileExistance: (file) => `File: "${file}"は存在しません。`,
});
const rule = (primaryOption) => {
    return (root, result) => {
        const validOptions = validateOptions(result, ruleName, {
            actual: primaryOption,
            possible: (value) => typeof value === "boolean",
        });
        if (!validOptions)
            return;
        root.walkComments((comment) => {
            var _a;
            if ((0, isProjectLink_1.default)(comment)) {
                const linkFile = (0, getLinkFile_1.default)(comment);
                const absolutePath = (0, getAbsolutePath_1.default)(linkFile, (_a = comment.source) === null || _a === void 0 ? void 0 : _a.input.file);
                try {
                    node_fs_1.default.accessSync(absolutePath, node_fs_1.default.constants.F_OK);
                }
                catch (err) {
                    const message = messages.fileExistance(linkFile);
                    report({ ruleName, result, message, node: comment });
                }
            }
        });
    };
};
const plugin = (0, stylelint_1.createPlugin)(ruleName, rule);
exports.default = plugin;
//# sourceMappingURL=index.js.map