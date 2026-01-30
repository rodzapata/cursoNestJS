import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type role_permissionModel = runtime.Types.Result.DefaultSelection<Prisma.$role_permissionPayload>;
export type AggregateRole_permission = {
    _count: Role_permissionCountAggregateOutputType | null;
    _avg: Role_permissionAvgAggregateOutputType | null;
    _sum: Role_permissionSumAggregateOutputType | null;
    _min: Role_permissionMinAggregateOutputType | null;
    _max: Role_permissionMaxAggregateOutputType | null;
};
export type Role_permissionAvgAggregateOutputType = {
    role_id: number | null;
    permission_id: number | null;
};
export type Role_permissionSumAggregateOutputType = {
    role_id: number | null;
    permission_id: number | null;
};
export type Role_permissionMinAggregateOutputType = {
    role_id: number | null;
    permission_id: number | null;
    created_at: Date | null;
};
export type Role_permissionMaxAggregateOutputType = {
    role_id: number | null;
    permission_id: number | null;
    created_at: Date | null;
};
export type Role_permissionCountAggregateOutputType = {
    role_id: number;
    permission_id: number;
    created_at: number;
    _all: number;
};
export type Role_permissionAvgAggregateInputType = {
    role_id?: true;
    permission_id?: true;
};
export type Role_permissionSumAggregateInputType = {
    role_id?: true;
    permission_id?: true;
};
export type Role_permissionMinAggregateInputType = {
    role_id?: true;
    permission_id?: true;
    created_at?: true;
};
export type Role_permissionMaxAggregateInputType = {
    role_id?: true;
    permission_id?: true;
    created_at?: true;
};
export type Role_permissionCountAggregateInputType = {
    role_id?: true;
    permission_id?: true;
    created_at?: true;
    _all?: true;
};
export type Role_permissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionWhereInput;
    orderBy?: Prisma.role_permissionOrderByWithRelationInput | Prisma.role_permissionOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Role_permissionCountAggregateInputType;
    _avg?: Role_permissionAvgAggregateInputType;
    _sum?: Role_permissionSumAggregateInputType;
    _min?: Role_permissionMinAggregateInputType;
    _max?: Role_permissionMaxAggregateInputType;
};
export type GetRole_permissionAggregateType<T extends Role_permissionAggregateArgs> = {
    [P in keyof T & keyof AggregateRole_permission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRole_permission[P]> : Prisma.GetScalarType<T[P], AggregateRole_permission[P]>;
};
export type role_permissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionWhereInput;
    orderBy?: Prisma.role_permissionOrderByWithAggregationInput | Prisma.role_permissionOrderByWithAggregationInput[];
    by: Prisma.Role_permissionScalarFieldEnum[] | Prisma.Role_permissionScalarFieldEnum;
    having?: Prisma.role_permissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Role_permissionCountAggregateInputType | true;
    _avg?: Role_permissionAvgAggregateInputType;
    _sum?: Role_permissionSumAggregateInputType;
    _min?: Role_permissionMinAggregateInputType;
    _max?: Role_permissionMaxAggregateInputType;
};
export type Role_permissionGroupByOutputType = {
    role_id: number;
    permission_id: number;
    created_at: Date;
    _count: Role_permissionCountAggregateOutputType | null;
    _avg: Role_permissionAvgAggregateOutputType | null;
    _sum: Role_permissionSumAggregateOutputType | null;
    _min: Role_permissionMinAggregateOutputType | null;
    _max: Role_permissionMaxAggregateOutputType | null;
};
type GetRole_permissionGroupByPayload<T extends role_permissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Role_permissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Role_permissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Role_permissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Role_permissionGroupByOutputType[P]>;
}>>;
export type role_permissionWhereInput = {
    AND?: Prisma.role_permissionWhereInput | Prisma.role_permissionWhereInput[];
    OR?: Prisma.role_permissionWhereInput[];
    NOT?: Prisma.role_permissionWhereInput | Prisma.role_permissionWhereInput[];
    role_id?: Prisma.IntFilter<"role_permission"> | number;
    permission_id?: Prisma.IntFilter<"role_permission"> | number;
    created_at?: Prisma.DateTimeFilter<"role_permission"> | Date | string;
    permission?: Prisma.XOR<Prisma.PermissionScalarRelationFilter, Prisma.permissionWhereInput>;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.roleWhereInput>;
};
export type role_permissionOrderByWithRelationInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    permission?: Prisma.permissionOrderByWithRelationInput;
    role?: Prisma.roleOrderByWithRelationInput;
};
export type role_permissionWhereUniqueInput = Prisma.AtLeast<{
    role_id_permission_id?: Prisma.role_permissionRole_idPermission_idCompoundUniqueInput;
    AND?: Prisma.role_permissionWhereInput | Prisma.role_permissionWhereInput[];
    OR?: Prisma.role_permissionWhereInput[];
    NOT?: Prisma.role_permissionWhereInput | Prisma.role_permissionWhereInput[];
    role_id?: Prisma.IntFilter<"role_permission"> | number;
    permission_id?: Prisma.IntFilter<"role_permission"> | number;
    created_at?: Prisma.DateTimeFilter<"role_permission"> | Date | string;
    permission?: Prisma.XOR<Prisma.PermissionScalarRelationFilter, Prisma.permissionWhereInput>;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.roleWhereInput>;
}, "role_id_permission_id">;
export type role_permissionOrderByWithAggregationInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.role_permissionCountOrderByAggregateInput;
    _avg?: Prisma.role_permissionAvgOrderByAggregateInput;
    _max?: Prisma.role_permissionMaxOrderByAggregateInput;
    _min?: Prisma.role_permissionMinOrderByAggregateInput;
    _sum?: Prisma.role_permissionSumOrderByAggregateInput;
};
export type role_permissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.role_permissionScalarWhereWithAggregatesInput | Prisma.role_permissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.role_permissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.role_permissionScalarWhereWithAggregatesInput | Prisma.role_permissionScalarWhereWithAggregatesInput[];
    role_id?: Prisma.IntWithAggregatesFilter<"role_permission"> | number;
    permission_id?: Prisma.IntWithAggregatesFilter<"role_permission"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"role_permission"> | Date | string;
};
export type role_permissionCreateInput = {
    created_at?: Date | string;
    permission: Prisma.permissionCreateNestedOneWithoutRole_permissionInput;
    role: Prisma.roleCreateNestedOneWithoutRole_permissionInput;
};
export type role_permissionUncheckedCreateInput = {
    role_id: number;
    permission_id: number;
    created_at?: Date | string;
};
export type role_permissionUpdateInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permission?: Prisma.permissionUpdateOneRequiredWithoutRole_permissionNestedInput;
    role?: Prisma.roleUpdateOneRequiredWithoutRole_permissionNestedInput;
};
export type role_permissionUncheckedUpdateInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type role_permissionCreateManyInput = {
    role_id: number;
    permission_id: number;
    created_at?: Date | string;
};
export type role_permissionUpdateManyMutationInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type role_permissionUncheckedUpdateManyInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Role_permissionListRelationFilter = {
    every?: Prisma.role_permissionWhereInput;
    some?: Prisma.role_permissionWhereInput;
    none?: Prisma.role_permissionWhereInput;
};
export type role_permissionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type role_permissionRole_idPermission_idCompoundUniqueInput = {
    role_id: number;
    permission_id: number;
};
export type role_permissionCountOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type role_permissionAvgOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type role_permissionMaxOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type role_permissionMinOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type role_permissionSumOrderByAggregateInput = {
    role_id?: Prisma.SortOrder;
    permission_id?: Prisma.SortOrder;
};
export type role_permissionCreateNestedManyWithoutPermissionInput = {
    create?: Prisma.XOR<Prisma.role_permissionCreateWithoutPermissionInput, Prisma.role_permissionUncheckedCreateWithoutPermissionInput> | Prisma.role_permissionCreateWithoutPermissionInput[] | Prisma.role_permissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.role_permissionCreateOrConnectWithoutPermissionInput | Prisma.role_permissionCreateOrConnectWithoutPermissionInput[];
    createMany?: Prisma.role_permissionCreateManyPermissionInputEnvelope;
    connect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
};
export type role_permissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: Prisma.XOR<Prisma.role_permissionCreateWithoutPermissionInput, Prisma.role_permissionUncheckedCreateWithoutPermissionInput> | Prisma.role_permissionCreateWithoutPermissionInput[] | Prisma.role_permissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.role_permissionCreateOrConnectWithoutPermissionInput | Prisma.role_permissionCreateOrConnectWithoutPermissionInput[];
    createMany?: Prisma.role_permissionCreateManyPermissionInputEnvelope;
    connect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
};
export type role_permissionUpdateManyWithoutPermissionNestedInput = {
    create?: Prisma.XOR<Prisma.role_permissionCreateWithoutPermissionInput, Prisma.role_permissionUncheckedCreateWithoutPermissionInput> | Prisma.role_permissionCreateWithoutPermissionInput[] | Prisma.role_permissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.role_permissionCreateOrConnectWithoutPermissionInput | Prisma.role_permissionCreateOrConnectWithoutPermissionInput[];
    upsert?: Prisma.role_permissionUpsertWithWhereUniqueWithoutPermissionInput | Prisma.role_permissionUpsertWithWhereUniqueWithoutPermissionInput[];
    createMany?: Prisma.role_permissionCreateManyPermissionInputEnvelope;
    set?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    disconnect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    delete?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    connect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    update?: Prisma.role_permissionUpdateWithWhereUniqueWithoutPermissionInput | Prisma.role_permissionUpdateWithWhereUniqueWithoutPermissionInput[];
    updateMany?: Prisma.role_permissionUpdateManyWithWhereWithoutPermissionInput | Prisma.role_permissionUpdateManyWithWhereWithoutPermissionInput[];
    deleteMany?: Prisma.role_permissionScalarWhereInput | Prisma.role_permissionScalarWhereInput[];
};
export type role_permissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: Prisma.XOR<Prisma.role_permissionCreateWithoutPermissionInput, Prisma.role_permissionUncheckedCreateWithoutPermissionInput> | Prisma.role_permissionCreateWithoutPermissionInput[] | Prisma.role_permissionUncheckedCreateWithoutPermissionInput[];
    connectOrCreate?: Prisma.role_permissionCreateOrConnectWithoutPermissionInput | Prisma.role_permissionCreateOrConnectWithoutPermissionInput[];
    upsert?: Prisma.role_permissionUpsertWithWhereUniqueWithoutPermissionInput | Prisma.role_permissionUpsertWithWhereUniqueWithoutPermissionInput[];
    createMany?: Prisma.role_permissionCreateManyPermissionInputEnvelope;
    set?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    disconnect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    delete?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    connect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    update?: Prisma.role_permissionUpdateWithWhereUniqueWithoutPermissionInput | Prisma.role_permissionUpdateWithWhereUniqueWithoutPermissionInput[];
    updateMany?: Prisma.role_permissionUpdateManyWithWhereWithoutPermissionInput | Prisma.role_permissionUpdateManyWithWhereWithoutPermissionInput[];
    deleteMany?: Prisma.role_permissionScalarWhereInput | Prisma.role_permissionScalarWhereInput[];
};
export type role_permissionCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.role_permissionCreateWithoutRoleInput, Prisma.role_permissionUncheckedCreateWithoutRoleInput> | Prisma.role_permissionCreateWithoutRoleInput[] | Prisma.role_permissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.role_permissionCreateOrConnectWithoutRoleInput | Prisma.role_permissionCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.role_permissionCreateManyRoleInputEnvelope;
    connect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
};
export type role_permissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.role_permissionCreateWithoutRoleInput, Prisma.role_permissionUncheckedCreateWithoutRoleInput> | Prisma.role_permissionCreateWithoutRoleInput[] | Prisma.role_permissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.role_permissionCreateOrConnectWithoutRoleInput | Prisma.role_permissionCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.role_permissionCreateManyRoleInputEnvelope;
    connect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
};
export type role_permissionUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.role_permissionCreateWithoutRoleInput, Prisma.role_permissionUncheckedCreateWithoutRoleInput> | Prisma.role_permissionCreateWithoutRoleInput[] | Prisma.role_permissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.role_permissionCreateOrConnectWithoutRoleInput | Prisma.role_permissionCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.role_permissionUpsertWithWhereUniqueWithoutRoleInput | Prisma.role_permissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.role_permissionCreateManyRoleInputEnvelope;
    set?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    disconnect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    delete?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    connect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    update?: Prisma.role_permissionUpdateWithWhereUniqueWithoutRoleInput | Prisma.role_permissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.role_permissionUpdateManyWithWhereWithoutRoleInput | Prisma.role_permissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.role_permissionScalarWhereInput | Prisma.role_permissionScalarWhereInput[];
};
export type role_permissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.role_permissionCreateWithoutRoleInput, Prisma.role_permissionUncheckedCreateWithoutRoleInput> | Prisma.role_permissionCreateWithoutRoleInput[] | Prisma.role_permissionUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.role_permissionCreateOrConnectWithoutRoleInput | Prisma.role_permissionCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.role_permissionUpsertWithWhereUniqueWithoutRoleInput | Prisma.role_permissionUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.role_permissionCreateManyRoleInputEnvelope;
    set?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    disconnect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    delete?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    connect?: Prisma.role_permissionWhereUniqueInput | Prisma.role_permissionWhereUniqueInput[];
    update?: Prisma.role_permissionUpdateWithWhereUniqueWithoutRoleInput | Prisma.role_permissionUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.role_permissionUpdateManyWithWhereWithoutRoleInput | Prisma.role_permissionUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.role_permissionScalarWhereInput | Prisma.role_permissionScalarWhereInput[];
};
export type role_permissionCreateWithoutPermissionInput = {
    created_at?: Date | string;
    role: Prisma.roleCreateNestedOneWithoutRole_permissionInput;
};
export type role_permissionUncheckedCreateWithoutPermissionInput = {
    role_id: number;
    created_at?: Date | string;
};
export type role_permissionCreateOrConnectWithoutPermissionInput = {
    where: Prisma.role_permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_permissionCreateWithoutPermissionInput, Prisma.role_permissionUncheckedCreateWithoutPermissionInput>;
};
export type role_permissionCreateManyPermissionInputEnvelope = {
    data: Prisma.role_permissionCreateManyPermissionInput | Prisma.role_permissionCreateManyPermissionInput[];
    skipDuplicates?: boolean;
};
export type role_permissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: Prisma.role_permissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.role_permissionUpdateWithoutPermissionInput, Prisma.role_permissionUncheckedUpdateWithoutPermissionInput>;
    create: Prisma.XOR<Prisma.role_permissionCreateWithoutPermissionInput, Prisma.role_permissionUncheckedCreateWithoutPermissionInput>;
};
export type role_permissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: Prisma.role_permissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.role_permissionUpdateWithoutPermissionInput, Prisma.role_permissionUncheckedUpdateWithoutPermissionInput>;
};
export type role_permissionUpdateManyWithWhereWithoutPermissionInput = {
    where: Prisma.role_permissionScalarWhereInput;
    data: Prisma.XOR<Prisma.role_permissionUpdateManyMutationInput, Prisma.role_permissionUncheckedUpdateManyWithoutPermissionInput>;
};
export type role_permissionScalarWhereInput = {
    AND?: Prisma.role_permissionScalarWhereInput | Prisma.role_permissionScalarWhereInput[];
    OR?: Prisma.role_permissionScalarWhereInput[];
    NOT?: Prisma.role_permissionScalarWhereInput | Prisma.role_permissionScalarWhereInput[];
    role_id?: Prisma.IntFilter<"role_permission"> | number;
    permission_id?: Prisma.IntFilter<"role_permission"> | number;
    created_at?: Prisma.DateTimeFilter<"role_permission"> | Date | string;
};
export type role_permissionCreateWithoutRoleInput = {
    created_at?: Date | string;
    permission: Prisma.permissionCreateNestedOneWithoutRole_permissionInput;
};
export type role_permissionUncheckedCreateWithoutRoleInput = {
    permission_id: number;
    created_at?: Date | string;
};
export type role_permissionCreateOrConnectWithoutRoleInput = {
    where: Prisma.role_permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_permissionCreateWithoutRoleInput, Prisma.role_permissionUncheckedCreateWithoutRoleInput>;
};
export type role_permissionCreateManyRoleInputEnvelope = {
    data: Prisma.role_permissionCreateManyRoleInput | Prisma.role_permissionCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type role_permissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.role_permissionWhereUniqueInput;
    update: Prisma.XOR<Prisma.role_permissionUpdateWithoutRoleInput, Prisma.role_permissionUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.role_permissionCreateWithoutRoleInput, Prisma.role_permissionUncheckedCreateWithoutRoleInput>;
};
export type role_permissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.role_permissionWhereUniqueInput;
    data: Prisma.XOR<Prisma.role_permissionUpdateWithoutRoleInput, Prisma.role_permissionUncheckedUpdateWithoutRoleInput>;
};
export type role_permissionUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.role_permissionScalarWhereInput;
    data: Prisma.XOR<Prisma.role_permissionUpdateManyMutationInput, Prisma.role_permissionUncheckedUpdateManyWithoutRoleInput>;
};
export type role_permissionCreateManyPermissionInput = {
    role_id: number;
    created_at?: Date | string;
};
export type role_permissionUpdateWithoutPermissionInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.roleUpdateOneRequiredWithoutRole_permissionNestedInput;
};
export type role_permissionUncheckedUpdateWithoutPermissionInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type role_permissionUncheckedUpdateManyWithoutPermissionInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type role_permissionCreateManyRoleInput = {
    permission_id: number;
    created_at?: Date | string;
};
export type role_permissionUpdateWithoutRoleInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    permission?: Prisma.permissionUpdateOneRequiredWithoutRole_permissionNestedInput;
};
export type role_permissionUncheckedUpdateWithoutRoleInput = {
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type role_permissionUncheckedUpdateManyWithoutRoleInput = {
    permission_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type role_permissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    permission_id?: boolean;
    created_at?: boolean;
    permission?: boolean | Prisma.permissionDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role_permission"]>;
export type role_permissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    permission_id?: boolean;
    created_at?: boolean;
    permission?: boolean | Prisma.permissionDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role_permission"]>;
export type role_permissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    role_id?: boolean;
    permission_id?: boolean;
    created_at?: boolean;
    permission?: boolean | Prisma.permissionDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role_permission"]>;
export type role_permissionSelectScalar = {
    role_id?: boolean;
    permission_id?: boolean;
    created_at?: boolean;
};
export type role_permissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"role_id" | "permission_id" | "created_at", ExtArgs["result"]["role_permission"]>;
export type role_permissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permission?: boolean | Prisma.permissionDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
};
export type role_permissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permission?: boolean | Prisma.permissionDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
};
export type role_permissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permission?: boolean | Prisma.permissionDefaultArgs<ExtArgs>;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
};
export type $role_permissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "role_permission";
    objects: {
        permission: Prisma.$permissionPayload<ExtArgs>;
        role: Prisma.$rolePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        role_id: number;
        permission_id: number;
        created_at: Date;
    }, ExtArgs["result"]["role_permission"]>;
    composites: {};
};
export type role_permissionGetPayload<S extends boolean | null | undefined | role_permissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$role_permissionPayload, S>;
export type role_permissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<role_permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Role_permissionCountAggregateInputType | true;
};
export interface role_permissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['role_permission'];
        meta: {
            name: 'role_permission';
        };
    };
    findUnique<T extends role_permissionFindUniqueArgs>(args: Prisma.SelectSubset<T, role_permissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__role_permissionClient<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends role_permissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, role_permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__role_permissionClient<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends role_permissionFindFirstArgs>(args?: Prisma.SelectSubset<T, role_permissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__role_permissionClient<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends role_permissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, role_permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__role_permissionClient<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends role_permissionFindManyArgs>(args?: Prisma.SelectSubset<T, role_permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends role_permissionCreateArgs>(args: Prisma.SelectSubset<T, role_permissionCreateArgs<ExtArgs>>): Prisma.Prisma__role_permissionClient<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends role_permissionCreateManyArgs>(args?: Prisma.SelectSubset<T, role_permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends role_permissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, role_permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends role_permissionDeleteArgs>(args: Prisma.SelectSubset<T, role_permissionDeleteArgs<ExtArgs>>): Prisma.Prisma__role_permissionClient<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends role_permissionUpdateArgs>(args: Prisma.SelectSubset<T, role_permissionUpdateArgs<ExtArgs>>): Prisma.Prisma__role_permissionClient<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends role_permissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, role_permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends role_permissionUpdateManyArgs>(args: Prisma.SelectSubset<T, role_permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends role_permissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, role_permissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends role_permissionUpsertArgs>(args: Prisma.SelectSubset<T, role_permissionUpsertArgs<ExtArgs>>): Prisma.Prisma__role_permissionClient<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends role_permissionCountArgs>(args?: Prisma.Subset<T, role_permissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Role_permissionCountAggregateOutputType> : number>;
    aggregate<T extends Role_permissionAggregateArgs>(args: Prisma.Subset<T, Role_permissionAggregateArgs>): Prisma.PrismaPromise<GetRole_permissionAggregateType<T>>;
    groupBy<T extends role_permissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: role_permissionGroupByArgs['orderBy'];
    } : {
        orderBy?: role_permissionGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, role_permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRole_permissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: role_permissionFieldRefs;
}
export interface Prisma__role_permissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    permission<T extends Prisma.permissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.permissionDefaultArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    role<T extends Prisma.roleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.roleDefaultArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface role_permissionFieldRefs {
    readonly role_id: Prisma.FieldRef<"role_permission", 'Int'>;
    readonly permission_id: Prisma.FieldRef<"role_permission", 'Int'>;
    readonly created_at: Prisma.FieldRef<"role_permission", 'DateTime'>;
}
export type role_permissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    where: Prisma.role_permissionWhereUniqueInput;
};
export type role_permissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    where: Prisma.role_permissionWhereUniqueInput;
};
export type role_permissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    where?: Prisma.role_permissionWhereInput;
    orderBy?: Prisma.role_permissionOrderByWithRelationInput | Prisma.role_permissionOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Role_permissionScalarFieldEnum | Prisma.Role_permissionScalarFieldEnum[];
};
export type role_permissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    where?: Prisma.role_permissionWhereInput;
    orderBy?: Prisma.role_permissionOrderByWithRelationInput | Prisma.role_permissionOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Role_permissionScalarFieldEnum | Prisma.Role_permissionScalarFieldEnum[];
};
export type role_permissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    where?: Prisma.role_permissionWhereInput;
    orderBy?: Prisma.role_permissionOrderByWithRelationInput | Prisma.role_permissionOrderByWithRelationInput[];
    cursor?: Prisma.role_permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Role_permissionScalarFieldEnum | Prisma.Role_permissionScalarFieldEnum[];
};
export type role_permissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.role_permissionCreateInput, Prisma.role_permissionUncheckedCreateInput>;
};
export type role_permissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.role_permissionCreateManyInput | Prisma.role_permissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type role_permissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    data: Prisma.role_permissionCreateManyInput | Prisma.role_permissionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.role_permissionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type role_permissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.role_permissionUpdateInput, Prisma.role_permissionUncheckedUpdateInput>;
    where: Prisma.role_permissionWhereUniqueInput;
};
export type role_permissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.role_permissionUpdateManyMutationInput, Prisma.role_permissionUncheckedUpdateManyInput>;
    where?: Prisma.role_permissionWhereInput;
    limit?: number;
};
export type role_permissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.role_permissionUpdateManyMutationInput, Prisma.role_permissionUncheckedUpdateManyInput>;
    where?: Prisma.role_permissionWhereInput;
    limit?: number;
    include?: Prisma.role_permissionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type role_permissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    where: Prisma.role_permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.role_permissionCreateInput, Prisma.role_permissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.role_permissionUpdateInput, Prisma.role_permissionUncheckedUpdateInput>;
};
export type role_permissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
    where: Prisma.role_permissionWhereUniqueInput;
};
export type role_permissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionWhereInput;
    limit?: number;
};
export type role_permissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.role_permissionSelect<ExtArgs> | null;
    omit?: Prisma.role_permissionOmit<ExtArgs> | null;
    include?: Prisma.role_permissionInclude<ExtArgs> | null;
};
export {};
