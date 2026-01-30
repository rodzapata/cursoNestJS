import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type customerModel = runtime.Types.Result.DefaultSelection<Prisma.$customerPayload>;
export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type CustomerAvgAggregateOutputType = {
    id: number | null;
    county_id: number | null;
};
export type CustomerSumAggregateOutputType = {
    id: number | null;
    county_id: number | null;
};
export type CustomerMinAggregateOutputType = {
    id: number | null;
    nit: string | null;
    first_name: string | null;
    middle_name: string | null;
    last_name: string | null;
    second_last_name: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    county_id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CustomerMaxAggregateOutputType = {
    id: number | null;
    nit: string | null;
    first_name: string | null;
    middle_name: string | null;
    last_name: string | null;
    second_last_name: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    county_id: number | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type CustomerCountAggregateOutputType = {
    id: number;
    nit: number;
    first_name: number;
    middle_name: number;
    last_name: number;
    second_last_name: number;
    email: number;
    phone: number;
    address: number;
    county_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type CustomerAvgAggregateInputType = {
    id?: true;
    county_id?: true;
};
export type CustomerSumAggregateInputType = {
    id?: true;
    county_id?: true;
};
export type CustomerMinAggregateInputType = {
    id?: true;
    nit?: true;
    first_name?: true;
    middle_name?: true;
    last_name?: true;
    second_last_name?: true;
    email?: true;
    phone?: true;
    address?: true;
    county_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type CustomerMaxAggregateInputType = {
    id?: true;
    nit?: true;
    first_name?: true;
    middle_name?: true;
    last_name?: true;
    second_last_name?: true;
    email?: true;
    phone?: true;
    address?: true;
    county_id?: true;
    created_at?: true;
    updated_at?: true;
};
export type CustomerCountAggregateInputType = {
    id?: true;
    nit?: true;
    first_name?: true;
    middle_name?: true;
    last_name?: true;
    second_last_name?: true;
    email?: true;
    phone?: true;
    address?: true;
    county_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type CustomerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customerWhereInput;
    orderBy?: Prisma.customerOrderByWithRelationInput | Prisma.customerOrderByWithRelationInput[];
    cursor?: Prisma.customerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerCountAggregateInputType;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer[P]> : Prisma.GetScalarType<T[P], AggregateCustomer[P]>;
};
export type customerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customerWhereInput;
    orderBy?: Prisma.customerOrderByWithAggregationInput | Prisma.customerOrderByWithAggregationInput[];
    by: Prisma.CustomerScalarFieldEnum[] | Prisma.CustomerScalarFieldEnum;
    having?: Prisma.customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _avg?: CustomerAvgAggregateInputType;
    _sum?: CustomerSumAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type CustomerGroupByOutputType = {
    id: number;
    nit: string;
    first_name: string;
    middle_name: string | null;
    last_name: string;
    second_last_name: string | null;
    email: string | null;
    phone: string | null;
    address: string | null;
    county_id: number;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _avg: CustomerAvgAggregateOutputType | null;
    _sum: CustomerSumAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]>;
}>>;
export type customerWhereInput = {
    AND?: Prisma.customerWhereInput | Prisma.customerWhereInput[];
    OR?: Prisma.customerWhereInput[];
    NOT?: Prisma.customerWhereInput | Prisma.customerWhereInput[];
    id?: Prisma.IntFilter<"customer"> | number;
    nit?: Prisma.StringFilter<"customer"> | string;
    first_name?: Prisma.StringFilter<"customer"> | string;
    middle_name?: Prisma.StringNullableFilter<"customer"> | string | null;
    last_name?: Prisma.StringFilter<"customer"> | string;
    second_last_name?: Prisma.StringNullableFilter<"customer"> | string | null;
    email?: Prisma.StringNullableFilter<"customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"customer"> | string | null;
    address?: Prisma.StringNullableFilter<"customer"> | string | null;
    county_id?: Prisma.IntFilter<"customer"> | number;
    created_at?: Prisma.DateTimeFilter<"customer"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"customer"> | Date | string;
    county?: Prisma.XOR<Prisma.CountyScalarRelationFilter, Prisma.countyWhereInput>;
    invoice?: Prisma.InvoiceListRelationFilter;
};
export type customerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    middle_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    second_last_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    county_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    county?: Prisma.countyOrderByWithRelationInput;
    invoice?: Prisma.invoiceOrderByRelationAggregateInput;
};
export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nit?: string;
    email?: string;
    AND?: Prisma.customerWhereInput | Prisma.customerWhereInput[];
    OR?: Prisma.customerWhereInput[];
    NOT?: Prisma.customerWhereInput | Prisma.customerWhereInput[];
    first_name?: Prisma.StringFilter<"customer"> | string;
    middle_name?: Prisma.StringNullableFilter<"customer"> | string | null;
    last_name?: Prisma.StringFilter<"customer"> | string;
    second_last_name?: Prisma.StringNullableFilter<"customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"customer"> | string | null;
    address?: Prisma.StringNullableFilter<"customer"> | string | null;
    county_id?: Prisma.IntFilter<"customer"> | number;
    created_at?: Prisma.DateTimeFilter<"customer"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"customer"> | Date | string;
    county?: Prisma.XOR<Prisma.CountyScalarRelationFilter, Prisma.countyWhereInput>;
    invoice?: Prisma.InvoiceListRelationFilter;
}, "id" | "nit" | "email">;
export type customerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    middle_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    second_last_name?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrderInput | Prisma.SortOrder;
    county_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.customerCountOrderByAggregateInput;
    _avg?: Prisma.customerAvgOrderByAggregateInput;
    _max?: Prisma.customerMaxOrderByAggregateInput;
    _min?: Prisma.customerMinOrderByAggregateInput;
    _sum?: Prisma.customerSumOrderByAggregateInput;
};
export type customerScalarWhereWithAggregatesInput = {
    AND?: Prisma.customerScalarWhereWithAggregatesInput | Prisma.customerScalarWhereWithAggregatesInput[];
    OR?: Prisma.customerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.customerScalarWhereWithAggregatesInput | Prisma.customerScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"customer"> | number;
    nit?: Prisma.StringWithAggregatesFilter<"customer"> | string;
    first_name?: Prisma.StringWithAggregatesFilter<"customer"> | string;
    middle_name?: Prisma.StringNullableWithAggregatesFilter<"customer"> | string | null;
    last_name?: Prisma.StringWithAggregatesFilter<"customer"> | string;
    second_last_name?: Prisma.StringNullableWithAggregatesFilter<"customer"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"customer"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"customer"> | string | null;
    address?: Prisma.StringNullableWithAggregatesFilter<"customer"> | string | null;
    county_id?: Prisma.IntWithAggregatesFilter<"customer"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"customer"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"customer"> | Date | string;
};
export type customerCreateInput = {
    nit: string;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    second_last_name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    county: Prisma.countyCreateNestedOneWithoutCustomerInput;
    invoice?: Prisma.invoiceCreateNestedManyWithoutCustomerInput;
};
export type customerUncheckedCreateInput = {
    id?: number;
    nit: string;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    second_last_name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    county_id: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: Prisma.invoiceUncheckedCreateNestedManyWithoutCustomerInput;
};
export type customerUpdateInput = {
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    county?: Prisma.countyUpdateOneRequiredWithoutCustomerNestedInput;
    invoice?: Prisma.invoiceUpdateManyWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    county_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.invoiceUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type customerCreateManyInput = {
    id?: number;
    nit: string;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    second_last_name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    county_id: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type customerUpdateManyMutationInput = {
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customerUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    county_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerListRelationFilter = {
    every?: Prisma.customerWhereInput;
    some?: Prisma.customerWhereInput;
    none?: Prisma.customerWhereInput;
};
export type customerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type customerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    middle_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    second_last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    county_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type customerAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    county_id?: Prisma.SortOrder;
};
export type customerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    middle_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    second_last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    county_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type customerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nit?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    middle_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    second_last_name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    county_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type customerSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    county_id?: Prisma.SortOrder;
};
export type CustomerScalarRelationFilter = {
    is?: Prisma.customerWhereInput;
    isNot?: Prisma.customerWhereInput;
};
export type customerCreateNestedManyWithoutCountyInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutCountyInput, Prisma.customerUncheckedCreateWithoutCountyInput> | Prisma.customerCreateWithoutCountyInput[] | Prisma.customerUncheckedCreateWithoutCountyInput[];
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutCountyInput | Prisma.customerCreateOrConnectWithoutCountyInput[];
    createMany?: Prisma.customerCreateManyCountyInputEnvelope;
    connect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
};
export type customerUncheckedCreateNestedManyWithoutCountyInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutCountyInput, Prisma.customerUncheckedCreateWithoutCountyInput> | Prisma.customerCreateWithoutCountyInput[] | Prisma.customerUncheckedCreateWithoutCountyInput[];
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutCountyInput | Prisma.customerCreateOrConnectWithoutCountyInput[];
    createMany?: Prisma.customerCreateManyCountyInputEnvelope;
    connect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
};
export type customerUpdateManyWithoutCountyNestedInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutCountyInput, Prisma.customerUncheckedCreateWithoutCountyInput> | Prisma.customerCreateWithoutCountyInput[] | Prisma.customerUncheckedCreateWithoutCountyInput[];
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutCountyInput | Prisma.customerCreateOrConnectWithoutCountyInput[];
    upsert?: Prisma.customerUpsertWithWhereUniqueWithoutCountyInput | Prisma.customerUpsertWithWhereUniqueWithoutCountyInput[];
    createMany?: Prisma.customerCreateManyCountyInputEnvelope;
    set?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    disconnect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    delete?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    connect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    update?: Prisma.customerUpdateWithWhereUniqueWithoutCountyInput | Prisma.customerUpdateWithWhereUniqueWithoutCountyInput[];
    updateMany?: Prisma.customerUpdateManyWithWhereWithoutCountyInput | Prisma.customerUpdateManyWithWhereWithoutCountyInput[];
    deleteMany?: Prisma.customerScalarWhereInput | Prisma.customerScalarWhereInput[];
};
export type customerUncheckedUpdateManyWithoutCountyNestedInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutCountyInput, Prisma.customerUncheckedCreateWithoutCountyInput> | Prisma.customerCreateWithoutCountyInput[] | Prisma.customerUncheckedCreateWithoutCountyInput[];
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutCountyInput | Prisma.customerCreateOrConnectWithoutCountyInput[];
    upsert?: Prisma.customerUpsertWithWhereUniqueWithoutCountyInput | Prisma.customerUpsertWithWhereUniqueWithoutCountyInput[];
    createMany?: Prisma.customerCreateManyCountyInputEnvelope;
    set?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    disconnect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    delete?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    connect?: Prisma.customerWhereUniqueInput | Prisma.customerWhereUniqueInput[];
    update?: Prisma.customerUpdateWithWhereUniqueWithoutCountyInput | Prisma.customerUpdateWithWhereUniqueWithoutCountyInput[];
    updateMany?: Prisma.customerUpdateManyWithWhereWithoutCountyInput | Prisma.customerUpdateManyWithWhereWithoutCountyInput[];
    deleteMany?: Prisma.customerScalarWhereInput | Prisma.customerScalarWhereInput[];
};
export type customerCreateNestedOneWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutInvoiceInput, Prisma.customerUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutInvoiceInput;
    connect?: Prisma.customerWhereUniqueInput;
};
export type customerUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.customerCreateWithoutInvoiceInput, Prisma.customerUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.customerCreateOrConnectWithoutInvoiceInput;
    upsert?: Prisma.customerUpsertWithoutInvoiceInput;
    connect?: Prisma.customerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.customerUpdateToOneWithWhereWithoutInvoiceInput, Prisma.customerUpdateWithoutInvoiceInput>, Prisma.customerUncheckedUpdateWithoutInvoiceInput>;
};
export type customerCreateWithoutCountyInput = {
    nit: string;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    second_last_name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: Prisma.invoiceCreateNestedManyWithoutCustomerInput;
};
export type customerUncheckedCreateWithoutCountyInput = {
    id?: number;
    nit: string;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    second_last_name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoice?: Prisma.invoiceUncheckedCreateNestedManyWithoutCustomerInput;
};
export type customerCreateOrConnectWithoutCountyInput = {
    where: Prisma.customerWhereUniqueInput;
    create: Prisma.XOR<Prisma.customerCreateWithoutCountyInput, Prisma.customerUncheckedCreateWithoutCountyInput>;
};
export type customerCreateManyCountyInputEnvelope = {
    data: Prisma.customerCreateManyCountyInput | Prisma.customerCreateManyCountyInput[];
    skipDuplicates?: boolean;
};
export type customerUpsertWithWhereUniqueWithoutCountyInput = {
    where: Prisma.customerWhereUniqueInput;
    update: Prisma.XOR<Prisma.customerUpdateWithoutCountyInput, Prisma.customerUncheckedUpdateWithoutCountyInput>;
    create: Prisma.XOR<Prisma.customerCreateWithoutCountyInput, Prisma.customerUncheckedCreateWithoutCountyInput>;
};
export type customerUpdateWithWhereUniqueWithoutCountyInput = {
    where: Prisma.customerWhereUniqueInput;
    data: Prisma.XOR<Prisma.customerUpdateWithoutCountyInput, Prisma.customerUncheckedUpdateWithoutCountyInput>;
};
export type customerUpdateManyWithWhereWithoutCountyInput = {
    where: Prisma.customerScalarWhereInput;
    data: Prisma.XOR<Prisma.customerUpdateManyMutationInput, Prisma.customerUncheckedUpdateManyWithoutCountyInput>;
};
export type customerScalarWhereInput = {
    AND?: Prisma.customerScalarWhereInput | Prisma.customerScalarWhereInput[];
    OR?: Prisma.customerScalarWhereInput[];
    NOT?: Prisma.customerScalarWhereInput | Prisma.customerScalarWhereInput[];
    id?: Prisma.IntFilter<"customer"> | number;
    nit?: Prisma.StringFilter<"customer"> | string;
    first_name?: Prisma.StringFilter<"customer"> | string;
    middle_name?: Prisma.StringNullableFilter<"customer"> | string | null;
    last_name?: Prisma.StringFilter<"customer"> | string;
    second_last_name?: Prisma.StringNullableFilter<"customer"> | string | null;
    email?: Prisma.StringNullableFilter<"customer"> | string | null;
    phone?: Prisma.StringNullableFilter<"customer"> | string | null;
    address?: Prisma.StringNullableFilter<"customer"> | string | null;
    county_id?: Prisma.IntFilter<"customer"> | number;
    created_at?: Prisma.DateTimeFilter<"customer"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"customer"> | Date | string;
};
export type customerCreateWithoutInvoiceInput = {
    nit: string;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    second_last_name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    county: Prisma.countyCreateNestedOneWithoutCustomerInput;
};
export type customerUncheckedCreateWithoutInvoiceInput = {
    id?: number;
    nit: string;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    second_last_name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    county_id: number;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type customerCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.customerWhereUniqueInput;
    create: Prisma.XOR<Prisma.customerCreateWithoutInvoiceInput, Prisma.customerUncheckedCreateWithoutInvoiceInput>;
};
export type customerUpsertWithoutInvoiceInput = {
    update: Prisma.XOR<Prisma.customerUpdateWithoutInvoiceInput, Prisma.customerUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.customerCreateWithoutInvoiceInput, Prisma.customerUncheckedCreateWithoutInvoiceInput>;
    where?: Prisma.customerWhereInput;
};
export type customerUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: Prisma.customerWhereInput;
    data: Prisma.XOR<Prisma.customerUpdateWithoutInvoiceInput, Prisma.customerUncheckedUpdateWithoutInvoiceInput>;
};
export type customerUpdateWithoutInvoiceInput = {
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    county?: Prisma.countyUpdateOneRequiredWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    county_id?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type customerCreateManyCountyInput = {
    id?: number;
    nit: string;
    first_name: string;
    middle_name?: string | null;
    last_name: string;
    second_last_name?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type customerUpdateWithoutCountyInput = {
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.invoiceUpdateManyWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateWithoutCountyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.invoiceUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type customerUncheckedUpdateManyWithoutCountyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nit?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    middle_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    second_last_name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerCountOutputType = {
    invoice: number;
};
export type CustomerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoice?: boolean | CustomerCountOutputTypeCountInvoiceArgs;
};
export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomerCountOutputTypeCountInvoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.invoiceWhereInput;
};
export type customerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nit?: boolean;
    first_name?: boolean;
    middle_name?: boolean;
    last_name?: boolean;
    second_last_name?: boolean;
    email?: boolean;
    phone?: boolean;
    address?: boolean;
    county_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    county?: boolean | Prisma.countyDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.customer$invoiceArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type customerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nit?: boolean;
    first_name?: boolean;
    middle_name?: boolean;
    last_name?: boolean;
    second_last_name?: boolean;
    email?: boolean;
    phone?: boolean;
    address?: boolean;
    county_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    county?: boolean | Prisma.countyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type customerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nit?: boolean;
    first_name?: boolean;
    middle_name?: boolean;
    last_name?: boolean;
    second_last_name?: boolean;
    email?: boolean;
    phone?: boolean;
    address?: boolean;
    county_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    county?: boolean | Prisma.countyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type customerSelectScalar = {
    id?: boolean;
    nit?: boolean;
    first_name?: boolean;
    middle_name?: boolean;
    last_name?: boolean;
    second_last_name?: boolean;
    email?: boolean;
    phone?: boolean;
    address?: boolean;
    county_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type customerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nit" | "first_name" | "middle_name" | "last_name" | "second_last_name" | "email" | "phone" | "address" | "county_id" | "created_at" | "updated_at", ExtArgs["result"]["customer"]>;
export type customerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    county?: boolean | Prisma.countyDefaultArgs<ExtArgs>;
    invoice?: boolean | Prisma.customer$invoiceArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type customerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    county?: boolean | Prisma.countyDefaultArgs<ExtArgs>;
};
export type customerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    county?: boolean | Prisma.countyDefaultArgs<ExtArgs>;
};
export type $customerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "customer";
    objects: {
        county: Prisma.$countyPayload<ExtArgs>;
        invoice: Prisma.$invoicePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nit: string;
        first_name: string;
        middle_name: string | null;
        last_name: string;
        second_last_name: string | null;
        email: string | null;
        phone: string | null;
        address: string | null;
        county_id: number;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["customer"]>;
    composites: {};
};
export type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$customerPayload, S>;
export type customerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
};
export interface customerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['customer'];
        meta: {
            name: 'customer';
        };
    };
    findUnique<T extends customerFindUniqueArgs>(args: Prisma.SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends customerFindFirstArgs>(args?: Prisma.SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends customerFindManyArgs>(args?: Prisma.SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends customerCreateArgs>(args: Prisma.SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends customerCreateManyArgs>(args?: Prisma.SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends customerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, customerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends customerDeleteArgs>(args: Prisma.SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends customerUpdateArgs>(args: Prisma.SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends customerDeleteManyArgs>(args?: Prisma.SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends customerUpdateManyArgs>(args: Prisma.SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends customerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, customerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends customerUpsertArgs>(args: Prisma.SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma.Prisma__customerClient<runtime.Types.Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends customerCountArgs>(args?: Prisma.Subset<T, customerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAggregateArgs>(args: Prisma.Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;
    groupBy<T extends customerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: customerGroupByArgs['orderBy'];
    } : {
        orderBy?: customerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: customerFieldRefs;
}
export interface Prisma__customerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    county<T extends Prisma.countyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.countyDefaultArgs<ExtArgs>>): Prisma.Prisma__countyClient<runtime.Types.Result.GetResult<Prisma.$countyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    invoice<T extends Prisma.customer$invoiceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.customer$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface customerFieldRefs {
    readonly id: Prisma.FieldRef<"customer", 'Int'>;
    readonly nit: Prisma.FieldRef<"customer", 'String'>;
    readonly first_name: Prisma.FieldRef<"customer", 'String'>;
    readonly middle_name: Prisma.FieldRef<"customer", 'String'>;
    readonly last_name: Prisma.FieldRef<"customer", 'String'>;
    readonly second_last_name: Prisma.FieldRef<"customer", 'String'>;
    readonly email: Prisma.FieldRef<"customer", 'String'>;
    readonly phone: Prisma.FieldRef<"customer", 'String'>;
    readonly address: Prisma.FieldRef<"customer", 'String'>;
    readonly county_id: Prisma.FieldRef<"customer", 'Int'>;
    readonly created_at: Prisma.FieldRef<"customer", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"customer", 'DateTime'>;
}
export type customerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where: Prisma.customerWhereUniqueInput;
};
export type customerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where: Prisma.customerWhereUniqueInput;
};
export type customerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customerCreateInput, Prisma.customerUncheckedCreateInput>;
};
export type customerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.customerCreateManyInput | Prisma.customerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type customerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    data: Prisma.customerCreateManyInput | Prisma.customerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.customerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type customerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customerUpdateInput, Prisma.customerUncheckedUpdateInput>;
    where: Prisma.customerWhereUniqueInput;
};
export type customerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.customerUpdateManyMutationInput, Prisma.customerUncheckedUpdateManyInput>;
    where?: Prisma.customerWhereInput;
    limit?: number;
};
export type customerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.customerUpdateManyMutationInput, Prisma.customerUncheckedUpdateManyInput>;
    where?: Prisma.customerWhereInput;
    limit?: number;
    include?: Prisma.customerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type customerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where: Prisma.customerWhereUniqueInput;
    create: Prisma.XOR<Prisma.customerCreateInput, Prisma.customerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.customerUpdateInput, Prisma.customerUncheckedUpdateInput>;
};
export type customerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
    where: Prisma.customerWhereUniqueInput;
};
export type customerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.customerWhereInput;
    limit?: number;
};
export type customer$invoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type customerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.customerSelect<ExtArgs> | null;
    omit?: Prisma.customerOmit<ExtArgs> | null;
    include?: Prisma.customerInclude<ExtArgs> | null;
};
export {};
