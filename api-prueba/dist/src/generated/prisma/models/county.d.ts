import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type countyModel = runtime.Types.Result.DefaultSelection<Prisma.$countyPayload>;
export type AggregateCounty = {
    _count: CountyCountAggregateOutputType | null;
    _avg: CountyAvgAggregateOutputType | null;
    _sum: CountySumAggregateOutputType | null;
    _min: CountyMinAggregateOutputType | null;
    _max: CountyMaxAggregateOutputType | null;
};
export type CountyAvgAggregateOutputType = {
    id: number | null;
    state_id: number | null;
};
export type CountySumAggregateOutputType = {
    id: number | null;
    state_id: number | null;
};
export type CountyMinAggregateOutputType = {
    id: number | null;
    state_id: number | null;
    name: string | null;
    code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CountyMaxAggregateOutputType = {
    id: number | null;
    state_id: number | null;
    name: string | null;
    code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CountyCountAggregateOutputType = {
    id: number;
    state_id: number;
    name: number;
    code: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CountyAvgAggregateInputType = {
    id?: true;
    state_id?: true;
};
export type CountySumAggregateInputType = {
    id?: true;
    state_id?: true;
};
export type CountyMinAggregateInputType = {
    id?: true;
    state_id?: true;
    name?: true;
    code?: true;
    created_at?: true;
    updated_at?: true;
};
export type CountyMaxAggregateInputType = {
    id?: true;
    state_id?: true;
    name?: true;
    code?: true;
    created_at?: true;
    updated_at?: true;
};
export type CountyCountAggregateInputType = {
    id?: true;
    state_id?: true;
    name?: true;
    code?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CountyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countyWhereInput;
    orderBy?: Prisma.countyOrderByWithRelationInput | Prisma.countyOrderByWithRelationInput[];
    cursor?: Prisma.countyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CountyCountAggregateInputType;
    _avg?: CountyAvgAggregateInputType;
    _sum?: CountySumAggregateInputType;
    _min?: CountyMinAggregateInputType;
    _max?: CountyMaxAggregateInputType;
};
export type GetCountyAggregateType<T extends CountyAggregateArgs> = {
    [P in keyof T & keyof AggregateCounty]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCounty[P]> : Prisma.GetScalarType<T[P], AggregateCounty[P]>;
};
export type countyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countyWhereInput;
    orderBy?: Prisma.countyOrderByWithAggregationInput | Prisma.countyOrderByWithAggregationInput[];
    by: Prisma.CountyScalarFieldEnum[] | Prisma.CountyScalarFieldEnum;
    having?: Prisma.countyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CountyCountAggregateInputType | true;
    _avg?: CountyAvgAggregateInputType;
    _sum?: CountySumAggregateInputType;
    _min?: CountyMinAggregateInputType;
    _max?: CountyMaxAggregateInputType;
};
export type CountyGroupByOutputType = {
    id: number;
    state_id: number;
    name: string;
    code: string;
    created_at: Date;
    updated_at: Date;
    _count: CountyCountAggregateOutputType | null;
    _avg: CountyAvgAggregateOutputType | null;
    _sum: CountySumAggregateOutputType | null;
    _min: CountyMinAggregateOutputType | null;
    _max: CountyMaxAggregateOutputType | null;
};
type GetCountyGroupByPayload<T extends countyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CountyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CountyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CountyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CountyGroupByOutputType[P]>;
}>>;
export type countyWhereInput = {
    AND?: Prisma.countyWhereInput | Prisma.countyWhereInput[];
    OR?: Prisma.countyWhereInput[];
    NOT?: Prisma.countyWhereInput | Prisma.countyWhereInput[];
    id?: Prisma.IntFilter<"county"> | number;
    state_id?: Prisma.IntFilter<"county"> | number;
    name?: Prisma.StringFilter<"county"> | string;
    code?: Prisma.StringFilter<"county"> | string;
    created_at?: Prisma.DateTimeFilter<"county"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"county"> | Date | string;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.stateWhereInput>;
    customer?: Prisma.CustomerListRelationFilter;
};
export type countyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    state_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    state?: Prisma.stateOrderByWithRelationInput;
    customer?: Prisma.customerOrderByRelationAggregateInput;
};
export type countyWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    state_id_name?: Prisma.countyState_idNameCompoundUniqueInput;
    AND?: Prisma.countyWhereInput | Prisma.countyWhereInput[];
    OR?: Prisma.countyWhereInput[];
    NOT?: Prisma.countyWhereInput | Prisma.countyWhereInput[];
    state_id?: Prisma.IntFilter<"county"> | number;
    name?: Prisma.StringFilter<"county"> | string;
    code?: Prisma.StringFilter<"county"> | string;
    created_at?: Prisma.DateTimeFilter<"county"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"county"> | Date | string;
    state?: Prisma.XOR<Prisma.StateScalarRelationFilter, Prisma.stateWhereInput>;
    customer?: Prisma.CustomerListRelationFilter;
}, "id" | "state_id_name">;
export type countyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    state_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.countyCountOrderByAggregateInput;
    _avg?: Prisma.countyAvgOrderByAggregateInput;
    _max?: Prisma.countyMaxOrderByAggregateInput;
    _min?: Prisma.countyMinOrderByAggregateInput;
    _sum?: Prisma.countySumOrderByAggregateInput;
};
export type countyScalarWhereWithAggregatesInput = {
    AND?: Prisma.countyScalarWhereWithAggregatesInput | Prisma.countyScalarWhereWithAggregatesInput[];
    OR?: Prisma.countyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.countyScalarWhereWithAggregatesInput | Prisma.countyScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"county"> | number;
    state_id?: Prisma.IntWithAggregatesFilter<"county"> | number;
    name?: Prisma.StringWithAggregatesFilter<"county"> | string;
    code?: Prisma.StringWithAggregatesFilter<"county"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"county"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"county"> | Date | string;
};
export type countyCreateInput = {
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    state: Prisma.stateCreateNestedOneWithoutCountyInput;
    customer?: Prisma.customerCreateNestedManyWithoutCountyInput;
};
export type countyUncheckedCreateInput = {
    id?: number;
    state_id: number;
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: Prisma.customerUncheckedCreateNestedManyWithoutCountyInput;
};
export type countyUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.stateUpdateOneRequiredWithoutCountyNestedInput;
    customer?: Prisma.customerUpdateManyWithoutCountyNestedInput;
};
export type countyUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    state_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUncheckedUpdateManyWithoutCountyNestedInput;
};
export type countyCreateManyInput = {
    id?: number;
    state_id: number;
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type countyUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type countyUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    state_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type countyState_idNameCompoundUniqueInput = {
    state_id: number;
    name: string;
};
export type countyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    state_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type countyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    state_id?: Prisma.SortOrder;
};
export type countyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    state_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type countyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    state_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type countySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    state_id?: Prisma.SortOrder;
};
export type CountyScalarRelationFilter = {
    is?: Prisma.countyWhereInput;
    isNot?: Prisma.countyWhereInput;
};
export type CountyListRelationFilter = {
    every?: Prisma.countyWhereInput;
    some?: Prisma.countyWhereInput;
    none?: Prisma.countyWhereInput;
};
export type countyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type countyCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.countyCreateWithoutCustomerInput, Prisma.countyUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.countyCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.countyWhereUniqueInput;
};
export type countyUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.countyCreateWithoutCustomerInput, Prisma.countyUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.countyCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.countyUpsertWithoutCustomerInput;
    connect?: Prisma.countyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.countyUpdateToOneWithWhereWithoutCustomerInput, Prisma.countyUpdateWithoutCustomerInput>, Prisma.countyUncheckedUpdateWithoutCustomerInput>;
};
export type countyCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.countyCreateWithoutStateInput, Prisma.countyUncheckedCreateWithoutStateInput> | Prisma.countyCreateWithoutStateInput[] | Prisma.countyUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.countyCreateOrConnectWithoutStateInput | Prisma.countyCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.countyCreateManyStateInputEnvelope;
    connect?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
};
export type countyUncheckedCreateNestedManyWithoutStateInput = {
    create?: Prisma.XOR<Prisma.countyCreateWithoutStateInput, Prisma.countyUncheckedCreateWithoutStateInput> | Prisma.countyCreateWithoutStateInput[] | Prisma.countyUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.countyCreateOrConnectWithoutStateInput | Prisma.countyCreateOrConnectWithoutStateInput[];
    createMany?: Prisma.countyCreateManyStateInputEnvelope;
    connect?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
};
export type countyUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.countyCreateWithoutStateInput, Prisma.countyUncheckedCreateWithoutStateInput> | Prisma.countyCreateWithoutStateInput[] | Prisma.countyUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.countyCreateOrConnectWithoutStateInput | Prisma.countyCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.countyUpsertWithWhereUniqueWithoutStateInput | Prisma.countyUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.countyCreateManyStateInputEnvelope;
    set?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
    disconnect?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
    delete?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
    connect?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
    update?: Prisma.countyUpdateWithWhereUniqueWithoutStateInput | Prisma.countyUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.countyUpdateManyWithWhereWithoutStateInput | Prisma.countyUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.countyScalarWhereInput | Prisma.countyScalarWhereInput[];
};
export type countyUncheckedUpdateManyWithoutStateNestedInput = {
    create?: Prisma.XOR<Prisma.countyCreateWithoutStateInput, Prisma.countyUncheckedCreateWithoutStateInput> | Prisma.countyCreateWithoutStateInput[] | Prisma.countyUncheckedCreateWithoutStateInput[];
    connectOrCreate?: Prisma.countyCreateOrConnectWithoutStateInput | Prisma.countyCreateOrConnectWithoutStateInput[];
    upsert?: Prisma.countyUpsertWithWhereUniqueWithoutStateInput | Prisma.countyUpsertWithWhereUniqueWithoutStateInput[];
    createMany?: Prisma.countyCreateManyStateInputEnvelope;
    set?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
    disconnect?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
    delete?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
    connect?: Prisma.countyWhereUniqueInput | Prisma.countyWhereUniqueInput[];
    update?: Prisma.countyUpdateWithWhereUniqueWithoutStateInput | Prisma.countyUpdateWithWhereUniqueWithoutStateInput[];
    updateMany?: Prisma.countyUpdateManyWithWhereWithoutStateInput | Prisma.countyUpdateManyWithWhereWithoutStateInput[];
    deleteMany?: Prisma.countyScalarWhereInput | Prisma.countyScalarWhereInput[];
};
export type countyCreateWithoutCustomerInput = {
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    state: Prisma.stateCreateNestedOneWithoutCountyInput;
};
export type countyUncheckedCreateWithoutCustomerInput = {
    id?: number;
    state_id: number;
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type countyCreateOrConnectWithoutCustomerInput = {
    where: Prisma.countyWhereUniqueInput;
    create: Prisma.XOR<Prisma.countyCreateWithoutCustomerInput, Prisma.countyUncheckedCreateWithoutCustomerInput>;
};
export type countyUpsertWithoutCustomerInput = {
    update: Prisma.XOR<Prisma.countyUpdateWithoutCustomerInput, Prisma.countyUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.countyCreateWithoutCustomerInput, Prisma.countyUncheckedCreateWithoutCustomerInput>;
    where?: Prisma.countyWhereInput;
};
export type countyUpdateToOneWithWhereWithoutCustomerInput = {
    where?: Prisma.countyWhereInput;
    data: Prisma.XOR<Prisma.countyUpdateWithoutCustomerInput, Prisma.countyUncheckedUpdateWithoutCustomerInput>;
};
export type countyUpdateWithoutCustomerInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    state?: Prisma.stateUpdateOneRequiredWithoutCountyNestedInput;
};
export type countyUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    state_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type countyCreateWithoutStateInput = {
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: Prisma.customerCreateNestedManyWithoutCountyInput;
};
export type countyUncheckedCreateWithoutStateInput = {
    id?: number;
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: Prisma.customerUncheckedCreateNestedManyWithoutCountyInput;
};
export type countyCreateOrConnectWithoutStateInput = {
    where: Prisma.countyWhereUniqueInput;
    create: Prisma.XOR<Prisma.countyCreateWithoutStateInput, Prisma.countyUncheckedCreateWithoutStateInput>;
};
export type countyCreateManyStateInputEnvelope = {
    data: Prisma.countyCreateManyStateInput | Prisma.countyCreateManyStateInput[];
    skipDuplicates?: boolean;
};
export type countyUpsertWithWhereUniqueWithoutStateInput = {
    where: Prisma.countyWhereUniqueInput;
    update: Prisma.XOR<Prisma.countyUpdateWithoutStateInput, Prisma.countyUncheckedUpdateWithoutStateInput>;
    create: Prisma.XOR<Prisma.countyCreateWithoutStateInput, Prisma.countyUncheckedCreateWithoutStateInput>;
};
export type countyUpdateWithWhereUniqueWithoutStateInput = {
    where: Prisma.countyWhereUniqueInput;
    data: Prisma.XOR<Prisma.countyUpdateWithoutStateInput, Prisma.countyUncheckedUpdateWithoutStateInput>;
};
export type countyUpdateManyWithWhereWithoutStateInput = {
    where: Prisma.countyScalarWhereInput;
    data: Prisma.XOR<Prisma.countyUpdateManyMutationInput, Prisma.countyUncheckedUpdateManyWithoutStateInput>;
};
export type countyScalarWhereInput = {
    AND?: Prisma.countyScalarWhereInput | Prisma.countyScalarWhereInput[];
    OR?: Prisma.countyScalarWhereInput[];
    NOT?: Prisma.countyScalarWhereInput | Prisma.countyScalarWhereInput[];
    id?: Prisma.IntFilter<"county"> | number;
    state_id?: Prisma.IntFilter<"county"> | number;
    name?: Prisma.StringFilter<"county"> | string;
    code?: Prisma.StringFilter<"county"> | string;
    created_at?: Prisma.DateTimeFilter<"county"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"county"> | Date | string;
};
export type countyCreateManyStateInput = {
    id?: number;
    name: string;
    code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type countyUpdateWithoutStateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUpdateManyWithoutCountyNestedInput;
};
export type countyUncheckedUpdateWithoutStateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUncheckedUpdateManyWithoutCountyNestedInput;
};
export type countyUncheckedUpdateManyWithoutStateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CountyCountOutputType = {
    customer: number;
};
export type CountyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | CountyCountOutputTypeCountCustomerArgs;
};
export type CountyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CountyCountOutputTypeSelect<ExtArgs> | null;
};
export type CountyCountOutputTypeCountCustomerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customerWhereInput;
};
export type countySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    state_id?: boolean;
    name?: boolean;
    code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    state?: boolean | Prisma.stateDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.county$customerArgs<ExtArgs>;
    _count?: boolean | Prisma.CountyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["county"]>;
export type countySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    state_id?: boolean;
    name?: boolean;
    code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    state?: boolean | Prisma.stateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["county"]>;
export type countySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    state_id?: boolean;
    name?: boolean;
    code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    state?: boolean | Prisma.stateDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["county"]>;
export type countySelectScalar = {
    id?: boolean;
    state_id?: boolean;
    name?: boolean;
    code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type countyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "state_id" | "name" | "code" | "created_at" | "updated_at", ExtArgs["result"]["county"]>;
export type countyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    state?: boolean | Prisma.stateDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.county$customerArgs<ExtArgs>;
    _count?: boolean | Prisma.CountyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type countyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    state?: boolean | Prisma.stateDefaultArgs<ExtArgs>;
};
export type countyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    state?: boolean | Prisma.stateDefaultArgs<ExtArgs>;
};
export type $countyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "county";
    objects: {
        state: Prisma.$statePayload<ExtArgs>;
        customer: Prisma.$customerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        state_id: number;
        name: string;
        code: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["county"]>;
    composites: {};
};
export type countyGetPayload<S extends boolean | null | undefined | countyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$countyPayload, S>;
export type countyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<countyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CountyCountAggregateInputType | true;
};
export interface countyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['county'];
        meta: {
            name: 'county';
        };
    };
    findUnique<T extends countyFindUniqueArgs>(args: Prisma.SelectSubset<T, countyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends countyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, countyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends countyFindFirstArgs>(args?: Prisma.SelectSubset<T, countyFindFirstArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends countyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, countyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends countyFindManyArgs>(args?: Prisma.SelectSubset<T, countyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends countyCreateArgs>(args: Prisma.SelectSubset<T, countyCreateArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends countyCreateManyArgs>(args?: Prisma.SelectSubset<T, countyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends countyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, countyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends countyDeleteArgs>(args: Prisma.SelectSubset<T, countyDeleteArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends countyUpdateArgs>(args: Prisma.SelectSubset<T, countyUpdateArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends countyDeleteManyArgs>(args?: Prisma.SelectSubset<T, countyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends countyUpdateManyArgs>(args: Prisma.SelectSubset<T, countyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends countyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, countyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends countyUpsertArgs>(args: Prisma.SelectSubset<T, countyUpsertArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends countyCountArgs>(args?: Prisma.Subset<T, countyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CountyCountAggregateOutputType> : number>;
    aggregate<T extends CountyAggregateArgs>(args: Prisma.Subset<T, CountyAggregateArgs>): Prisma.PrismaPromise<GetCountyAggregateType<T>>;
    groupBy<T extends countyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: countyGroupByArgs['orderBy'];
    } : {
        orderBy?: countyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, countyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: countyFieldRefs;
}
export interface Prisma__countyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    state<T extends Prisma.stateDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stateDefaultArgs<ExtArgs>>): Prisma.Prisma__stateClient<runtime.Types.Result.GetResult<Prisma.$statePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.county$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.county$customerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface countyFieldRefs {
    readonly id: Prisma.FieldRef<"county", 'Int'>;
    readonly state_id: Prisma.FieldRef<"county", 'Int'>;
    readonly name: Prisma.FieldRef<"county", 'String'>;
    readonly code: Prisma.FieldRef<"county", 'String'>;
    readonly created_at: Prisma.FieldRef<"county", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"county", 'DateTime'>;
}
export type countyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelect<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    include?: Prisma.countyInclude<ExtArgs> | null;
    where: Prisma.countyWhereUniqueInput;
};
export type countyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelect<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    include?: Prisma.countyInclude<ExtArgs> | null;
    where: Prisma.countyWhereUniqueInput;
};
export type countyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type countyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type countyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type countyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelect<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    include?: Prisma.countyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countyCreateInput, Prisma.countyUncheckedCreateInput>;
};
export type countyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.countyCreateManyInput | Prisma.countyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type countyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    data: Prisma.countyCreateManyInput | Prisma.countyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.countyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type countyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelect<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    include?: Prisma.countyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countyUpdateInput, Prisma.countyUncheckedUpdateInput>;
    where: Prisma.countyWhereUniqueInput;
};
export type countyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.countyUpdateManyMutationInput, Prisma.countyUncheckedUpdateManyInput>;
    where?: Prisma.countyWhereInput;
    limit?: number;
};
export type countyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.countyUpdateManyMutationInput, Prisma.countyUncheckedUpdateManyInput>;
    where?: Prisma.countyWhereInput;
    limit?: number;
    include?: Prisma.countyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type countyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelect<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    include?: Prisma.countyInclude<ExtArgs> | null;
    where: Prisma.countyWhereUniqueInput;
    create: Prisma.XOR<Prisma.countyCreateInput, Prisma.countyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.countyUpdateInput, Prisma.countyUncheckedUpdateInput>;
};
export type countyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelect<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    include?: Prisma.countyInclude<ExtArgs> | null;
    where: Prisma.countyWhereUniqueInput;
};
export type countyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.countyWhereInput;
    limit?: number;
};
export type county$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where?: Prisma.customerWhereInput;
    orderBy?: Prisma.customerOrderByWithRelationInput | Prisma.customerOrderByWithRelationInput[];
    cursor?: Prisma.customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type countyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.countySelect<ExtArgs> | null;
    omit?: Prisma.countyOmit<ExtArgs> | null;
    include?: Prisma.countyInclude<ExtArgs> | null;
};
export {};
