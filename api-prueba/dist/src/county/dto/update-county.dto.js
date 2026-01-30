"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCountyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_county_dto_1 = require("./create-county.dto");
class UpdateCountyDto extends (0, mapped_types_1.PartialType)(create_county_dto_1.CreateCountyDto) {
}
exports.UpdateCountyDto = UpdateCountyDto;
//# sourceMappingURL=update-county.dto.js.map