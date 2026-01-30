import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type provModel = runtime.Types.Result.DefaultSelection<Prisma.$provPayload>;
export type AggregateProv = {
    _count: ProvCountAggregateOutputType | null;
    _avg: ProvAvgAggregateOutputType | null;
    _sum: ProvSumAggregateOutputType | null;
    _min: ProvMinAggregateOutputType | null;
    _max: ProvMaxAggregateOutputType | null;
};
export type ProvAvgAggregateOutputType = {
    id: number | null;
};
export type ProvSumAggregateOutputType = {
    id: number | null;
};
export type ProvMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
};
export type ProvMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
};
export type ProvCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    _all: number;
};
export type ProvAvgAggregateInputType = {
    id?: true;
};
export type ProvSumAggregateInputType = {
    id?: true;
};
export type ProvMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
};
export type ProvMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
};
export type ProvCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    _all?: true;
};
export type ProvAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.provWhereInput;
    orderBy?: Prisma.provOrderByWithRelationInput | Prisma.provOrderByWithRelationInput[];
    cursor?: Prisma.provWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProvCountAggregateInputType;
    _avg?: ProvAvgAggregateInputType;
    _sum?: ProvSumAggregateInputType;
    _min?: ProvMinAggregateInputType;
    _max?: ProvMaxAggregateInputType;
};
export type GetProvAggregateType<T extends ProvAggregateArgs> = {
    [P in keyof T & keyof AggregateProv]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProv[P]> : Prisma.GetScalarType<T[P], AggregateProv[P]>;
};
export type provGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.provWhereInput;
    orderBy?: Prisma.provOrderByWithAggregationInput | Prisma.provOrderByWithAggregationInput[];
    by: Prisma.ProvScalarFieldEnum[] | Prisma.ProvScalarFieldEnum;
    having?: Prisma.provScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProvCountAggregateInputType | true;
    _avg?: ProvAvgAggregateInputType;
    _sum?: ProvSumAggregateInputType;
    _min?: ProvMinAggregateInputType;
    _max?: ProvMaxAggregateInputType;
};
export type ProvGroupByOutputType = {
    id: number;
    email: string;
    name: string | null;
    _count: ProvCountAggregateOutputType | null;
    _avg: ProvAvgAggregateOutputType | null;
    _sum: ProvSumAggregateOutputType | null;
    _min: ProvMinAggregateOutputType | null;
    _max: ProvMaxAggregateOutputType | null;
};
type GetProvGroupByPayload<T extends provGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProvGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProvGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProvGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProvGroupByOutputType[P]>;
}>>;
export type provWhereInput = {
    AND?: Prisma.provWhereInput | Prisma.provWhereInput[];
    OR?: Prisma.provWhereInput[];
    NOT?: Prisma.provWhereInput | Prisma.provWhereInput[];
    id?: Prisma.IntFilter<"prov"> | number;
    email?: Prisma.StringFilter<"prov"> | string;
    name?: Prisma.StringNullableFilter<"prov"> | string | null;
};
export type provOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type provWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.provWhereInput | Prisma.provWhereInput[];
    OR?: Prisma.provWhereInput[];
    NOT?: Prisma.provWhereInput | Prisma.provWhereInput[];
    name?: Prisma.StringNullableFilter<"prov"> | string | null;
}, "id" | "email">;
export type provOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.provCountOrderByAggregateInput;
    _avg?: Prisma.provAvgOrderByAggregateInput;
    _max?: Prisma.provMaxOrderByAggregateInput;
    _min?: Prisma.provMinOrderByAggregateInput;
    _sum?: Prisma.provSumOrderByAggregateInput;
};
export type provScalarWhereWithAggregatesInput = {
    AND?: Prisma.provScalarWhereWithAggregatesInput | Prisma.provScalarWhereWithAggregatesInput[];
    OR?: Prisma.provScalarWhereWithAggregatesInput[];
    NOT?: Prisma.provScalarWhereWithAggregatesInput | Prisma.provScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"prov"> | number;
    email?: Prisma.StringWithAggregatesFilter<"prov"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"prov"> | string | null;
};
export type provCreateInput = {
    email: string;
    name?: string | null;
};
export type provUncheckedCreateInput = {
    id?: number;
    email: string;
    name?: string | null;
};
export type provUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type provUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type provCreateManyInput = {
    id?: number;
    email: string;
    name?: string | null;
};
export type provUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type provUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type provCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type provAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type provMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type provMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
};
export type provSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type provSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
}, ExtArgs["result"]["prov"]>;
export type provSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
}, ExtArgs["result"]["prov"]>;
export type provSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
}, ExtArgs["result"]["prov"]>;
export type provSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
};
export type provOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["prov"]>;
export type $provPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "prov";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        name: string | null;
    }, ExtArgs["result"]["prov"]>;
    composites: {};
};
export type provGetPayload<S extends boolean | null | undefined | provDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$provPayload, S>;
export type provCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<provFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProvCountAggregateInputType | true;
};
export interface provDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['prov'];
        meta: {
            name: 'prov';
        };
    };
    findUnique<T extends provFindUniqueArgs>(args: Prisma.SelectSubset<T, provFindUniqueArgs<ExtArgs>>): Prisma.Prisma__provClient<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends provFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, provFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__provClient<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends provFindFirstArgs>(args?: Prisma.SelectSubset<T, provFindFirstArgs<ExtArgs>>): Prisma.Prisma__provClient<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends provFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, provFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__provClient<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends provFindManyArgs>(args?: Prisma.SelectSubset<T, provFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends provCreateArgs>(args: Prisma.SelectSubset<T, provCreateArgs<ExtArgs>>): Prisma.Prisma__provClient<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends provCreateManyArgs>(args?: Prisma.SelectSubset<T, provCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends provCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, provCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends provDeleteArgs>(args: Prisma.SelectSubset<T, provDeleteArgs<ExtArgs>>): Prisma.Prisma__provClient<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends provUpdateArgs>(args: Prisma.SelectSubset<T, provUpdateArgs<ExtArgs>>): Prisma.Prisma__provClient<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends provDeleteManyArgs>(args?: Prisma.SelectSubset<T, provDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends provUpdateManyArgs>(args: Prisma.SelectSubset<T, provUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends provUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, provUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends provUpsertArgs>(args: Prisma.SelectSubset<T, provUpsertArgs<ExtArgs>>): Prisma.Prisma__provClient<runtime.Types.Result.GetResult<Prisma.$provPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends provCountArgs>(args?: Prisma.Subset<T, provCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProvCountAggregateOutputType> : number>;
    aggregate<T extends ProvAggregateArgs>(args: Prisma.Subset<T, ProvAggregateArgs>): Prisma.PrismaPromise<GetProvAggregateType<T>>;
    groupBy<T extends provGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: provGroupByArgs['orderBy'];
    } : {
        orderBy?: provGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, provGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: provFieldRefs;
}
export interface Prisma__provClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface provFieldRefs {
    readonly id: Prisma.FieldRef<"prov", 'Int'>;
    readonly email: Prisma.FieldRef<"prov", 'String'>;
    readonly name: Prisma.FieldRef<"prov", 'String'>;
}
export type provFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    where: Prisma.provWhereUniqueInput;
};
export type provFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    where: Prisma.provWhereUniqueInput;
};
export type provFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    where?: Prisma.provWhereInput;
    orderBy?: Prisma.provOrderByWithRelationInput | Prisma.provOrderByWithRelationInput[];
    cursor?: Prisma.provWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvScalarFieldEnum | Prisma.ProvScalarFieldEnum[];
};
export type provFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    where?: Prisma.provWhereInput;
    orderBy?: Prisma.provOrderByWithRelationInput | Prisma.provOrderByWithRelationInput[];
    cursor?: Prisma.provWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvScalarFieldEnum | Prisma.ProvScalarFieldEnum[];
};
export type provFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    where?: Prisma.provWhereInput;
    orderBy?: Prisma.provOrderByWithRelationInput | Prisma.provOrderByWithRelationInput[];
    cursor?: Prisma.provWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProvScalarFieldEnum | Prisma.ProvScalarFieldEnum[];
};
export type provCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.provCreateInput, Prisma.provUncheckedCreateInput>;
};
export type provCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.provCreateManyInput | Prisma.provCreateManyInput[];
    skipDuplicates?: boolean;
};
export type provCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    data: Prisma.provCreateManyInput | Prisma.provCreateManyInput[];
    skipDuplicates?: boolean;
};
export type provUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.provUpdateInput, Prisma.provUncheckedUpdateInput>;
    where: Prisma.provWhereUniqueInput;
};
export type provUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.provUpdateManyMutationInput, Prisma.provUncheckedUpdateManyInput>;
    where?: Prisma.provWhereInput;
    limit?: number;
};
export type provUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.provUpdateManyMutationInput, Prisma.provUncheckedUpdateManyInput>;
    where?: Prisma.provWhereInput;
    limit?: number;
};
export type provUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    where: Prisma.provWhereUniqueInput;
    create: Prisma.XOR<Prisma.provCreateInput, Prisma.provUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.provUpdateInput, Prisma.provUncheckedUpdateInput>;
};
export type provDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
    where: Prisma.provWhereUniqueInput;
};
export type provDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.provWhereInput;
    limit?: number;
};
export type provDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.provSelect<ExtArgs> | null;
    omit?: Prisma.provOmit<ExtArgs> | null;
};
export {};
