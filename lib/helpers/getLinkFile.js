"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const projectLinksRegex_1 = tslib_1.__importDefault(require("./projectLinksRegex"));
function getLinkFile(comment) {
    const { text } = comment;
    return text.replace("// ", "").replace(projectLinksRegex_1.default, "");
}
exports.default = getLinkFile;
//# sourceMappingURL=getLinkFile.js.map