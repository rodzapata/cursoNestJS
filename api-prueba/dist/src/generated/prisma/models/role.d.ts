import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type roleModel = runtime.Types.Result.DefaultSelection<Prisma.$rolePayload>;
export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _avg: RoleAvgAggregateOutputType | null;
    _sum: RoleSumAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
};
export type RoleAvgAggregateOutputType = {
    id: number | null;
};
export type RoleSumAggregateOutputType = {
    id: number | null;
};
export type RoleMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
};
export type RoleMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
};
export type RoleCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    created_at: number;
    _all: number;
};
export type RoleAvgAggregateInputType = {
    id?: true;
};
export type RoleSumAggregateInputType = {
    id?: true;
};
export type RoleMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
};
export type RoleMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
};
export type RoleCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    _all?: true;
};
export type RoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.roleWhereInput;
    orderBy?: Prisma.roleOrderByWithRelationInput | Prisma.roleOrderByWithRelationInput[];
    cursor?: Prisma.roleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoleCountAggregateInputType;
    _avg?: RoleAvgAggregateInputType;
    _sum?: RoleSumAggregateInputType;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
};
export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRole[P]> : Prisma.GetScalarType<T[P], AggregateRole[P]>;
};
export type roleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.roleWhereInput;
    orderBy?: Prisma.roleOrderByWithAggregationInput | Prisma.roleOrderByWithAggregationInput[];
    by: Prisma.RoleScalarFieldEnum[] | Prisma.RoleScalarFieldEnum;
    having?: Prisma.roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _avg?: RoleAvgAggregateInputType;
    _sum?: RoleSumAggregateInputType;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
};
export type RoleGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    created_at: Date;
    _count: RoleCountAggregateOutputType | null;
    _avg: RoleAvgAggregateOutputType | null;
    _sum: RoleSumAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
};
type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoleGroupByOutputType[P]>;
}>>;
export type roleWhereInput = {
    AND?: Prisma.roleWhereInput | Prisma.roleWhereInput[];
    OR?: Prisma.roleWhereInput[];
    NOT?: Prisma.roleWhereInput | Prisma.roleWhereInput[];
    id?: Prisma.IntFilter<"role"> | number;
    name?: Prisma.StringFilter<"role"> | string;
    description?: Prisma.StringNullableFilter<"role"> | string | null;
    created_at?: Prisma.DateTimeFilter<"role"> | Date | string;
    role_permission?: Prisma.Role_permissionListRelationFilter;
    user_role?: Prisma.User_roleListRelationFilter;
};
export type roleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    role_permission?: Prisma.role_permissionOrderByRelationAggregateInput;
    user_role?: Prisma.user_roleOrderByRelationAggregateInput;
};
export type roleWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    AND?: Prisma.roleWhereInput | Prisma.roleWhereInput[];
    OR?: Prisma.roleWhereInput[];
    NOT?: Prisma.roleWhereInput | Prisma.roleWhereInput[];
    description?: Prisma.StringNullableFilter<"role"> | string | null;
    created_at?: Prisma.DateTimeFilter<"role"> | Date | string;
    role_permission?: Prisma.Role_permissionListRelationFilter;
    user_role?: Prisma.User_roleListRelationFilter;
}, "id" | "name">;
export type roleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.roleCountOrderByAggregateInput;
    _avg?: Prisma.roleAvgOrderByAggregateInput;
    _max?: Prisma.roleMaxOrderByAggregateInput;
    _min?: Prisma.roleMinOrderByAggregateInput;
    _sum?: Prisma.roleSumOrderByAggregateInput;
};
export type roleScalarWhereWithAggregatesInput = {
    AND?: Prisma.roleScalarWhereWithAggregatesInput | Prisma.roleScalarWhereWithAggregatesInput[];
    OR?: Prisma.roleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.roleScalarWhereWithAggregatesInput | Prisma.roleScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"role"> | number;
    name?: Prisma.StringWithAggregatesFilter<"role"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"role"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"role"> | Date | string;
};
export type roleCreateInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string;
    role_permission?: Prisma.role_permissionCreateNestedManyWithoutRoleInput;
    user_role?: Prisma.user_roleCreateNestedManyWithoutRoleInput;
};
export type roleUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    role_permission?: Prisma.role_permissionUncheckedCreateNestedManyWithoutRoleInput;
    user_role?: Prisma.user_roleUncheckedCreateNestedManyWithoutRoleInput;
};
export type roleUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role_permission?: Prisma.role_permissionUpdateManyWithoutRoleNestedInput;
    user_role?: Prisma.user_roleUpdateManyWithoutRoleNestedInput;
};
export type roleUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role_permission?: Prisma.role_permissionUncheckedUpdateManyWithoutRoleNestedInput;
    user_role?: Prisma.user_roleUncheckedUpdateManyWithoutRoleNestedInput;
};
export type roleCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    created_at?: Date | string;
};
export type roleUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type roleUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type roleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type roleAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type roleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type roleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type roleSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RoleScalarRelationFilter = {
    is?: Prisma.roleWhereInput;
    isNot?: Prisma.roleWhereInput;
};
export type roleCreateNestedOneWithoutRole_permissionInput = {
    create?: Prisma.XOR<Prisma.roleCreateWithoutRole_permissionInput, Prisma.roleUncheckedCreateWithoutRole_permissionInput>;
    connectOrCreate?: Prisma.roleCreateOrConnectWithoutRole_permissionInput;
    connect?: Prisma.roleWhereUniqueInput;
};
export type roleUpdateOneRequiredWithoutRole_permissionNestedInput = {
    create?: Prisma.XOR<Prisma.roleCreateWithoutRole_permissionInput, Prisma.roleUncheckedCreateWithoutRole_permissionInput>;
    connectOrCreate?: Prisma.roleCreateOrConnectWithoutRole_permissionInput;
    upsert?: Prisma.roleUpsertWithoutRole_permissionInput;
    connect?: Prisma.roleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.roleUpdateToOneWithWhereWithoutRole_permissionInput, Prisma.roleUpdateWithoutRole_permissionInput>, Prisma.roleUncheckedUpdateWithoutRole_permissionInput>;
};
export type roleCreateNestedOneWithoutUser_roleInput = {
    create?: Prisma.XOR<Prisma.roleCreateWithoutUser_roleInput, Prisma.roleUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: Prisma.roleCreateOrConnectWithoutUser_roleInput;
    connect?: Prisma.roleWhereUniqueInput;
};
export type roleUpdateOneRequiredWithoutUser_roleNestedInput = {
    create?: Prisma.XOR<Prisma.roleCreateWithoutUser_roleInput, Prisma.roleUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: Prisma.roleCreateOrConnectWithoutUser_roleInput;
    upsert?: Prisma.roleUpsertWithoutUser_roleInput;
    connect?: Prisma.roleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.roleUpdateToOneWithWhereWithoutUser_roleInput, Prisma.roleUpdateWithoutUser_roleInput>, Prisma.roleUncheckedUpdateWithoutUser_roleInput>;
};
export type roleCreateWithoutRole_permissionInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string;
    user_role?: Prisma.user_roleCreateNestedManyWithoutRoleInput;
};
export type roleUncheckedCreateWithoutRole_permissionInput = {
    id?: number;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    user_role?: Prisma.user_roleUncheckedCreateNestedManyWithoutRoleInput;
};
export type roleCreateOrConnectWithoutRole_permissionInput = {
    where: Prisma.roleWhereUniqueInput;
    create: Prisma.XOR<Prisma.roleCreateWithoutRole_permissionInput, Prisma.roleUncheckedCreateWithoutRole_permissionInput>;
};
export type roleUpsertWithoutRole_permissionInput = {
    update: Prisma.XOR<Prisma.roleUpdateWithoutRole_permissionInput, Prisma.roleUncheckedUpdateWithoutRole_permissionInput>;
    create: Prisma.XOR<Prisma.roleCreateWithoutRole_permissionInput, Prisma.roleUncheckedCreateWithoutRole_permissionInput>;
    where?: Prisma.roleWhereInput;
};
export type roleUpdateToOneWithWhereWithoutRole_permissionInput = {
    where?: Prisma.roleWhereInput;
    data: Prisma.XOR<Prisma.roleUpdateWithoutRole_permissionInput, Prisma.roleUncheckedUpdateWithoutRole_permissionInput>;
};
export type roleUpdateWithoutRole_permissionInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_role?: Prisma.user_roleUpdateManyWithoutRoleNestedInput;
};
export type roleUncheckedUpdateWithoutRole_permissionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user_role?: Prisma.user_roleUncheckedUpdateManyWithoutRoleNestedInput;
};
export type roleCreateWithoutUser_roleInput = {
    name: string;
    description?: string | null;
    created_at?: Date | string;
    role_permission?: Prisma.role_permissionCreateNestedManyWithoutRoleInput;
};
export type roleUncheckedCreateWithoutUser_roleInput = {
    id?: number;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    role_permission?: Prisma.role_permissionUncheckedCreateNestedManyWithoutRoleInput;
};
export type roleCreateOrConnectWithoutUser_roleInput = {
    where: Prisma.roleWhereUniqueInput;
    create: Prisma.XOR<Prisma.roleCreateWithoutUser_roleInput, Prisma.roleUncheckedCreateWithoutUser_roleInput>;
};
export type roleUpsertWithoutUser_roleInput = {
    update: Prisma.XOR<Prisma.roleUpdateWithoutUser_roleInput, Prisma.roleUncheckedUpdateWithoutUser_roleInput>;
    create: Prisma.XOR<Prisma.roleCreateWithoutUser_roleInput, Prisma.roleUncheckedCreateWithoutUser_roleInput>;
    where?: Prisma.roleWhereInput;
};
export type roleUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: Prisma.roleWhereInput;
    data: Prisma.XOR<Prisma.roleUpdateWithoutUser_roleInput, Prisma.roleUncheckedUpdateWithoutUser_roleInput>;
};
export type roleUpdateWithoutUser_roleInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role_permission?: Prisma.role_permissionUpdateManyWithoutRoleNestedInput;
};
export type roleUncheckedUpdateWithoutUser_roleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role_permission?: Prisma.role_permissionUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleCountOutputType = {
    role_permission: number;
    user_role: number;
};
export type RoleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role_permission?: boolean | RoleCountOutputTypeCountRole_permissionArgs;
    user_role?: boolean | RoleCountOutputTypeCountUser_roleArgs;
};
export type RoleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleCountOutputTypeSelect<ExtArgs> | null;
};
export type RoleCountOutputTypeCountRole_permissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionWhereInput;
};
export type RoleCountOutputTypeCountUser_roleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_roleWhereInput;
};
export type roleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    role_permission?: boolean | Prisma.role$role_permissionArgs<ExtArgs>;
    user_role?: boolean | Prisma.role$user_roleArgs<ExtArgs>;
    _count?: boolean | Prisma.RoleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type roleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["role"]>;
export type roleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["role"]>;
export type roleSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
};
export type roleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "created_at", ExtArgs["result"]["role"]>;
export type roleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role_permission?: boolean | Prisma.role$role_permissionArgs<ExtArgs>;
    user_role?: boolean | Prisma.role$user_roleArgs<ExtArgs>;
    _count?: boolean | Prisma.RoleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type roleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type roleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $rolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "role";
    objects: {
        role_permission: Prisma.$role_permissionPayload<ExtArgs>[];
        user_role: Prisma.$user_rolePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        created_at: Date;
    }, ExtArgs["result"]["role"]>;
    composites: {};
};
export type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rolePayload, S>;
export type roleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoleCountAggregateInputType | true;
};
export interface roleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['role'];
        meta: {
            name: 'role';
        };
    };
    findUnique<T extends roleFindUniqueArgs>(args: Prisma.SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends roleFindFirstArgs>(args?: Prisma.SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends roleFindManyArgs>(args?: Prisma.SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends roleCreateArgs>(args: Prisma.SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends roleCreateManyArgs>(args?: Prisma.SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends roleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, roleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends roleDeleteArgs>(args: Prisma.SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends roleUpdateArgs>(args: Prisma.SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends roleDeleteManyArgs>(args?: Prisma.SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends roleUpdateManyArgs>(args: Prisma.SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends roleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, roleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends roleUpsertArgs>(args: Prisma.SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma.Prisma__roleClient<runtime.Types.Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends roleCountArgs>(args?: Prisma.Subset<T, roleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoleCountAggregateOutputType> : number>;
    aggregate<T extends RoleAggregateArgs>(args: Prisma.Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>;
    groupBy<T extends roleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: roleGroupByArgs['orderBy'];
    } : {
        orderBy?: roleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: roleFieldRefs;
}
export interface Prisma__roleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role_permission<T extends Prisma.role$role_permissionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.role$role_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_role<T extends Prisma.role$user_roleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.role$user_roleArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface roleFieldRefs {
    readonly id: Prisma.FieldRef<"role", 'Int'>;
    readonly name: Prisma.FieldRef<"role", 'String'>;
    readonly description: Prisma.FieldRef<"role", 'String'>;
    readonly created_at: Prisma.FieldRef<"role", 'DateTime'>;
}
export type roleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    where: Prisma.roleWhereUniqueInput;
};
export type roleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    where: Prisma.roleWhereUniqueInput;
};
export type roleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    where?: Prisma.roleWhereInput;
    orderBy?: Prisma.roleOrderByWithRelationInput | Prisma.roleOrderByWithRelationInput[];
    cursor?: Prisma.roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type roleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    where?: Prisma.roleWhereInput;
    orderBy?: Prisma.roleOrderByWithRelationInput | Prisma.roleOrderByWithRelationInput[];
    cursor?: Prisma.roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type roleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    where?: Prisma.roleWhereInput;
    orderBy?: Prisma.roleOrderByWithRelationInput | Prisma.roleOrderByWithRelationInput[];
    cursor?: Prisma.roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type roleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.roleCreateInput, Prisma.roleUncheckedCreateInput>;
};
export type roleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.roleCreateManyInput | Prisma.roleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type roleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    data: Prisma.roleCreateManyInput | Prisma.roleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type roleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.roleUpdateInput, Prisma.roleUncheckedUpdateInput>;
    where: Prisma.roleWhereUniqueInput;
};
export type roleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.roleUpdateManyMutationInput, Prisma.roleUncheckedUpdateManyInput>;
    where?: Prisma.roleWhereInput;
    limit?: number;
};
export type roleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.roleUpdateManyMutationInput, Prisma.roleUncheckedUpdateManyInput>;
    where?: Prisma.roleWhereInput;
    limit?: number;
};
export type roleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    where: Prisma.roleWhereUniqueInput;
    create: Prisma.XOR<Prisma.roleCreateInput, Prisma.roleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.roleUpdateInput, Prisma.roleUncheckedUpdateInput>;
};
export type roleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
    where: Prisma.roleWhereUniqueInput;
};
export type roleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.roleWhereInput;
    limit?: number;
};
export type role$role_permissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type role$user_roleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type roleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roleSelect<ExtArgs> | null;
    omit?: Prisma.roleOmit<ExtArgs> | null;
    include?: Prisma.roleInclude<ExtArgs> | null;
};
export {};
