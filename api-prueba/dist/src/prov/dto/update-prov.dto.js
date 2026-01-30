"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProvDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_prov_dto_1 = require("./create-prov.dto");
class UpdateProvDto extends (0, mapped_types_1.PartialType)(create_prov_dto_1.CreateProvDto) {
}
exports.UpdateProvDto = UpdateProvDto;
//# sourceMappingURL=update-prov.dto.js.map