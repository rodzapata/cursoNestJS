import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly prov: "prov";
    readonly audit_log: "audit_log";
    readonly county: "county";
    readonly customer: "customer";
    readonly invoice: "invoice";
    readonly permission: "permission";
    readonly role: "role";
    readonly role_permission: "role_permission";
    readonly state: "state";
    readonly user: "user";
    readonly user_role: "user_role";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ProvScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
};
export type ProvScalarFieldEnum = (typeof ProvScalarFieldEnum)[keyof typeof ProvScalarFieldEnum];
export declare const Audit_logScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly action: "action";
    readonly entity: "entity";
    readonly entity_id: "entity_id";
    readonly old_data: "old_data";
    readonly new_data: "new_data";
    readonly created_at: "created_at";
};
export type Audit_logScalarFieldEnum = (typeof Audit_logScalarFieldEnum)[keyof typeof Audit_logScalarFieldEnum];
export declare const CountyScalarFieldEnum: {
    readonly id: "id";
    readonly state_id: "state_id";
    readonly name: "name";
    readonly code: "code";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CountyScalarFieldEnum = (typeof CountyScalarFieldEnum)[keyof typeof CountyScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly nit: "nit";
    readonly first_name: "first_name";
    readonly middle_name: "middle_name";
    readonly last_name: "last_name";
    readonly second_last_name: "second_last_name";
    readonly email: "email";
    readonly phone: "phone";
    readonly address: "address";
    readonly county_id: "county_id";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const InvoiceScalarFieldEnum: {
    readonly id: "id";
    readonly customer_id: "customer_id";
    readonly total: "total";
    readonly status: "status";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];
export declare const PermissionScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly created_at: "created_at";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const Role_permissionScalarFieldEnum: {
    readonly role_id: "role_id";
    readonly permission_id: "permission_id";
    readonly created_at: "created_at";
};
export type Role_permissionScalarFieldEnum = (typeof Role_permissionScalarFieldEnum)[keyof typeof Role_permissionScalarFieldEnum];
export declare const StateScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type StateScalarFieldEnum = (typeof StateScalarFieldEnum)[keyof typeof StateScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly full_name: "full_name";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const User_roleScalarFieldEnum: {
    readonly user_id: "user_id";
    readonly role_id: "role_id";
    readonly created_at: "created_at";
};
export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
