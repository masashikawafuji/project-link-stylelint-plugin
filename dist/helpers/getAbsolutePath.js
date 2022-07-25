"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const node_path_1 = tslib_1.__importDefault(require("node:path"));
function getAbsolutePath(linkFile, sourceFileDir) {
    if (!sourceFileDir)
        throw new Error(`Can't find the source file.`);
    const currentDir = node_path_1.default.dirname(sourceFileDir);
    return node_path_1.default.resolve(currentDir, linkFile);
}
exports.default = getAbsolutePath;
//# sourceMappingURL=getAbsolutePath.js.map