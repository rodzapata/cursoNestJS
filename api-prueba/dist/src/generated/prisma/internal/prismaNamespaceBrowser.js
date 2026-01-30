"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.User_roleScalarFieldEnum = exports.UserScalarFieldEnum = exports.StateScalarFieldEnum = exports.Role_permissionScalarFieldEnum = exports.RoleScalarFieldEnum = exports.PermissionScalarFieldEnum = exports.InvoiceScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.CountyScalarFieldEnum = exports.Audit_logScalarFieldEnum = exports.ProvScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    prov: 'prov',
    audit_log: 'audit_log',
    county: 'county',
    customer: 'customer',
    invoice: 'invoice',
    permission: 'permission',
    role: 'role',
    role_permission: 'role_permission',
    state: 'state',
    user: 'user',
    user_role: 'user_role'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.ProvScalarFieldEnum = {
    id: 'id',
    email: 'email',
    name: 'name'
};
exports.Audit_logScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    entity: 'entity',
    entity_id: 'entity_id',
    old_data: 'old_data',
    new_data: 'new_data',
    created_at: 'created_at'
};
exports.CountyScalarFieldEnum = {
    id: 'id',
    state_id: 'state_id',
    name: 'name',
    code: 'code',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.CustomerScalarFieldEnum = {
    id: 'id',
    nit: 'nit',
    first_name: 'first_name',
    middle_name: 'middle_name',
    last_name: 'last_name',
    second_last_name: 'second_last_name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    county_id: 'county_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.InvoiceScalarFieldEnum = {
    id: 'id',
    customer_id: 'customer_id',
    total: 'total',
    status: 'status',
    created_by: 'created_by',
    created_at: 'created_at'
};
exports.PermissionScalarFieldEnum = {
    id: 'id',
    code: 'code',
    description: 'description',
    created_at: 'created_at'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
};
exports.Role_permissionScalarFieldEnum = {
    role_id: 'role_id',
    permission_id: 'permission_id',
    created_at: 'created_at'
};
exports.StateScalarFieldEnum = {
    id: 'id',
    name: 'name',
    code: 'code',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    full_name: 'full_name',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.User_roleScalarFieldEnum = {
    user_id: 'user_id',
    role_id: 'role_id',
    created_at: 'created_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map