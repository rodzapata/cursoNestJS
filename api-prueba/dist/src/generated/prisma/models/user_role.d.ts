import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type user_roleModel = runtime.Types.Result.DefaultSelection<Prisma.$user_rolePayload>;
export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null;
    _avg: User_roleAvgAggregateOutputType | null;
    _sum: User_roleSumAggregateOutputType | null;
    _min: User_roleMinAggregateOutputType | null;
    _max: User_roleMaxAggregateOutputType | null;
};
export type User_roleAvgAggregateOutputType = {
    user_id: number | null;
    role_id: number | null;
};
export type User_roleSumAggregateOutputType = {
    user_id: number | null;
    role_id: number | null;
};
export type User_roleMinAggregateOutputType = {
    user_id: number | null;
    role_id: number | null;
    created_at: Date | null;
};
export type User_roleMaxAggregateOutputType = {
    user_id: number | null;
    role_id: number | null;
    created_at: Date | null;
};
export type User_roleCountAggregateOutputType = {
    user_id: number;
    role_id: number;
    created_at: number;
    _all: number;
};
export type User_roleAvgAggregateInputType = {
    user_id?: true;
    role_id?: true;
};
export type User_roleSumAggregateInputType = {
    user_id?: true;
    role_id?: true;
};
export type User_roleMinAggregateInputType = {
    user_id?: true;
    role_id?: true;
    created_at?: true;
};
export type User_roleMaxAggregateInputType = {
    user_id?: true;
    role_id?: true;
    created_at?: true;
};
export type User_roleCountAggregateInputType = {
    user_id?: true;
    role_id?: true;
    created_at?: true;
    _all?: true;
};
export type User_roleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_roleWhereInput;
    orderBy?: Prisma.user_roleOrderByWithRelationInput | Prisma.user_roleOrderByWithRelationInput[];
    cursor?: Prisma.user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_roleCountAggregateInputType;
    _avg?: User_roleAvgAggregateInputType;
    _sum?: User_roleSumAggregateInputType;
    _min?: User_roleMinAggregateInputType;
    _max?: User_roleMaxAggregateInputType;
};
export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_role[P]> : Prisma.GetScalarType<T[P], AggregateUser_role[P]>;
};
export type user_roleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_roleWhereInput;
    orderBy?: Prisma.user_roleOrderByWithAggregationInput | Prisma.user_roleOrderByWithAggregationInput[];
    by: Prisma.User_roleScalarFieldEnum[] | Prisma.User_roleScalarFieldEnum;
    having?: Prisma.user_roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_roleCountAggregateInputType | true;
    _avg?: User_roleAvgAggregateInputType;
    _sum?: User_roleSumAggregateInputType;
    _min?: User_roleMinAggregateInputType;
    _max?: User_roleMaxAggregateInputType;
};
export type User_roleGroupByOutputType = {
    user_id: number;
    role_id: number;
    created_at: Date;
    _count: User_roleCountAggregateOutputType | null;
    _avg: User_roleAvgAggregateOutputType | null;
    _sum: User_roleSumAggregateOutputType | null;
    _min: User_roleMinAggregateOutputType | null;
    _max: User_roleMaxAggregateOutputType | null;
};
type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_roleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_roleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_roleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_roleGroupByOutputType[P]>;
}>>;
export type user_roleWhereInput = {
    AND?: Prisma.user_roleWhereInput | Prisma.user_roleWhereInput[];
    OR?: Prisma.user_roleWhereInput[];
    NOT?: Prisma.user_roleWhereInput | Prisma.user_roleWhereInput[];
    user_id?: Prisma.IntFilter<"user_role"> | number;
    role_id?: Prisma.IntFilter<"user_role"> | number;
    created_at?: Prisma.DateTimeFilter<"user_role"> | Date | string;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.roleWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
};
export type user_roleOrderByWithRelationInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    role?: Prisma.roleOrderByWithRelationInput;
    user?: Prisma.userOrderByWithRelationInput;
};
export type user_roleWhereUniqueInput = Prisma.AtLeast<{
    user_id_role_id?: Prisma.user_roleUser_idRole_idCompoundUniqueInput;
    AND?: Prisma.user_roleWhereInput | Prisma.user_roleWhereInput[];
    OR?: Prisma.user_roleWhereInput[];
    NOT?: Prisma.user_roleWhereInput | Prisma.user_roleWhereInput[];
    user_id?: Prisma.IntFilter<"user_role"> | number;
    role_id?: Prisma.IntFilter<"user_role"> | number;
    created_at?: Prisma.DateTimeFilter<"user_role"> | Date | string;
    role?: Prisma.XOR<Prisma.RoleScalarRelationFilter, Prisma.roleWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
}, "user_id_role_id">;
export type user_roleOrderByWithAggregationInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.user_roleCountOrderByAggregateInput;
    _avg?: Prisma.user_roleAvgOrderByAggregateInput;
    _max?: Prisma.user_roleMaxOrderByAggregateInput;
    _min?: Prisma.user_roleMinOrderByAggregateInput;
    _sum?: Prisma.user_roleSumOrderByAggregateInput;
};
export type user_roleScalarWhereWithAggregatesInput = {
    AND?: Prisma.user_roleScalarWhereWithAggregatesInput | Prisma.user_roleScalarWhereWithAggregatesInput[];
    OR?: Prisma.user_roleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.user_roleScalarWhereWithAggregatesInput | Prisma.user_roleScalarWhereWithAggregatesInput[];
    user_id?: Prisma.IntWithAggregatesFilter<"user_role"> | number;
    role_id?: Prisma.IntWithAggregatesFilter<"user_role"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"user_role"> | Date | string;
};
export type user_roleCreateInput = {
    created_at?: Date | string;
    role: Prisma.roleCreateNestedOneWithoutUser_roleInput;
    user: Prisma.userCreateNestedOneWithoutUser_roleInput;
};
export type user_roleUncheckedCreateInput = {
    user_id: number;
    role_id: number;
    created_at?: Date | string;
};
export type user_roleUpdateInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.roleUpdateOneRequiredWithoutUser_roleNestedInput;
    user?: Prisma.userUpdateOneRequiredWithoutUser_roleNestedInput;
};
export type user_roleUncheckedUpdateInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_roleCreateManyInput = {
    user_id: number;
    role_id: number;
    created_at?: Date | string;
};
export type user_roleUpdateManyMutationInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_roleUncheckedUpdateManyInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type User_roleListRelationFilter = {
    every?: Prisma.user_roleWhereInput;
    some?: Prisma.user_roleWhereInput;
    none?: Prisma.user_roleWhereInput;
};
export type user_roleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type user_roleUser_idRole_idCompoundUniqueInput = {
    user_id: number;
    role_id: number;
};
export type user_roleCountOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_roleAvgOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type user_roleMaxOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_roleMinOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_roleSumOrderByAggregateInput = {
    user_id?: Prisma.SortOrder;
    role_id?: Prisma.SortOrder;
};
export type user_roleCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.user_roleCreateWithoutRoleInput, Prisma.user_roleUncheckedCreateWithoutRoleInput> | Prisma.user_roleCreateWithoutRoleInput[] | Prisma.user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.user_roleCreateOrConnectWithoutRoleInput | Prisma.user_roleCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.user_roleCreateManyRoleInputEnvelope;
    connect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
};
export type user_roleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: Prisma.XOR<Prisma.user_roleCreateWithoutRoleInput, Prisma.user_roleUncheckedCreateWithoutRoleInput> | Prisma.user_roleCreateWithoutRoleInput[] | Prisma.user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.user_roleCreateOrConnectWithoutRoleInput | Prisma.user_roleCreateOrConnectWithoutRoleInput[];
    createMany?: Prisma.user_roleCreateManyRoleInputEnvelope;
    connect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
};
export type user_roleUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.user_roleCreateWithoutRoleInput, Prisma.user_roleUncheckedCreateWithoutRoleInput> | Prisma.user_roleCreateWithoutRoleInput[] | Prisma.user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.user_roleCreateOrConnectWithoutRoleInput | Prisma.user_roleCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.user_roleUpsertWithWhereUniqueWithoutRoleInput | Prisma.user_roleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.user_roleCreateManyRoleInputEnvelope;
    set?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    disconnect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    delete?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    connect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    update?: Prisma.user_roleUpdateWithWhereUniqueWithoutRoleInput | Prisma.user_roleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.user_roleUpdateManyWithWhereWithoutRoleInput | Prisma.user_roleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.user_roleScalarWhereInput | Prisma.user_roleScalarWhereInput[];
};
export type user_roleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: Prisma.XOR<Prisma.user_roleCreateWithoutRoleInput, Prisma.user_roleUncheckedCreateWithoutRoleInput> | Prisma.user_roleCreateWithoutRoleInput[] | Prisma.user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: Prisma.user_roleCreateOrConnectWithoutRoleInput | Prisma.user_roleCreateOrConnectWithoutRoleInput[];
    upsert?: Prisma.user_roleUpsertWithWhereUniqueWithoutRoleInput | Prisma.user_roleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: Prisma.user_roleCreateManyRoleInputEnvelope;
    set?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    disconnect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    delete?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    connect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    update?: Prisma.user_roleUpdateWithWhereUniqueWithoutRoleInput | Prisma.user_roleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: Prisma.user_roleUpdateManyWithWhereWithoutRoleInput | Prisma.user_roleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: Prisma.user_roleScalarWhereInput | Prisma.user_roleScalarWhereInput[];
};
export type user_roleCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.user_roleCreateWithoutUserInput, Prisma.user_roleUncheckedCreateWithoutUserInput> | Prisma.user_roleCreateWithoutUserInput[] | Prisma.user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.user_roleCreateOrConnectWithoutUserInput | Prisma.user_roleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.user_roleCreateManyUserInputEnvelope;
    connect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
};
export type user_roleUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.user_roleCreateWithoutUserInput, Prisma.user_roleUncheckedCreateWithoutUserInput> | Prisma.user_roleCreateWithoutUserInput[] | Prisma.user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.user_roleCreateOrConnectWithoutUserInput | Prisma.user_roleCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.user_roleCreateManyUserInputEnvelope;
    connect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
};
export type user_roleUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.user_roleCreateWithoutUserInput, Prisma.user_roleUncheckedCreateWithoutUserInput> | Prisma.user_roleCreateWithoutUserInput[] | Prisma.user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.user_roleCreateOrConnectWithoutUserInput | Prisma.user_roleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.user_roleUpsertWithWhereUniqueWithoutUserInput | Prisma.user_roleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.user_roleCreateManyUserInputEnvelope;
    set?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    disconnect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    delete?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    connect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    update?: Prisma.user_roleUpdateWithWhereUniqueWithoutUserInput | Prisma.user_roleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.user_roleUpdateManyWithWhereWithoutUserInput | Prisma.user_roleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.user_roleScalarWhereInput | Prisma.user_roleScalarWhereInput[];
};
export type user_roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.user_roleCreateWithoutUserInput, Prisma.user_roleUncheckedCreateWithoutUserInput> | Prisma.user_roleCreateWithoutUserInput[] | Prisma.user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.user_roleCreateOrConnectWithoutUserInput | Prisma.user_roleCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.user_roleUpsertWithWhereUniqueWithoutUserInput | Prisma.user_roleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.user_roleCreateManyUserInputEnvelope;
    set?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    disconnect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    delete?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    connect?: Prisma.user_roleWhereUniqueInput | Prisma.user_roleWhereUniqueInput[];
    update?: Prisma.user_roleUpdateWithWhereUniqueWithoutUserInput | Prisma.user_roleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.user_roleUpdateManyWithWhereWithoutUserInput | Prisma.user_roleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.user_roleScalarWhereInput | Prisma.user_roleScalarWhereInput[];
};
export type user_roleCreateWithoutRoleInput = {
    created_at?: Date | string;
    user: Prisma.userCreateNestedOneWithoutUser_roleInput;
};
export type user_roleUncheckedCreateWithoutRoleInput = {
    user_id: number;
    created_at?: Date | string;
};
export type user_roleCreateOrConnectWithoutRoleInput = {
    where: Prisma.user_roleWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_roleCreateWithoutRoleInput, Prisma.user_roleUncheckedCreateWithoutRoleInput>;
};
export type user_roleCreateManyRoleInputEnvelope = {
    data: Prisma.user_roleCreateManyRoleInput | Prisma.user_roleCreateManyRoleInput[];
    skipDuplicates?: boolean;
};
export type user_roleUpsertWithWhereUniqueWithoutRoleInput = {
    where: Prisma.user_roleWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_roleUpdateWithoutRoleInput, Prisma.user_roleUncheckedUpdateWithoutRoleInput>;
    create: Prisma.XOR<Prisma.user_roleCreateWithoutRoleInput, Prisma.user_roleUncheckedCreateWithoutRoleInput>;
};
export type user_roleUpdateWithWhereUniqueWithoutRoleInput = {
    where: Prisma.user_roleWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_roleUpdateWithoutRoleInput, Prisma.user_roleUncheckedUpdateWithoutRoleInput>;
};
export type user_roleUpdateManyWithWhereWithoutRoleInput = {
    where: Prisma.user_roleScalarWhereInput;
    data: Prisma.XOR<Prisma.user_roleUpdateManyMutationInput, Prisma.user_roleUncheckedUpdateManyWithoutRoleInput>;
};
export type user_roleScalarWhereInput = {
    AND?: Prisma.user_roleScalarWhereInput | Prisma.user_roleScalarWhereInput[];
    OR?: Prisma.user_roleScalarWhereInput[];
    NOT?: Prisma.user_roleScalarWhereInput | Prisma.user_roleScalarWhereInput[];
    user_id?: Prisma.IntFilter<"user_role"> | number;
    role_id?: Prisma.IntFilter<"user_role"> | number;
    created_at?: Prisma.DateTimeFilter<"user_role"> | Date | string;
};
export type user_roleCreateWithoutUserInput = {
    created_at?: Date | string;
    role: Prisma.roleCreateNestedOneWithoutUser_roleInput;
};
export type user_roleUncheckedCreateWithoutUserInput = {
    role_id: number;
    created_at?: Date | string;
};
export type user_roleCreateOrConnectWithoutUserInput = {
    where: Prisma.user_roleWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_roleCreateWithoutUserInput, Prisma.user_roleUncheckedCreateWithoutUserInput>;
};
export type user_roleCreateManyUserInputEnvelope = {
    data: Prisma.user_roleCreateManyUserInput | Prisma.user_roleCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type user_roleUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.user_roleWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_roleUpdateWithoutUserInput, Prisma.user_roleUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.user_roleCreateWithoutUserInput, Prisma.user_roleUncheckedCreateWithoutUserInput>;
};
export type user_roleUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.user_roleWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_roleUpdateWithoutUserInput, Prisma.user_roleUncheckedUpdateWithoutUserInput>;
};
export type user_roleUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.user_roleScalarWhereInput;
    data: Prisma.XOR<Prisma.user_roleUpdateManyMutationInput, Prisma.user_roleUncheckedUpdateManyWithoutUserInput>;
};
export type user_roleCreateManyRoleInput = {
    user_id: number;
    created_at?: Date | string;
};
export type user_roleUpdateWithoutRoleInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.userUpdateOneRequiredWithoutUser_roleNestedInput;
};
export type user_roleUncheckedUpdateWithoutRoleInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_roleUncheckedUpdateManyWithoutRoleInput = {
    user_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_roleCreateManyUserInput = {
    role_id: number;
    created_at?: Date | string;
};
export type user_roleUpdateWithoutUserInput = {
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role?: Prisma.roleUpdateOneRequiredWithoutUser_roleNestedInput;
};
export type user_roleUncheckedUpdateWithoutUserInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_roleUncheckedUpdateManyWithoutUserInput = {
    role_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_roleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    role_id?: boolean;
    created_at?: boolean;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_role"]>;
export type user_roleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    role_id?: boolean;
    created_at?: boolean;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_role"]>;
export type user_roleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    user_id?: boolean;
    role_id?: boolean;
    created_at?: boolean;
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_role"]>;
export type user_roleSelectScalar = {
    user_id?: boolean;
    role_id?: boolean;
    created_at?: boolean;
};
export type user_roleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"user_id" | "role_id" | "created_at", ExtArgs["result"]["user_role"]>;
export type user_roleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type user_roleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type user_roleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role?: boolean | Prisma.roleDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type $user_rolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user_role";
    objects: {
        role: Prisma.$rolePayload<ExtArgs>;
        user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        user_id: number;
        role_id: number;
        created_at: Date;
    }, ExtArgs["result"]["user_role"]>;
    composites: {};
};
export type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$user_rolePayload, S>;
export type user_roleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<user_roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_roleCountAggregateInputType | true;
};
export interface user_roleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user_role'];
        meta: {
            name: 'user_role';
        };
    };
    findUnique<T extends user_roleFindUniqueArgs>(args: Prisma.SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__user_roleClient<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_roleClient<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends user_roleFindFirstArgs>(args?: Prisma.SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>): Prisma.Prisma__user_roleClient<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_roleClient<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends user_roleFindManyArgs>(args?: Prisma.SelectSubset<T, user_roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends user_roleCreateArgs>(args: Prisma.SelectSubset<T, user_roleCreateArgs<ExtArgs>>): Prisma.Prisma__user_roleClient<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends user_roleCreateManyArgs>(args?: Prisma.SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends user_roleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, user_roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends user_roleDeleteArgs>(args: Prisma.SelectSubset<T, user_roleDeleteArgs<ExtArgs>>): Prisma.Prisma__user_roleClient<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends user_roleUpdateArgs>(args: Prisma.SelectSubset<T, user_roleUpdateArgs<ExtArgs>>): Prisma.Prisma__user_roleClient<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends user_roleDeleteManyArgs>(args?: Prisma.SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends user_roleUpdateManyArgs>(args: Prisma.SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends user_roleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, user_roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends user_roleUpsertArgs>(args: Prisma.SelectSubset<T, user_roleUpsertArgs<ExtArgs>>): Prisma.Prisma__user_roleClient<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends user_roleCountArgs>(args?: Prisma.Subset<T, user_roleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_roleCountAggregateOutputType> : number>;
    aggregate<T extends User_roleAggregateArgs>(args: Prisma.Subset<T, User_roleAggregateArgs>): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>;
    groupBy<T extends user_roleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: user_roleGroupByArgs['orderBy'];
    } : {
        orderBy?: user_roleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: user_roleFieldRefs;
}
export interface Prisma__user_roleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role<T extends Prisma.roleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.roleDefaultArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface user_roleFieldRefs {
    readonly user_id: Prisma.FieldRef<"user_role", 'Int'>;
    readonly role_id: Prisma.FieldRef<"user_role", 'Int'>;
    readonly created_at: Prisma.FieldRef<"user_role", 'DateTime'>;
}
export type user_roleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    where: Prisma.user_roleWhereUniqueInput;
};
export type user_roleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    where: Prisma.user_roleWhereUniqueInput;
};
export type user_roleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    where?: Prisma.user_roleWhereInput;
    orderBy?: Prisma.user_roleOrderByWithRelationInput | Prisma.user_roleOrderByWithRelationInput[];
    cursor?: Prisma.user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_roleScalarFieldEnum | Prisma.User_roleScalarFieldEnum[];
};
export type user_roleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    where?: Prisma.user_roleWhereInput;
    orderBy?: Prisma.user_roleOrderByWithRelationInput | Prisma.user_roleOrderByWithRelationInput[];
    cursor?: Prisma.user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_roleScalarFieldEnum | Prisma.User_roleScalarFieldEnum[];
};
export type user_roleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    where?: Prisma.user_roleWhereInput;
    orderBy?: Prisma.user_roleOrderByWithRelationInput | Prisma.user_roleOrderByWithRelationInput[];
    cursor?: Prisma.user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_roleScalarFieldEnum | Prisma.User_roleScalarFieldEnum[];
};
export type user_roleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_roleCreateInput, Prisma.user_roleUncheckedCreateInput>;
};
export type user_roleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.user_roleCreateManyInput | Prisma.user_roleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type user_roleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    data: Prisma.user_roleCreateManyInput | Prisma.user_roleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.user_roleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type user_roleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_roleUpdateInput, Prisma.user_roleUncheckedUpdateInput>;
    where: Prisma.user_roleWhereUniqueInput;
};
export type user_roleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.user_roleUpdateManyMutationInput, Prisma.user_roleUncheckedUpdateManyInput>;
    where?: Prisma.user_roleWhereInput;
    limit?: number;
};
export type user_roleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_roleUpdateManyMutationInput, Prisma.user_roleUncheckedUpdateManyInput>;
    where?: Prisma.user_roleWhereInput;
    limit?: number;
    include?: Prisma.user_roleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type user_roleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    where: Prisma.user_roleWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_roleCreateInput, Prisma.user_roleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.user_roleUpdateInput, Prisma.user_roleUncheckedUpdateInput>;
};
export type user_roleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
    where: Prisma.user_roleWhereUniqueInput;
};
export type user_roleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_roleWhereInput;
    limit?: number;
};
export type user_roleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_roleSelect<ExtArgs> | null;
    omit?: Prisma.user_roleOmit<ExtArgs> | null;
    include?: Prisma.user_roleInclude<ExtArgs> | null;
};
export {};
