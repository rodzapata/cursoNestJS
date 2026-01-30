import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type permissionModel = runtime.Types.Result.DefaultSelection<Prisma.$permissionPayload>;
export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null;
    _avg: PermissionAvgAggregateOutputType | null;
    _sum: PermissionSumAggregateOutputType | null;
    _min: PermissionMinAggregateOutputType | null;
    _max: PermissionMaxAggregateOutputType | null;
};
export type PermissionAvgAggregateOutputType = {
    id: number | null;
};
export type PermissionSumAggregateOutputType = {
    id: number | null;
};
export type PermissionMinAggregateOutputType = {
    id: number | null;
    code: string | null;
    description: string | null;
    created_at: Date | null;
};
export type PermissionMaxAggregateOutputType = {
    id: number | null;
    code: string | null;
    description: string | null;
    created_at: Date | null;
};
export type PermissionCountAggregateOutputType = {
    id: number;
    code: number;
    description: number;
    created_at: number;
    _all: number;
};
export type PermissionAvgAggregateInputType = {
    id?: true;
};
export type PermissionSumAggregateInputType = {
    id?: true;
};
export type PermissionMinAggregateInputType = {
    id?: true;
    code?: true;
    description?: true;
    created_at?: true;
};
export type PermissionMaxAggregateInputType = {
    id?: true;
    code?: true;
    description?: true;
    created_at?: true;
};
export type PermissionCountAggregateInputType = {
    id?: true;
    code?: true;
    description?: true;
    created_at?: true;
    _all?: true;
};
export type PermissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.permissionWhereInput;
    orderBy?: Prisma.permissionOrderByWithRelationInput | Prisma.permissionOrderByWithRelationInput[];
    cursor?: Prisma.permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PermissionCountAggregateInputType;
    _avg?: PermissionAvgAggregateInputType;
    _sum?: PermissionSumAggregateInputType;
    _min?: PermissionMinAggregateInputType;
    _max?: PermissionMaxAggregateInputType;
};
export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
    [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePermission[P]> : Prisma.GetScalarType<T[P], AggregatePermission[P]>;
};
export type permissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.permissionWhereInput;
    orderBy?: Prisma.permissionOrderByWithAggregationInput | Prisma.permissionOrderByWithAggregationInput[];
    by: Prisma.PermissionScalarFieldEnum[] | Prisma.PermissionScalarFieldEnum;
    having?: Prisma.permissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PermissionCountAggregateInputType | true;
    _avg?: PermissionAvgAggregateInputType;
    _sum?: PermissionSumAggregateInputType;
    _min?: PermissionMinAggregateInputType;
    _max?: PermissionMaxAggregateInputType;
};
export type PermissionGroupByOutputType = {
    id: number;
    code: string;
    description: string | null;
    created_at: Date;
    _count: PermissionCountAggregateOutputType | null;
    _avg: PermissionAvgAggregateOutputType | null;
    _sum: PermissionSumAggregateOutputType | null;
    _min: PermissionMinAggregateOutputType | null;
    _max: PermissionMaxAggregateOutputType | null;
};
type GetPermissionGroupByPayload<T extends permissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PermissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PermissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PermissionGroupByOutputType[P]>;
}>>;
export type permissionWhereInput = {
    AND?: Prisma.permissionWhereInput | Prisma.permissionWhereInput[];
    OR?: Prisma.permissionWhereInput[];
    NOT?: Prisma.permissionWhereInput | Prisma.permissionWhereInput[];
    id?: Prisma.IntFilter<"permission"> | number;
    code?: Prisma.StringFilter<"permission"> | string;
    description?: Prisma.StringNullableFilter<"permission"> | string | null;
    created_at?: Prisma.DateTimeFilter<"permission"> | Date | string;
    role_permission?: Prisma.Role_permissionListRelationFilter;
};
export type permissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    role_permission?: Prisma.role_permissionOrderByRelationAggregateInput;
};
export type permissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    code?: string;
    AND?: Prisma.permissionWhereInput | Prisma.permissionWhereInput[];
    OR?: Prisma.permissionWhereInput[];
    NOT?: Prisma.permissionWhereInput | Prisma.permissionWhereInput[];
    description?: Prisma.StringNullableFilter<"permission"> | string | null;
    created_at?: Prisma.DateTimeFilter<"permission"> | Date | string;
    role_permission?: Prisma.Role_permissionListRelationFilter;
}, "id" | "code">;
export type permissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.permissionCountOrderByAggregateInput;
    _avg?: Prisma.permissionAvgOrderByAggregateInput;
    _max?: Prisma.permissionMaxOrderByAggregateInput;
    _min?: Prisma.permissionMinOrderByAggregateInput;
    _sum?: Prisma.permissionSumOrderByAggregateInput;
};
export type permissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.permissionScalarWhereWithAggregatesInput | Prisma.permissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.permissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.permissionScalarWhereWithAggregatesInput | Prisma.permissionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"permission"> | number;
    code?: Prisma.StringWithAggregatesFilter<"permission"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"permission"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"permission"> | Date | string;
};
export type permissionCreateInput = {
    code: string;
    description?: string | null;
    created_at?: Date | string;
    role_permission?: Prisma.role_permissionCreateNestedManyWithoutPermissionInput;
};
export type permissionUncheckedCreateInput = {
    id?: number;
    code: string;
    description?: string | null;
    created_at?: Date | string;
    role_permission?: Prisma.role_permissionUncheckedCreateNestedManyWithoutPermissionInput;
};
export type permissionUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role_permission?: Prisma.role_permissionUpdateManyWithoutPermissionNestedInput;
};
export type permissionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    role_permission?: Prisma.role_permissionUncheckedUpdateManyWithoutPermissionNestedInput;
};
export type permissionCreateManyInput = {
    id?: number;
    code: string;
    description?: string | null;
    created_at?: Date | string;
};
export type permissionUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type permissionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type permissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type permissionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type permissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type permissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type permissionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PermissionScalarRelationFilter = {
    is?: Prisma.permissionWhereInput;
    isNot?: Prisma.permissionWhereInput;
};
export type permissionCreateNestedOneWithoutRole_permissionInput = {
    create?: Prisma.XOR<Prisma.permissionCreateWithoutRole_permissionInput, Prisma.permissionUncheckedCreateWithoutRole_permissionInput>;
    connectOrCreate?: Prisma.permissionCreateOrConnectWithoutRole_permissionInput;
    connect?: Prisma.permissionWhereUniqueInput;
};
export type permissionUpdateOneRequiredWithoutRole_permissionNestedInput = {
    create?: Prisma.XOR<Prisma.permissionCreateWithoutRole_permissionInput, Prisma.permissionUncheckedCreateWithoutRole_permissionInput>;
    connectOrCreate?: Prisma.permissionCreateOrConnectWithoutRole_permissionInput;
    upsert?: Prisma.permissionUpsertWithoutRole_permissionInput;
    connect?: Prisma.permissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.permissionUpdateToOneWithWhereWithoutRole_permissionInput, Prisma.permissionUpdateWithoutRole_permissionInput>, Prisma.permissionUncheckedUpdateWithoutRole_permissionInput>;
};
export type permissionCreateWithoutRole_permissionInput = {
    code: string;
    description?: string | null;
    created_at?: Date | string;
};
export type permissionUncheckedCreateWithoutRole_permissionInput = {
    id?: number;
    code: string;
    description?: string | null;
    created_at?: Date | string;
};
export type permissionCreateOrConnectWithoutRole_permissionInput = {
    where: Prisma.permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.permissionCreateWithoutRole_permissionInput, Prisma.permissionUncheckedCreateWithoutRole_permissionInput>;
};
export type permissionUpsertWithoutRole_permissionInput = {
    update: Prisma.XOR<Prisma.permissionUpdateWithoutRole_permissionInput, Prisma.permissionUncheckedUpdateWithoutRole_permissionInput>;
    create: Prisma.XOR<Prisma.permissionCreateWithoutRole_permissionInput, Prisma.permissionUncheckedCreateWithoutRole_permissionInput>;
    where?: Prisma.permissionWhereInput;
};
export type permissionUpdateToOneWithWhereWithoutRole_permissionInput = {
    where?: Prisma.permissionWhereInput;
    data: Prisma.XOR<Prisma.permissionUpdateWithoutRole_permissionInput, Prisma.permissionUncheckedUpdateWithoutRole_permissionInput>;
};
export type permissionUpdateWithoutRole_permissionInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type permissionUncheckedUpdateWithoutRole_permissionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PermissionCountOutputType = {
    role_permission: number;
};
export type PermissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role_permission?: boolean | PermissionCountOutputTypeCountRole_permissionArgs;
};
export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PermissionCountOutputTypeSelect<ExtArgs> | null;
};
export type PermissionCountOutputTypeCountRole_permissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.role_permissionWhereInput;
};
export type permissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    description?: boolean;
    created_at?: boolean;
    role_permission?: boolean | Prisma.permission$role_permissionArgs<ExtArgs>;
    _count?: boolean | Prisma.PermissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["permission"]>;
export type permissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    description?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["permission"]>;
export type permissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    description?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["permission"]>;
export type permissionSelectScalar = {
    id?: boolean;
    code?: boolean;
    description?: boolean;
    created_at?: boolean;
};
export type permissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "description" | "created_at", ExtArgs["result"]["permission"]>;
export type permissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    role_permission?: boolean | Prisma.permission$role_permissionArgs<ExtArgs>;
    _count?: boolean | Prisma.PermissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type permissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type permissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $permissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "permission";
    objects: {
        role_permission: Prisma.$role_permissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        code: string;
        description: string | null;
        created_at: Date;
    }, ExtArgs["result"]["permission"]>;
    composites: {};
};
export type permissionGetPayload<S extends boolean | null | undefined | permissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$permissionPayload, S>;
export type permissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<permissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PermissionCountAggregateInputType | true;
};
export interface permissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['permission'];
        meta: {
            name: 'permission';
        };
    };
    findUnique<T extends permissionFindUniqueArgs>(args: Prisma.SelectSubset<T, permissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends permissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, permissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends permissionFindFirstArgs>(args?: Prisma.SelectSubset<T, permissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends permissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, permissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends permissionFindManyArgs>(args?: Prisma.SelectSubset<T, permissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends permissionCreateArgs>(args: Prisma.SelectSubset<T, permissionCreateArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends permissionCreateManyArgs>(args?: Prisma.SelectSubset<T, permissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends permissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, permissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends permissionDeleteArgs>(args: Prisma.SelectSubset<T, permissionDeleteArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends permissionUpdateArgs>(args: Prisma.SelectSubset<T, permissionUpdateArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends permissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, permissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends permissionUpdateManyArgs>(args: Prisma.SelectSubset<T, permissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends permissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, permissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends permissionUpsertArgs>(args: Prisma.SelectSubset<T, permissionUpsertArgs<ExtArgs>>): Prisma.Prisma__permissionClient<runtime.Types.Result.GetResult<Prisma.$permissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends permissionCountArgs>(args?: Prisma.Subset<T, permissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PermissionCountAggregateOutputType> : number>;
    aggregate<T extends PermissionAggregateArgs>(args: Prisma.Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>;
    groupBy<T extends permissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: permissionGroupByArgs['orderBy'];
    } : {
        orderBy?: permissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, permissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: permissionFieldRefs;
}
export interface Prisma__permissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    role_permission<T extends Prisma.permission$role_permissionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.permission$role_permissionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$role_permissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface permissionFieldRefs {
    readonly id: Prisma.FieldRef<"permission", 'Int'>;
    readonly code: Prisma.FieldRef<"permission", 'String'>;
    readonly description: Prisma.FieldRef<"permission", 'String'>;
    readonly created_at: Prisma.FieldRef<"permission", 'DateTime'>;
}
export type permissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    where: Prisma.permissionWhereUniqueInput;
};
export type permissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    where: Prisma.permissionWhereUniqueInput;
};
export type permissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    where?: Prisma.permissionWhereInput;
    orderBy?: Prisma.permissionOrderByWithRelationInput | Prisma.permissionOrderByWithRelationInput[];
    cursor?: Prisma.permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionScalarFieldEnum | Prisma.PermissionScalarFieldEnum[];
};
export type permissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    where?: Prisma.permissionWhereInput;
    orderBy?: Prisma.permissionOrderByWithRelationInput | Prisma.permissionOrderByWithRelationInput[];
    cursor?: Prisma.permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionScalarFieldEnum | Prisma.PermissionScalarFieldEnum[];
};
export type permissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    where?: Prisma.permissionWhereInput;
    orderBy?: Prisma.permissionOrderByWithRelationInput | Prisma.permissionOrderByWithRelationInput[];
    cursor?: Prisma.permissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PermissionScalarFieldEnum | Prisma.PermissionScalarFieldEnum[];
};
export type permissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.permissionCreateInput, Prisma.permissionUncheckedCreateInput>;
};
export type permissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.permissionCreateManyInput | Prisma.permissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type permissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    data: Prisma.permissionCreateManyInput | Prisma.permissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type permissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.permissionUpdateInput, Prisma.permissionUncheckedUpdateInput>;
    where: Prisma.permissionWhereUniqueInput;
};
export type permissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.permissionUpdateManyMutationInput, Prisma.permissionUncheckedUpdateManyInput>;
    where?: Prisma.permissionWhereInput;
    limit?: number;
};
export type permissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.permissionUpdateManyMutationInput, Prisma.permissionUncheckedUpdateManyInput>;
    where?: Prisma.permissionWhereInput;
    limit?: number;
};
export type permissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    where: Prisma.permissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.permissionCreateInput, Prisma.permissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.permissionUpdateInput, Prisma.permissionUncheckedUpdateInput>;
};
export type permissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
    where: Prisma.permissionWhereUniqueInput;
};
export type permissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.permissionWhereInput;
    limit?: number;
};
export type permission$role_permissionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type permissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.permissionSelect<ExtArgs> | null;
    omit?: Prisma.permissionOmit<ExtArgs> | null;
    include?: Prisma.permissionInclude<ExtArgs> | null;
};
export {};
