import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type stateModel = runtime.Types.Result.DefaultSelection<Prisma.$statePayload>;
export type AggregateState = {
    _count: StateCountAggregateOutputType | null;
    _avg: StateAvgAggregateOutputType | null;
    _sum: StateSumAggregateOutputType | null;
    _min: StateMinAggregateOutputType | null;
    _max: StateMaxAggregateOutputType | null;
};
export type StateAvgAggregateOutputType = {
    id: number | null;
};
export type StateSumAggregateOutputType = {
    id: number | null;
};
export type StateMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StateMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type StateCountAggregateOutputType = {
    id: number;
    name: number;
    code: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type StateAvgAggregateInputType = {
    id?: true;
};
export type StateSumAggregateInputType = {
    id?: true;
};
export type StateMinAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    created_at?: true;
    updated_at?: true;
};
export type StateMaxAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    created_at?: true;
    updated_at?: true;
};
export type StateCountAggregateInputType = {
    id?: true;
    name?: true;
    code?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type StateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stateWhereInput;
    orderBy?: Prisma.stateOrderByWithRelationInput | Prisma.stateOrderByWithRelationInput[];
    cursor?: Prisma.stateWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StateCountAggregateInputType;
    _avg?: StateAvgAggregateInputType;
    _sum?: StateSumAggregateInputType;
    _min?: StateMinAggregateInputType;
    _max?: StateMaxAggregateInputType;
};
export type GetStateAggregateType<T extends StateAggregateArgs> = {
    [P in keyof T & keyof AggregateState]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateState[P]> : Prisma.GetScalarType<T[P], AggregateState[P]>;
};
export type stateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stateWhereInput;
    orderBy?: Prisma.stateOrderByWithAggregationInput | Prisma.stateOrderByWithAggregationInput[];
    by: Prisma.StateScalarFieldEnum[] | Prisma.StateScalarFieldEnum;
    having?: Prisma.stateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StateCountAggregateInputType | true;
    _avg?: StateAvgAggregateInputType;
    _sum?: StateSumAggregateInputType;
    _min?: StateMinAggregateInputType;
    _max?: StateMaxAggregateInputType;
};
export type StateGroupByOutputType = {
    id: number;
    name: string;
    code: string;
    created_at: Date;
    updated_at: Date;
    _count: StateCountAggregateOutputType | null;
    _avg: StateAvgAggregateOutputType | null;
    _sum: StateSumAggregateOutputType | null;
    _min: StateMinAggregateOutputType | null;
    _max: StateMaxAggregateOutputType | null;
};
type GetStateGroupByPayload<T extends stateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StateGroupByOutputType[P]>;
}>>;
export type stateWhereInput = {
    AND?: Prisma.stateWhereInput | Prisma.stateWhereInput[];
    OR?: Prisma.stateWhereInput[];
    NOT?: Prisma.stateWhereInput | Prisma.stateWhereInput[];
    id?: Prisma.IntFilter<"state"> | number;
    name?: Prisma.StringFilter<"state"> | string;
    code?: Prisma.StringFilter<"state"> | string;
    created_at?: Prisma.DateTimeFilter<"state"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"state"> | Date | string;
    county?: Prisma.CountyListRelationFilter;
};
export type stateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    county?: Prisma.countyOrderByRelationAggregateInput;
};
export type stateWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    name?: string;
    code?: string;
    AND?: Prisma.stateWhereInput | Prisma.stateWhereInput[];
    OR?: Prisma.stateWhereInput[];
    NOT?: Prisma.stateWhereInput | Prisma.stateWhereInput[];
    created_at?: Prisma.DateTimeFilter<"state"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"state"> | Date | string;
    county?: Prisma.CountyListRelationFilter;
}, "id" | "name" | "code">;
export type stateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.stateCountOrderByAggregateInput;
    _avg?: Prisma.stateAvgOrderByAggregateInput;
    _max?: Prisma.stateMaxOrderByAggregateInput;
    _min?: Prisma.stateMinOrderByAggregateInput;
    _sum?: Prisma.stateSumOrderByAggregateInput;
};
export type stateScalarWhereWithAggregatesInput = {
    AND?: Prisma.stateScalarWhereWithAggregatesInput | Prisma.stateScalarWhereWithAggregatesInput[];
    OR?: Prisma.stateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.stateScalarWhereWithAggregatesInput | Prisma.stateScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"state"> | number;
    name?: Prisma.StringWithAggregatesFilter<"state"> | string;
    code?: Prisma.StringWithAggregatesFilter<"state"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"state"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"state"> | Date | string;
};
export type stateCreateInput = {
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    county?: Prisma.countyCreateNestedManyWithoutStateInput;
};
export type stateUncheckedCreateInput = {
    id?: number;
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    county?: Prisma.countyUncheckedCreateNestedManyWithoutStateInput;
};
export type stateUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    county?: Prisma.countyUpdateManyWithoutStateNestedInput;
};
export type stateUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    county?: Prisma.countyUncheckedUpdateManyWithoutStateNestedInput;
};
export type stateCreateManyInput = {
    id?: number;
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type stateUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type stateUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StateScalarRelationFilter = {
    is?: Prisma.stateWhereInput;
    isNot?: Prisma.stateWhereInput;
};
export type stateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stateAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type stateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type stateSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type stateCreateNestedOneWithoutCountyInput = {
    create?: Prisma.XOR<Prisma.stateCreateWithoutCountyInput, Prisma.stateUncheckedCreateWithoutCountyInput>;
    connectOrCreate?: Prisma.stateCreateOrConnectWithoutCountyInput;
    connect?: Prisma.stateWhereUniqueInput;
};
export type stateUpdateOneRequiredWithoutCountyNestedInput = {
    create?: Prisma.XOR<Prisma.stateCreateWithoutCountyInput, Prisma.stateUncheckedCreateWithoutCountyInput>;
    connectOrCreate?: Prisma.stateCreateOrConnectWithoutCountyInput;
    upsert?: Prisma.stateUpsertWithoutCountyInput;
    connect?: Prisma.stateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.stateUpdateToOneWithWhereWithoutCountyInput, Prisma.stateUpdateWithoutCountyInput>, Prisma.stateUncheckedUpdateWithoutCountyInput>;
};
export type stateCreateWithoutCountyInput = {
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type stateUncheckedCreateWithoutCountyInput = {
    id?: number;
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type stateCreateOrConnectWithoutCountyInput = {
    where: Prisma.stateWhereUniqueInput;
    create: Prisma.XOR<Prisma.stateCreateWithoutCountyInput, Prisma.stateUncheckedCreateWithoutCountyInput>;
};
export type stateUpsertWithoutCountyInput = {
    update: Prisma.XOR<Prisma.stateUpdateWithoutCountyInput, Prisma.stateUncheckedUpdateWithoutCountyInput>;
    create: Prisma.XOR<Prisma.stateCreateWithoutCountyInput, Prisma.stateUncheckedCreateWithoutCountyInput>;
    where?: Prisma.stateWhereInput;
};
export type stateUpdateToOneWithWhereWithoutCountyInput = {
    where?: Prisma.stateWhereInput;
    data: Prisma.XOR<Prisma.stateUpdateWithoutCountyInput, Prisma.stateUncheckedUpdateWithoutCountyInput>;
};
export type stateUpdateWithoutCountyInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type stateUncheckedUpdateWithoutCountyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StateCountOutputType = {
    county: number;
};
export type StateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    county?: boolean | StateCountOutputTypeCountCountyArgs;
};
export type StateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StateCountOutputTypeSelect<ExtArgs> | null;
};
export type StateCountOutputTypeCountCountyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countyWhereInput;
};
export type stateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    county?: boolean | Prisma.state$countyArgs<ExtArgs>;
    _count?: boolean | Prisma.StateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["state"]>;
export type stateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["state"]>;
export type stateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["state"]>;
export type stateSelectScalar = {
    id?: boolean;
    name?: boolean;
    code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type stateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "code" | "created_at" | "updated_at", ExtArgs["result"]["state"]>;
export type stateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    county?: boolean | Prisma.state$countyArgs<ExtArgs>;
    _count?: boolean | Prisma.StateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type stateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type stateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $statePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "state";
    objects: {
        county: Prisma.$countyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        code: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["state"]>;
    composites: {};
};
export type stateGetPayload<S extends boolean | null | undefined | stateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$statePayload, S>;
export type stateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<stateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StateCountAggregateInputType | true;
};
export interface stateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['state'];
        meta: {
            name: 'state';
        };
    };
    findUnique<T extends stateFindUniqueArgs>(args: Prisma.SelectSubset<T, stateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends stateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, stateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends stateFindFirstArgs>(args?: Prisma.SelectSubset<T, stateFindFirstArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends stateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, stateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends stateFindManyArgs>(args?: Prisma.SelectSubset<T, stateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends stateCreateArgs>(args: Prisma.SelectSubset<T, stateCreateArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends stateCreateManyArgs>(args?: Prisma.SelectSubset<T, stateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends stateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, stateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends stateDeleteArgs>(args: Prisma.SelectSubset<T, stateDeleteArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends stateUpdateArgs>(args: Prisma.SelectSubset<T, stateUpdateArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends stateDeleteManyArgs>(args?: Prisma.SelectSubset<T, stateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends stateUpdateManyArgs>(args: Prisma.SelectSubset<T, stateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends stateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, stateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends stateUpsertArgs>(args: Prisma.SelectSubset<T, stateUpsertArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends stateCountArgs>(args?: Prisma.Subset<T, stateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StateCountAggregateOutputType> : number>;
    aggregate<T extends StateAggregateArgs>(args: Prisma.Subset<T, StateAggregateArgs>): Prisma.PrismaPromise<GetStateAggregateType<T>>;
    groupBy<T extends stateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: stateGroupByArgs['orderBy'];
    } : {
        orderBy?: stateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, stateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: stateFieldRefs;
}
export interface Prisma__stateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    county<T extends Prisma.state$countyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.state$countyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface stateFieldRefs {
    readonly id: Prisma.FieldRef<"state", 'Int'>;
    readonly name: Prisma.FieldRef<"state", 'String'>;
    readonly code: Prisma.FieldRef<"state", 'String'>;
    readonly created_at: Prisma.FieldRef<"state", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"state", 'DateTime'>;
}
export type stateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    where: Prisma.stateWhereUniqueInput;
};
export type stateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    where: Prisma.stateWhereUniqueInput;
};
export type stateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    where?: Prisma.stateWhereInput;
    orderBy?: Prisma.stateOrderByWithRelationInput | Prisma.stateOrderByWithRelationInput[];
    cursor?: Prisma.stateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
export type stateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    where?: Prisma.stateWhereInput;
    orderBy?: Prisma.stateOrderByWithRelationInput | Prisma.stateOrderByWithRelationInput[];
    cursor?: Prisma.stateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
export type stateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    where?: Prisma.stateWhereInput;
    orderBy?: Prisma.stateOrderByWithRelationInput | Prisma.stateOrderByWithRelationInput[];
    cursor?: Prisma.stateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StateScalarFieldEnum | Prisma.StateScalarFieldEnum[];
};
export type stateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stateCreateInput, Prisma.stateUncheckedCreateInput>;
};
export type stateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.stateCreateManyInput | Prisma.stateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    data: Prisma.stateCreateManyInput | Prisma.stateCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stateUpdateInput, Prisma.stateUncheckedUpdateInput>;
    where: Prisma.stateWhereUniqueInput;
};
export type stateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.stateUpdateManyMutationInput, Prisma.stateUncheckedUpdateManyInput>;
    where?: Prisma.stateWhereInput;
    limit?: number;
};
export type stateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stateUpdateManyMutationInput, Prisma.stateUncheckedUpdateManyInput>;
    where?: Prisma.stateWhereInput;
    limit?: number;
};
export type stateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    where: Prisma.stateWhereUniqueInput;
    create: Prisma.XOR<Prisma.stateCreateInput, Prisma.stateUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.stateUpdateInput, Prisma.stateUncheckedUpdateInput>;
};
export type stateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
    where: Prisma.stateWhereUniqueInput;
};
export type stateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stateWhereInput;
    limit?: number;
};
export type state$countyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelect<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    include?: Prisma.countyInclude<ExtArgs> | null;
    where?: Prisma.countyWhereInput;
    orderBy?: Prisma.countyOrderByWithRelationInput | Prisma.countyOrderByWithRelationInput[];
    cursor?: Prisma.countyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CountyScalarFieldEnum | Prisma.CountyScalarFieldEnum[];
};
export type stateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stateSelect<ExtArgs> | null;
    omit?: Prisma.stateOmit<ExtArgs> | null;
    include?: Prisma.stateInclude<ExtArgs> | null;
};
export {};
