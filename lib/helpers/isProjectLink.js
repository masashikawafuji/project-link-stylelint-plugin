"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const projectLinksRegex_1 = tslib_1.__importDefault(require("./projectLinksRegex"));
function isProjectLink(comment) {
    const { text } = comment;
    return projectLinksRegex_1.default.test(text);
}
exports.default = isProjectLink;
//# sourceMappingURL=isProjectLink.js.map