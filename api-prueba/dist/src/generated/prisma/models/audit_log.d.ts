import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type audit_logModel = runtime.Types.Result.DefaultSelection<Prisma.$audit_logPayload>;
export type AggregateAudit_log = {
    _count: Audit_logCountAggregateOutputType | null;
    _avg: Audit_logAvgAggregateOutputType | null;
    _sum: Audit_logSumAggregateOutputType | null;
    _min: Audit_logMinAggregateOutputType | null;
    _max: Audit_logMaxAggregateOutputType | null;
};
export type Audit_logAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    entity_id: number | null;
};
export type Audit_logSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    entity_id: number | null;
};
export type Audit_logMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    action: string | null;
    entity: string | null;
    entity_id: number | null;
    created_at: Date | null;
};
export type Audit_logMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    action: string | null;
    entity: string | null;
    entity_id: number | null;
    created_at: Date | null;
};
export type Audit_logCountAggregateOutputType = {
    id: number;
    user_id: number;
    action: number;
    entity: number;
    entity_id: number;
    old_data: number;
    new_data: number;
    created_at: number;
    _all: number;
};
export type Audit_logAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    entity_id?: true;
};
export type Audit_logSumAggregateInputType = {
    id?: true;
    user_id?: true;
    entity_id?: true;
};
export type Audit_logMinAggregateInputType = {
    id?: true;
    user_id?: true;
    action?: true;
    entity?: true;
    entity_id?: true;
    created_at?: true;
};
export type Audit_logMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    action?: true;
    entity?: true;
    entity_id?: true;
    created_at?: true;
};
export type Audit_logCountAggregateInputType = {
    id?: true;
    user_id?: true;
    action?: true;
    entity?: true;
    entity_id?: true;
    old_data?: true;
    new_data?: true;
    created_at?: true;
    _all?: true;
};
export type Audit_logAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logWhereInput;
    orderBy?: Prisma.audit_logOrderByWithRelationInput | Prisma.audit_logOrderByWithRelationInput[];
    cursor?: Prisma.audit_logWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Audit_logCountAggregateInputType;
    _avg?: Audit_logAvgAggregateInputType;
    _sum?: Audit_logSumAggregateInputType;
    _min?: Audit_logMinAggregateInputType;
    _max?: Audit_logMaxAggregateInputType;
};
export type GetAudit_logAggregateType<T extends Audit_logAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_log]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAudit_log[P]> : Prisma.GetScalarType<T[P], AggregateAudit_log[P]>;
};
export type audit_logGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logWhereInput;
    orderBy?: Prisma.audit_logOrderByWithAggregationInput | Prisma.audit_logOrderByWithAggregationInput[];
    by: Prisma.Audit_logScalarFieldEnum[] | Prisma.Audit_logScalarFieldEnum;
    having?: Prisma.audit_logScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_logCountAggregateInputType | true;
    _avg?: Audit_logAvgAggregateInputType;
    _sum?: Audit_logSumAggregateInputType;
    _min?: Audit_logMinAggregateInputType;
    _max?: Audit_logMaxAggregateInputType;
};
export type Audit_logGroupByOutputType = {
    id: number;
    user_id: number | null;
    action: string;
    entity: string;
    entity_id: number;
    old_data: runtime.JsonValue | null;
    new_data: runtime.JsonValue | null;
    created_at: Date;
    _count: Audit_logCountAggregateOutputType | null;
    _avg: Audit_logAvgAggregateOutputType | null;
    _sum: Audit_logSumAggregateOutputType | null;
    _min: Audit_logMinAggregateOutputType | null;
    _max: Audit_logMaxAggregateOutputType | null;
};
type GetAudit_logGroupByPayload<T extends audit_logGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Audit_logGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Audit_logGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Audit_logGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Audit_logGroupByOutputType[P]>;
}>>;
export type audit_logWhereInput = {
    AND?: Prisma.audit_logWhereInput | Prisma.audit_logWhereInput[];
    OR?: Prisma.audit_logWhereInput[];
    NOT?: Prisma.audit_logWhereInput | Prisma.audit_logWhereInput[];
    id?: Prisma.IntFilter<"audit_log"> | number;
    user_id?: Prisma.IntNullableFilter<"audit_log"> | number | null;
    action?: Prisma.StringFilter<"audit_log"> | string;
    entity?: Prisma.StringFilter<"audit_log"> | string;
    entity_id?: Prisma.IntFilter<"audit_log"> | number;
    old_data?: Prisma.JsonNullableFilter<"audit_log">;
    new_data?: Prisma.JsonNullableFilter<"audit_log">;
    created_at?: Prisma.DateTimeFilter<"audit_log"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.userWhereInput> | null;
};
export type audit_logOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    old_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    new_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.userOrderByWithRelationInput;
};
export type audit_logWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.audit_logWhereInput | Prisma.audit_logWhereInput[];
    OR?: Prisma.audit_logWhereInput[];
    NOT?: Prisma.audit_logWhereInput | Prisma.audit_logWhereInput[];
    user_id?: Prisma.IntNullableFilter<"audit_log"> | number | null;
    action?: Prisma.StringFilter<"audit_log"> | string;
    entity?: Prisma.StringFilter<"audit_log"> | string;
    entity_id?: Prisma.IntFilter<"audit_log"> | number;
    old_data?: Prisma.JsonNullableFilter<"audit_log">;
    new_data?: Prisma.JsonNullableFilter<"audit_log">;
    created_at?: Prisma.DateTimeFilter<"audit_log"> | Date | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.userWhereInput> | null;
}, "id">;
export type audit_logOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    old_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    new_data?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.audit_logCountOrderByAggregateInput;
    _avg?: Prisma.audit_logAvgOrderByAggregateInput;
    _max?: Prisma.audit_logMaxOrderByAggregateInput;
    _min?: Prisma.audit_logMinOrderByAggregateInput;
    _sum?: Prisma.audit_logSumOrderByAggregateInput;
};
export type audit_logScalarWhereWithAggregatesInput = {
    AND?: Prisma.audit_logScalarWhereWithAggregatesInput | Prisma.audit_logScalarWhereWithAggregatesInput[];
    OR?: Prisma.audit_logScalarWhereWithAggregatesInput[];
    NOT?: Prisma.audit_logScalarWhereWithAggregatesInput | Prisma.audit_logScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"audit_log"> | number;
    user_id?: Prisma.IntNullableWithAggregatesFilter<"audit_log"> | number | null;
    action?: Prisma.StringWithAggregatesFilter<"audit_log"> | string;
    entity?: Prisma.StringWithAggregatesFilter<"audit_log"> | string;
    entity_id?: Prisma.IntWithAggregatesFilter<"audit_log"> | number;
    old_data?: Prisma.JsonNullableWithAggregatesFilter<"audit_log">;
    new_data?: Prisma.JsonNullableWithAggregatesFilter<"audit_log">;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"audit_log"> | Date | string;
};
export type audit_logCreateInput = {
    action: string;
    entity: string;
    entity_id: number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    user?: Prisma.userCreateNestedOneWithoutAudit_logInput;
};
export type audit_logUncheckedCreateInput = {
    id?: number;
    user_id?: number | null;
    action: string;
    entity: string;
    entity_id: number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logUpdateInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.userUpdateOneWithoutAudit_logNestedInput;
};
export type audit_logUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logCreateManyInput = {
    id?: number;
    user_id?: number | null;
    action: string;
    entity: string;
    entity_id: number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logUpdateManyMutationInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    user_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    old_data?: Prisma.SortOrder;
    new_data?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type audit_logAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
};
export type audit_logMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type audit_logMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    entity?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type audit_logSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    entity_id?: Prisma.SortOrder;
};
export type Audit_logListRelationFilter = {
    every?: Prisma.audit_logWhereInput;
    some?: Prisma.audit_logWhereInput;
    none?: Prisma.audit_logWhereInput;
};
export type audit_logOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type audit_logCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.audit_logCreateWithoutUserInput, Prisma.audit_logUncheckedCreateWithoutUserInput> | Prisma.audit_logCreateWithoutUserInput[] | Prisma.audit_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.audit_logCreateOrConnectWithoutUserInput | Prisma.audit_logCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.audit_logCreateManyUserInputEnvelope;
    connect?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
};
export type audit_logUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.audit_logCreateWithoutUserInput, Prisma.audit_logUncheckedCreateWithoutUserInput> | Prisma.audit_logCreateWithoutUserInput[] | Prisma.audit_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.audit_logCreateOrConnectWithoutUserInput | Prisma.audit_logCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.audit_logCreateManyUserInputEnvelope;
    connect?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
};
export type audit_logUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.audit_logCreateWithoutUserInput, Prisma.audit_logUncheckedCreateWithoutUserInput> | Prisma.audit_logCreateWithoutUserInput[] | Prisma.audit_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.audit_logCreateOrConnectWithoutUserInput | Prisma.audit_logCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.audit_logUpsertWithWhereUniqueWithoutUserInput | Prisma.audit_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.audit_logCreateManyUserInputEnvelope;
    set?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
    disconnect?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
    delete?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
    connect?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
    update?: Prisma.audit_logUpdateWithWhereUniqueWithoutUserInput | Prisma.audit_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.audit_logUpdateManyWithWhereWithoutUserInput | Prisma.audit_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.audit_logScalarWhereInput | Prisma.audit_logScalarWhereInput[];
};
export type audit_logUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.audit_logCreateWithoutUserInput, Prisma.audit_logUncheckedCreateWithoutUserInput> | Prisma.audit_logCreateWithoutUserInput[] | Prisma.audit_logUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.audit_logCreateOrConnectWithoutUserInput | Prisma.audit_logCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.audit_logUpsertWithWhereUniqueWithoutUserInput | Prisma.audit_logUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.audit_logCreateManyUserInputEnvelope;
    set?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
    disconnect?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
    delete?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
    connect?: Prisma.audit_logWhereUniqueInput | Prisma.audit_logWhereUniqueInput[];
    update?: Prisma.audit_logUpdateWithWhereUniqueWithoutUserInput | Prisma.audit_logUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.audit_logUpdateManyWithWhereWithoutUserInput | Prisma.audit_logUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.audit_logScalarWhereInput | Prisma.audit_logScalarWhereInput[];
};
export type audit_logCreateWithoutUserInput = {
    action: string;
    entity: string;
    entity_id: number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logUncheckedCreateWithoutUserInput = {
    id?: number;
    action: string;
    entity: string;
    entity_id: number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logCreateOrConnectWithoutUserInput = {
    where: Prisma.audit_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.audit_logCreateWithoutUserInput, Prisma.audit_logUncheckedCreateWithoutUserInput>;
};
export type audit_logCreateManyUserInputEnvelope = {
    data: Prisma.audit_logCreateManyUserInput | Prisma.audit_logCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type audit_logUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.audit_logWhereUniqueInput;
    update: Prisma.XOR<Prisma.audit_logUpdateWithoutUserInput, Prisma.audit_logUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.audit_logCreateWithoutUserInput, Prisma.audit_logUncheckedCreateWithoutUserInput>;
};
export type audit_logUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.audit_logWhereUniqueInput;
    data: Prisma.XOR<Prisma.audit_logUpdateWithoutUserInput, Prisma.audit_logUncheckedUpdateWithoutUserInput>;
};
export type audit_logUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.audit_logScalarWhereInput;
    data: Prisma.XOR<Prisma.audit_logUpdateManyMutationInput, Prisma.audit_logUncheckedUpdateManyWithoutUserInput>;
};
export type audit_logScalarWhereInput = {
    AND?: Prisma.audit_logScalarWhereInput | Prisma.audit_logScalarWhereInput[];
    OR?: Prisma.audit_logScalarWhereInput[];
    NOT?: Prisma.audit_logScalarWhereInput | Prisma.audit_logScalarWhereInput[];
    id?: Prisma.IntFilter<"audit_log"> | number;
    user_id?: Prisma.IntNullableFilter<"audit_log"> | number | null;
    action?: Prisma.StringFilter<"audit_log"> | string;
    entity?: Prisma.StringFilter<"audit_log"> | string;
    entity_id?: Prisma.IntFilter<"audit_log"> | number;
    old_data?: Prisma.JsonNullableFilter<"audit_log">;
    new_data?: Prisma.JsonNullableFilter<"audit_log">;
    created_at?: Prisma.DateTimeFilter<"audit_log"> | Date | string;
};
export type audit_logCreateManyUserInput = {
    id?: number;
    action: string;
    entity: string;
    entity_id: number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logUpdateWithoutUserInput = {
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    entity?: Prisma.StringFieldUpdateOperationsInput | string;
    entity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    old_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    new_data?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    action?: boolean;
    entity?: boolean;
    entity_id?: boolean;
    old_data?: boolean;
    new_data?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.audit_log$userArgs<ExtArgs>;
}, ExtArgs["result"]["audit_log"]>;
export type audit_logSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    action?: boolean;
    entity?: boolean;
    entity_id?: boolean;
    old_data?: boolean;
    new_data?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.audit_log$userArgs<ExtArgs>;
}, ExtArgs["result"]["audit_log"]>;
export type audit_logSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    action?: boolean;
    entity?: boolean;
    entity_id?: boolean;
    old_data?: boolean;
    new_data?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.audit_log$userArgs<ExtArgs>;
}, ExtArgs["result"]["audit_log"]>;
export type audit_logSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    action?: boolean;
    entity?: boolean;
    entity_id?: boolean;
    old_data?: boolean;
    new_data?: boolean;
    created_at?: boolean;
};
export type audit_logOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "action" | "entity" | "entity_id" | "old_data" | "new_data" | "created_at", ExtArgs["result"]["audit_log"]>;
export type audit_logInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.audit_log$userArgs<ExtArgs>;
};
export type audit_logIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.audit_log$userArgs<ExtArgs>;
};
export type audit_logIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.audit_log$userArgs<ExtArgs>;
};
export type $audit_logPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "audit_log";
    objects: {
        user: Prisma.$userPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        user_id: number | null;
        action: string;
        entity: string;
        entity_id: number;
        old_data: runtime.JsonValue | null;
        new_data: runtime.JsonValue | null;
        created_at: Date;
    }, ExtArgs["result"]["audit_log"]>;
    composites: {};
};
export type audit_logGetPayload<S extends boolean | null | undefined | audit_logDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$audit_logPayload, S>;
export type audit_logCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<audit_logFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Audit_logCountAggregateInputType | true;
};
export interface audit_logDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['audit_log'];
        meta: {
            name: 'audit_log';
        };
    };
    findUnique<T extends audit_logFindUniqueArgs>(args: Prisma.SelectSubset<T, audit_logFindUniqueArgs<ExtArgs>>): Prisma.Prisma__audit_logClient<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends audit_logFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, audit_logFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__audit_logClient<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends audit_logFindFirstArgs>(args?: Prisma.SelectSubset<T, audit_logFindFirstArgs<ExtArgs>>): Prisma.Prisma__audit_logClient<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends audit_logFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, audit_logFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__audit_logClient<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends audit_logFindManyArgs>(args?: Prisma.SelectSubset<T, audit_logFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends audit_logCreateArgs>(args: Prisma.SelectSubset<T, audit_logCreateArgs<ExtArgs>>): Prisma.Prisma__audit_logClient<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends audit_logCreateManyArgs>(args?: Prisma.SelectSubset<T, audit_logCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends audit_logCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, audit_logCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends audit_logDeleteArgs>(args: Prisma.SelectSubset<T, audit_logDeleteArgs<ExtArgs>>): Prisma.Prisma__audit_logClient<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends audit_logUpdateArgs>(args: Prisma.SelectSubset<T, audit_logUpdateArgs<ExtArgs>>): Prisma.Prisma__audit_logClient<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends audit_logDeleteManyArgs>(args?: Prisma.SelectSubset<T, audit_logDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends audit_logUpdateManyArgs>(args: Prisma.SelectSubset<T, audit_logUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends audit_logUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, audit_logUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends audit_logUpsertArgs>(args: Prisma.SelectSubset<T, audit_logUpsertArgs<ExtArgs>>): Prisma.Prisma__audit_logClient<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends audit_logCountArgs>(args?: Prisma.Subset<T, audit_logCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Audit_logCountAggregateOutputType> : number>;
    aggregate<T extends Audit_logAggregateArgs>(args: Prisma.Subset<T, Audit_logAggregateArgs>): Prisma.PrismaPromise<GetAudit_logAggregateType<T>>;
    groupBy<T extends audit_logGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: audit_logGroupByArgs['orderBy'];
    } : {
        orderBy?: audit_logGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, audit_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: audit_logFieldRefs;
}
export interface Prisma__audit_logClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.audit_log$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.audit_log$userArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface audit_logFieldRefs {
    readonly id: Prisma.FieldRef<"audit_log", 'Int'>;
    readonly user_id: Prisma.FieldRef<"audit_log", 'Int'>;
    readonly action: Prisma.FieldRef<"audit_log", 'String'>;
    readonly entity: Prisma.FieldRef<"audit_log", 'String'>;
    readonly entity_id: Prisma.FieldRef<"audit_log", 'Int'>;
    readonly old_data: Prisma.FieldRef<"audit_log", 'Json'>;
    readonly new_data: Prisma.FieldRef<"audit_log", 'Json'>;
    readonly created_at: Prisma.FieldRef<"audit_log", 'DateTime'>;
}
export type audit_logFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    where: Prisma.audit_logWhereUniqueInput;
};
export type audit_logFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    where: Prisma.audit_logWhereUniqueInput;
};
export type audit_logFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    where?: Prisma.audit_logWhereInput;
    orderBy?: Prisma.audit_logOrderByWithRelationInput | Prisma.audit_logOrderByWithRelationInput[];
    cursor?: Prisma.audit_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_logScalarFieldEnum | Prisma.Audit_logScalarFieldEnum[];
};
export type audit_logFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    where?: Prisma.audit_logWhereInput;
    orderBy?: Prisma.audit_logOrderByWithRelationInput | Prisma.audit_logOrderByWithRelationInput[];
    cursor?: Prisma.audit_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_logScalarFieldEnum | Prisma.Audit_logScalarFieldEnum[];
};
export type audit_logFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    where?: Prisma.audit_logWhereInput;
    orderBy?: Prisma.audit_logOrderByWithRelationInput | Prisma.audit_logOrderByWithRelationInput[];
    cursor?: Prisma.audit_logWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_logScalarFieldEnum | Prisma.Audit_logScalarFieldEnum[];
};
export type audit_logCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_logCreateInput, Prisma.audit_logUncheckedCreateInput>;
};
export type audit_logCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.audit_logCreateManyInput | Prisma.audit_logCreateManyInput[];
    skipDuplicates?: boolean;
};
export type audit_logCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    data: Prisma.audit_logCreateManyInput | Prisma.audit_logCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.audit_logIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type audit_logUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_logUpdateInput, Prisma.audit_logUncheckedUpdateInput>;
    where: Prisma.audit_logWhereUniqueInput;
};
export type audit_logUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.audit_logUpdateManyMutationInput, Prisma.audit_logUncheckedUpdateManyInput>;
    where?: Prisma.audit_logWhereInput;
    limit?: number;
};
export type audit_logUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_logUpdateManyMutationInput, Prisma.audit_logUncheckedUpdateManyInput>;
    where?: Prisma.audit_logWhereInput;
    limit?: number;
    include?: Prisma.audit_logIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type audit_logUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    where: Prisma.audit_logWhereUniqueInput;
    create: Prisma.XOR<Prisma.audit_logCreateInput, Prisma.audit_logUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.audit_logUpdateInput, Prisma.audit_logUncheckedUpdateInput>;
};
export type audit_logDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
    where: Prisma.audit_logWhereUniqueInput;
};
export type audit_logDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logWhereInput;
    limit?: number;
};
export type audit_log$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where?: Prisma.userWhereInput;
};
export type audit_logDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logSelect<ExtArgs> | null;
    omit?: Prisma.audit_logOmit<ExtArgs> | null;
    include?: Prisma.audit_logInclude<ExtArgs> | null;
};
export {};
