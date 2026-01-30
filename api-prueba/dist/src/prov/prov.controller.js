"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvController = void 0;
const common_1 = require("@nestjs/common");
const prov_service_1 = require("./prov.service");
const create_prov_dto_1 = require("./dto/create-prov.dto");
const update_prov_dto_1 = require("./dto/update-prov.dto");
let ProvController = class ProvController {
    provService;
    constructor(provService) {
        this.provService = provService;
    }
    create(createProvDto) {
        return this.provService.create(createProvDto);
    }
    async findAll() {
        return this.provService.findAll();
    }
    findOne(id) {
        return this.provService.findOne(+id);
    }
    update(id, updateProvDto) {
        return this.provService.update(+id, updateProvDto);
    }
    remove(id) {
        return this.provService.remove(+id);
    }
};
exports.ProvController = ProvController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_prov_dto_1.CreateProvDto]),
    __metadata("design:returntype", void 0)
], ProvController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProvController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProvController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_prov_dto_1.UpdateProvDto]),
    __metadata("design:returntype", void 0)
], ProvController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProvController.prototype, "remove", null);
exports.ProvController = ProvController = __decorate([
    (0, common_1.Controller)('prov'),
    __metadata("design:paramtypes", [prov_service_1.ProvService])
], ProvController);
//# sourceMappingURL=prov.controller.js.map