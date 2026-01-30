import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type invoiceModel = runtime.Types.Result.DefaultSelection<Prisma.$invoicePayload>;
export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
export type InvoiceAvgAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
    total: runtime.Decimal | null;
    created_by: number | null;
};
export type InvoiceSumAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
    total: runtime.Decimal | null;
    created_by: number | null;
};
export type InvoiceMinAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
    total: runtime.Decimal | null;
    status: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type InvoiceMaxAggregateOutputType = {
    id: number | null;
    customer_id: number | null;
    total: runtime.Decimal | null;
    status: string | null;
    created_by: number | null;
    created_at: Date | null;
};
export type InvoiceCountAggregateOutputType = {
    id: number;
    customer_id: number;
    total: number;
    status: number;
    created_by: number;
    created_at: number;
    _all: number;
};
export type InvoiceAvgAggregateInputType = {
    id?: true;
    customer_id?: true;
    total?: true;
    created_by?: true;
};
export type InvoiceSumAggregateInputType = {
    id?: true;
    customer_id?: true;
    total?: true;
    created_by?: true;
};
export type InvoiceMinAggregateInputType = {
    id?: true;
    customer_id?: true;
    total?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
};
export type InvoiceMaxAggregateInputType = {
    id?: true;
    customer_id?: true;
    total?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
};
export type InvoiceCountAggregateInputType = {
    id?: true;
    customer_id?: true;
    total?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    _all?: true;
};
export type InvoiceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.invoiceWhereInput;
    orderBy?: Prisma.invoiceOrderByWithRelationInput | Prisma.invoiceOrderByWithRelationInput[];
    cursor?: Prisma.invoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvoiceCountAggregateInputType;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvoice[P]> : Prisma.GetScalarType<T[P], AggregateInvoice[P]>;
};
export type invoiceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.invoiceWhereInput;
    orderBy?: Prisma.invoiceOrderByWithAggregationInput | Prisma.invoiceOrderByWithAggregationInput[];
    by: Prisma.InvoiceScalarFieldEnum[] | Prisma.InvoiceScalarFieldEnum;
    having?: Prisma.invoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _avg?: InvoiceAvgAggregateInputType;
    _sum?: InvoiceSumAggregateInputType;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
};
export type InvoiceGroupByOutputType = {
    id: number;
    customer_id: number;
    total: runtime.Decimal;
    status: string;
    created_by: number;
    created_at: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _avg: InvoiceAvgAggregateOutputType | null;
    _sum: InvoiceSumAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
};
type GetInvoiceGroupByPayload<T extends invoiceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
}>>;
export type invoiceWhereInput = {
    AND?: Prisma.invoiceWhereInput | Prisma.invoiceWhereInput[];
    OR?: Prisma.invoiceWhereInput[];
    NOT?: Prisma.invoiceWhereInput | Prisma.invoiceWhereInput[];
    id?: Prisma.IntFilter<"invoice"> | number;
    customer_id?: Prisma.IntFilter<"invoice"> | number;
    total?: Prisma.DecimalFilter<"invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"invoice"> | string;
    created_by?: Prisma.IntFilter<"invoice"> | number;
    created_at?: Prisma.DateTimeFilter<"invoice"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.customerWhereInput>;
};
export type invoiceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.userOrderByWithRelationInput;
    customer?: Prisma.customerOrderByWithRelationInput;
};
export type invoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.invoiceWhereInput | Prisma.invoiceWhereInput[];
    OR?: Prisma.invoiceWhereInput[];
    NOT?: Prisma.invoiceWhereInput | Prisma.invoiceWhereInput[];
    customer_id?: Prisma.IntFilter<"invoice"> | number;
    total?: Prisma.DecimalFilter<"invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"invoice"> | string;
    created_by?: Prisma.IntFilter<"invoice"> | number;
    created_at?: Prisma.DateTimeFilter<"invoice"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.customerWhereInput>;
}, "id">;
export type invoiceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.invoiceCountOrderByAggregateInput;
    _avg?: Prisma.invoiceAvgOrderByAggregateInput;
    _max?: Prisma.invoiceMaxOrderByAggregateInput;
    _min?: Prisma.invoiceMinOrderByAggregateInput;
    _sum?: Prisma.invoiceSumOrderByAggregateInput;
};
export type invoiceScalarWhereWithAggregatesInput = {
    AND?: Prisma.invoiceScalarWhereWithAggregatesInput | Prisma.invoiceScalarWhereWithAggregatesInput[];
    OR?: Prisma.invoiceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.invoiceScalarWhereWithAggregatesInput | Prisma.invoiceScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"invoice"> | number;
    customer_id?: Prisma.IntWithAggregatesFilter<"invoice"> | number;
    total?: Prisma.DecimalWithAggregatesFilter<"invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringWithAggregatesFilter<"invoice"> | string;
    created_by?: Prisma.IntWithAggregatesFilter<"invoice"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"invoice"> | Date | string;
};
export type invoiceCreateInput = {
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_at?: Date | string;
    user: Prisma.userCreateNestedOneWithoutInvoiceInput;
    customer: Prisma.customerCreateNestedOneWithoutInvoiceInput;
};
export type invoiceUncheckedCreateInput = {
    id?: number;
    customer_id: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_by: number;
    created_at?: Date | string;
};
export type invoiceUpdateInput = {
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.userUpdateOneRequiredWithoutInvoiceNestedInput;
    customer?: Prisma.customerUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type invoiceUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type invoiceCreateManyInput = {
    id?: number;
    customer_id: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_by: number;
    created_at?: Date | string;
};
export type invoiceUpdateManyMutationInput = {
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type invoiceUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InvoiceListRelationFilter = {
    every?: Prisma.invoiceWhereInput;
    some?: Prisma.invoiceWhereInput;
    none?: Prisma.invoiceWhereInput;
};
export type invoiceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type invoiceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type invoiceAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type invoiceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type invoiceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type invoiceSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customer_id?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
};
export type invoiceCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.invoiceCreateWithoutCustomerInput, Prisma.invoiceUncheckedCreateWithoutCustomerInput> | Prisma.invoiceCreateWithoutCustomerInput[] | Prisma.invoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.invoiceCreateOrConnectWithoutCustomerInput | Prisma.invoiceCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.invoiceCreateManyCustomerInputEnvelope;
    connect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
};
export type invoiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.invoiceCreateWithoutCustomerInput, Prisma.invoiceUncheckedCreateWithoutCustomerInput> | Prisma.invoiceCreateWithoutCustomerInput[] | Prisma.invoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.invoiceCreateOrConnectWithoutCustomerInput | Prisma.invoiceCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.invoiceCreateManyCustomerInputEnvelope;
    connect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
};
export type invoiceUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.invoiceCreateWithoutCustomerInput, Prisma.invoiceUncheckedCreateWithoutCustomerInput> | Prisma.invoiceCreateWithoutCustomerInput[] | Prisma.invoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.invoiceCreateOrConnectWithoutCustomerInput | Prisma.invoiceCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.invoiceUpsertWithWhereUniqueWithoutCustomerInput | Prisma.invoiceUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.invoiceCreateManyCustomerInputEnvelope;
    set?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    disconnect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    delete?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    connect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    update?: Prisma.invoiceUpdateWithWhereUniqueWithoutCustomerInput | Prisma.invoiceUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.invoiceUpdateManyWithWhereWithoutCustomerInput | Prisma.invoiceUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.invoiceScalarWhereInput | Prisma.invoiceScalarWhereInput[];
};
export type invoiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.invoiceCreateWithoutCustomerInput, Prisma.invoiceUncheckedCreateWithoutCustomerInput> | Prisma.invoiceCreateWithoutCustomerInput[] | Prisma.invoiceUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.invoiceCreateOrConnectWithoutCustomerInput | Prisma.invoiceCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.invoiceUpsertWithWhereUniqueWithoutCustomerInput | Prisma.invoiceUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.invoiceCreateManyCustomerInputEnvelope;
    set?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    disconnect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    delete?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    connect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    update?: Prisma.invoiceUpdateWithWhereUniqueWithoutCustomerInput | Prisma.invoiceUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.invoiceUpdateManyWithWhereWithoutCustomerInput | Prisma.invoiceUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.invoiceScalarWhereInput | Prisma.invoiceScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type invoiceCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.invoiceCreateWithoutUserInput, Prisma.invoiceUncheckedCreateWithoutUserInput> | Prisma.invoiceCreateWithoutUserInput[] | Prisma.invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.invoiceCreateOrConnectWithoutUserInput | Prisma.invoiceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.invoiceCreateManyUserInputEnvelope;
    connect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
};
export type invoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.invoiceCreateWithoutUserInput, Prisma.invoiceUncheckedCreateWithoutUserInput> | Prisma.invoiceCreateWithoutUserInput[] | Prisma.invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.invoiceCreateOrConnectWithoutUserInput | Prisma.invoiceCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.invoiceCreateManyUserInputEnvelope;
    connect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
};
export type invoiceUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.invoiceCreateWithoutUserInput, Prisma.invoiceUncheckedCreateWithoutUserInput> | Prisma.invoiceCreateWithoutUserInput[] | Prisma.invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.invoiceCreateOrConnectWithoutUserInput | Prisma.invoiceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.invoiceUpsertWithWhereUniqueWithoutUserInput | Prisma.invoiceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.invoiceCreateManyUserInputEnvelope;
    set?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    disconnect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    delete?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    connect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    update?: Prisma.invoiceUpdateWithWhereUniqueWithoutUserInput | Prisma.invoiceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.invoiceUpdateManyWithWhereWithoutUserInput | Prisma.invoiceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.invoiceScalarWhereInput | Prisma.invoiceScalarWhereInput[];
};
export type invoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.invoiceCreateWithoutUserInput, Prisma.invoiceUncheckedCreateWithoutUserInput> | Prisma.invoiceCreateWithoutUserInput[] | Prisma.invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.invoiceCreateOrConnectWithoutUserInput | Prisma.invoiceCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.invoiceUpsertWithWhereUniqueWithoutUserInput | Prisma.invoiceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.invoiceCreateManyUserInputEnvelope;
    set?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    disconnect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    delete?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    connect?: Prisma.invoiceWhereUniqueInput | Prisma.invoiceWhereUniqueInput[];
    update?: Prisma.invoiceUpdateWithWhereUniqueWithoutUserInput | Prisma.invoiceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.invoiceUpdateManyWithWhereWithoutUserInput | Prisma.invoiceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.invoiceScalarWhereInput | Prisma.invoiceScalarWhereInput[];
};
export type invoiceCreateWithoutCustomerInput = {
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_at?: Date | string;
    user: Prisma.userCreateNestedOneWithoutInvoiceInput;
};
export type invoiceUncheckedCreateWithoutCustomerInput = {
    id?: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_by: number;
    created_at?: Date | string;
};
export type invoiceCreateOrConnectWithoutCustomerInput = {
    where: Prisma.invoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.invoiceCreateWithoutCustomerInput, Prisma.invoiceUncheckedCreateWithoutCustomerInput>;
};
export type invoiceCreateManyCustomerInputEnvelope = {
    data: Prisma.invoiceCreateManyCustomerInput | Prisma.invoiceCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type invoiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.invoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.invoiceUpdateWithoutCustomerInput, Prisma.invoiceUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.invoiceCreateWithoutCustomerInput, Prisma.invoiceUncheckedCreateWithoutCustomerInput>;
};
export type invoiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.invoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.invoiceUpdateWithoutCustomerInput, Prisma.invoiceUncheckedUpdateWithoutCustomerInput>;
};
export type invoiceUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.invoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.invoiceUpdateManyMutationInput, Prisma.invoiceUncheckedUpdateManyWithoutCustomerInput>;
};
export type invoiceScalarWhereInput = {
    AND?: Prisma.invoiceScalarWhereInput | Prisma.invoiceScalarWhereInput[];
    OR?: Prisma.invoiceScalarWhereInput[];
    NOT?: Prisma.invoiceScalarWhereInput | Prisma.invoiceScalarWhereInput[];
    id?: Prisma.IntFilter<"invoice"> | number;
    customer_id?: Prisma.IntFilter<"invoice"> | number;
    total?: Prisma.DecimalFilter<"invoice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFilter<"invoice"> | string;
    created_by?: Prisma.IntFilter<"invoice"> | number;
    created_at?: Prisma.DateTimeFilter<"invoice"> | Date | string;
};
export type invoiceCreateWithoutUserInput = {
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_at?: Date | string;
    customer: Prisma.customerCreateNestedOneWithoutInvoiceInput;
};
export type invoiceUncheckedCreateWithoutUserInput = {
    id?: number;
    customer_id: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_at?: Date | string;
};
export type invoiceCreateOrConnectWithoutUserInput = {
    where: Prisma.invoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.invoiceCreateWithoutUserInput, Prisma.invoiceUncheckedCreateWithoutUserInput>;
};
export type invoiceCreateManyUserInputEnvelope = {
    data: Prisma.invoiceCreateManyUserInput | Prisma.invoiceCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type invoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.invoiceWhereUniqueInput;
    update: Prisma.XOR<Prisma.invoiceUpdateWithoutUserInput, Prisma.invoiceUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.invoiceCreateWithoutUserInput, Prisma.invoiceUncheckedCreateWithoutUserInput>;
};
export type invoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.invoiceWhereUniqueInput;
    data: Prisma.XOR<Prisma.invoiceUpdateWithoutUserInput, Prisma.invoiceUncheckedUpdateWithoutUserInput>;
};
export type invoiceUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.invoiceScalarWhereInput;
    data: Prisma.XOR<Prisma.invoiceUpdateManyMutationInput, Prisma.invoiceUncheckedUpdateManyWithoutUserInput>;
};
export type invoiceCreateManyCustomerInput = {
    id?: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_by: number;
    created_at?: Date | string;
};
export type invoiceUpdateWithoutCustomerInput = {
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.userUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type invoiceUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type invoiceUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_by?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type invoiceCreateManyUserInput = {
    id?: number;
    customer_id: number;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: string;
    created_at?: Date | string;
};
export type invoiceUpdateWithoutUserInput = {
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: Prisma.customerUpdateOneRequiredWithoutInvoiceNestedInput;
};
export type invoiceUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type invoiceUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    customer_id?: Prisma.IntFieldUpdateOperationsInput | number;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type invoiceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    total?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type invoiceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    total?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type invoiceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customer_id?: boolean;
    total?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["invoice"]>;
export type invoiceSelectScalar = {
    id?: boolean;
    customer_id?: boolean;
    total?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
};
export type invoiceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customer_id" | "total" | "status" | "created_by" | "created_at", ExtArgs["result"]["invoice"]>;
export type invoiceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
};
export type invoiceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
};
export type invoiceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    customer?: boolean | Prisma.customerDefaultArgs<ExtArgs>;
};
export type $invoicePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "invoice";
    objects: {
        user: Prisma.$userPayload<ExtArgs>;
        customer: Prisma.$customerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        customer_id: number;
        total: runtime.Decimal;
        status: string;
        created_by: number;
        created_at: Date;
    }, ExtArgs["result"]["invoice"]>;
    composites: {};
};
export type invoiceGetPayload<S extends boolean | null | undefined | invoiceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$invoicePayload, S>;
export type invoiceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<invoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvoiceCountAggregateInputType | true;
};
export interface invoiceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['invoice'];
        meta: {
            name: 'invoice';
        };
    };
    findUnique<T extends invoiceFindUniqueArgs>(args: Prisma.SelectSubset<T, invoiceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__invoiceClient<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends invoiceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, invoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__invoiceClient<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends invoiceFindFirstArgs>(args?: Prisma.SelectSubset<T, invoiceFindFirstArgs<ExtArgs>>): Prisma.Prisma__invoiceClient<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends invoiceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, invoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__invoiceClient<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends invoiceFindManyArgs>(args?: Prisma.SelectSubset<T, invoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends invoiceCreateArgs>(args: Prisma.SelectSubset<T, invoiceCreateArgs<ExtArgs>>): Prisma.Prisma__invoiceClient<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends invoiceCreateManyArgs>(args?: Prisma.SelectSubset<T, invoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends invoiceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, invoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends invoiceDeleteArgs>(args: Prisma.SelectSubset<T, invoiceDeleteArgs<ExtArgs>>): Prisma.Prisma__invoiceClient<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends invoiceUpdateArgs>(args: Prisma.SelectSubset<T, invoiceUpdateArgs<ExtArgs>>): Prisma.Prisma__invoiceClient<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends invoiceDeleteManyArgs>(args?: Prisma.SelectSubset<T, invoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends invoiceUpdateManyArgs>(args: Prisma.SelectSubset<T, invoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends invoiceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, invoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends invoiceUpsertArgs>(args: Prisma.SelectSubset<T, invoiceUpsertArgs<ExtArgs>>): Prisma.Prisma__invoiceClient<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends invoiceCountArgs>(args?: Prisma.Subset<T, invoiceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvoiceCountAggregateOutputType> : number>;
    aggregate<T extends InvoiceAggregateArgs>(args: Prisma.Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;
    groupBy<T extends invoiceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: invoiceGroupByArgs['orderBy'];
    } : {
        orderBy?: invoiceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, invoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: invoiceFieldRefs;
}
export interface Prisma__invoiceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.customerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customerDefaultArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface invoiceFieldRefs {
    readonly id: Prisma.FieldRef<"invoice", 'Int'>;
    readonly customer_id: Prisma.FieldRef<"invoice", 'Int'>;
    readonly total: Prisma.FieldRef<"invoice", 'Decimal'>;
    readonly status: Prisma.FieldRef<"invoice", 'String'>;
    readonly created_by: Prisma.FieldRef<"invoice", 'Int'>;
    readonly created_at: Prisma.FieldRef<"invoice", 'DateTime'>;
}
export type invoiceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    where: Prisma.invoiceWhereUniqueInput;
};
export type invoiceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    where: Prisma.invoiceWhereUniqueInput;
};
export type invoiceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    where?: Prisma.invoiceWhereInput;
    orderBy?: Prisma.invoiceOrderByWithRelationInput | Prisma.invoiceOrderByWithRelationInput[];
    cursor?: Prisma.invoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type invoiceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    where?: Prisma.invoiceWhereInput;
    orderBy?: Prisma.invoiceOrderByWithRelationInput | Prisma.invoiceOrderByWithRelationInput[];
    cursor?: Prisma.invoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type invoiceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    where?: Prisma.invoiceWhereInput;
    orderBy?: Prisma.invoiceOrderByWithRelationInput | Prisma.invoiceOrderByWithRelationInput[];
    cursor?: Prisma.invoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoiceScalarFieldEnum | Prisma.InvoiceScalarFieldEnum[];
};
export type invoiceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.invoiceCreateInput, Prisma.invoiceUncheckedCreateInput>;
};
export type invoiceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.invoiceCreateManyInput | Prisma.invoiceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type invoiceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    data: Prisma.invoiceCreateManyInput | Prisma.invoiceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.invoiceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type invoiceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.invoiceUpdateInput, Prisma.invoiceUncheckedUpdateInput>;
    where: Prisma.invoiceWhereUniqueInput;
};
export type invoiceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.invoiceUpdateManyMutationInput, Prisma.invoiceUncheckedUpdateManyInput>;
    where?: Prisma.invoiceWhereInput;
    limit?: number;
};
export type invoiceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.invoiceUpdateManyMutationInput, Prisma.invoiceUncheckedUpdateManyInput>;
    where?: Prisma.invoiceWhereInput;
    limit?: number;
    include?: Prisma.invoiceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type invoiceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    where: Prisma.invoiceWhereUniqueInput;
    create: Prisma.XOR<Prisma.invoiceCreateInput, Prisma.invoiceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.invoiceUpdateInput, Prisma.invoiceUncheckedUpdateInput>;
};
export type invoiceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
    where: Prisma.invoiceWhereUniqueInput;
};
export type invoiceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.invoiceWhereInput;
    limit?: number;
};
export type invoiceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoiceSelect<ExtArgs> | null;
    omit?: Prisma.invoiceOmit<ExtArgs> | null;
    include?: Prisma.invoiceInclude<ExtArgs> | null;
};
export {};
