import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type userModel = runtime.Types.Result.DefaultSelection<Prisma.$userPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    username: string | null;
    email: string | null;
    password_hash: string | null;
    full_name: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    username: string | null;
    email: string | null;
    password_hash: string | null;
    full_name: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    email: number;
    password_hash: number;
    full_name: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    is_active?: true;
    created_at?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    is_active?: true;
    created_at?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    email?: true;
    password_hash?: true;
    full_name?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    cursor?: Prisma.userWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type userGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithAggregationInput | Prisma.userOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active: boolean;
    created_at: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type userWhereInput = {
    AND?: Prisma.userWhereInput | Prisma.userWhereInput[];
    OR?: Prisma.userWhereInput[];
    NOT?: Prisma.userWhereInput | Prisma.userWhereInput[];
    id?: Prisma.IntFilter<"user"> | number;
    username?: Prisma.StringFilter<"user"> | string;
    email?: Prisma.StringFilter<"user"> | string;
    password_hash?: Prisma.StringFilter<"user"> | string;
    full_name?: Prisma.StringFilter<"user"> | string;
    is_active?: Prisma.BoolFilter<"user"> | boolean;
    created_at?: Prisma.DateTimeFilter<"user"> | Date | string;
    audit_log?: Prisma.Audit_logListRelationFilter;
    invoice?: Prisma.InvoiceListRelationFilter;
    user_role?: Prisma.User_roleListRelationFilter;
};
export type userOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    audit_log?: Prisma.audit_logOrderByRelationAggregateInput;
    invoice?: Prisma.invoiceOrderByRelationAggregateInput;
    user_role?: Prisma.user_roleOrderByRelationAggregateInput;
};
export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    username?: string;
    email?: string;
    AND?: Prisma.userWhereInput | Prisma.userWhereInput[];
    OR?: Prisma.userWhereInput[];
    NOT?: Prisma.userWhereInput | Prisma.userWhereInput[];
    password_hash?: Prisma.StringFilter<"user"> | string;
    full_name?: Prisma.StringFilter<"user"> | string;
    is_active?: Prisma.BoolFilter<"user"> | boolean;
    created_at?: Prisma.DateTimeFilter<"user"> | Date | string;
    audit_log?: Prisma.Audit_logListRelationFilter;
    invoice?: Prisma.InvoiceListRelationFilter;
    user_role?: Prisma.User_roleListRelationFilter;
}, "id" | "username" | "email">;
export type userOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.userCountOrderByAggregateInput;
    _avg?: Prisma.userAvgOrderByAggregateInput;
    _max?: Prisma.userMaxOrderByAggregateInput;
    _min?: Prisma.userMinOrderByAggregateInput;
    _sum?: Prisma.userSumOrderByAggregateInput;
};
export type userScalarWhereWithAggregatesInput = {
    AND?: Prisma.userScalarWhereWithAggregatesInput | Prisma.userScalarWhereWithAggregatesInput[];
    OR?: Prisma.userScalarWhereWithAggregatesInput[];
    NOT?: Prisma.userScalarWhereWithAggregatesInput | Prisma.userScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"user"> | number;
    username?: Prisma.StringWithAggregatesFilter<"user"> | string;
    email?: Prisma.StringWithAggregatesFilter<"user"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"user"> | string;
    full_name?: Prisma.StringWithAggregatesFilter<"user"> | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"user"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"user"> | Date | string;
};
export type userCreateInput = {
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
    audit_log?: Prisma.audit_logCreateNestedManyWithoutUserInput;
    invoice?: Prisma.invoiceCreateNestedManyWithoutUserInput;
    user_role?: Prisma.user_roleCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateInput = {
    id?: number;
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
    audit_log?: Prisma.audit_logUncheckedCreateNestedManyWithoutUserInput;
    invoice?: Prisma.invoiceUncheckedCreateNestedManyWithoutUserInput;
    user_role?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
};
export type userUpdateInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.audit_logUpdateManyWithoutUserNestedInput;
    invoice?: Prisma.invoiceUpdateManyWithoutUserNestedInput;
    user_role?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.audit_logUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: Prisma.invoiceUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
};
export type userCreateManyInput = {
    id?: number;
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type userUpdateManyMutationInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type userUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserNullableScalarRelationFilter = {
    is?: Prisma.userWhereInput | null;
    isNot?: Prisma.userWhereInput | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.userWhereInput;
    isNot?: Prisma.userWhereInput;
};
export type userCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type userAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type userMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type userMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    full_name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type userSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type userCreateNestedOneWithoutAudit_logInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutAudit_logInput, Prisma.userUncheckedCreateWithoutAudit_logInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutAudit_logInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneWithoutAudit_logNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutAudit_logInput, Prisma.userUncheckedCreateWithoutAudit_logInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutAudit_logInput;
    upsert?: Prisma.userUpsertWithoutAudit_logInput;
    disconnect?: Prisma.userWhereInput | boolean;
    delete?: Prisma.userWhereInput | boolean;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutAudit_logInput, Prisma.userUpdateWithoutAudit_logInput>, Prisma.userUncheckedUpdateWithoutAudit_logInput>;
};
export type userCreateNestedOneWithoutInvoiceInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutInvoiceInput, Prisma.userUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutInvoiceInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutInvoiceInput, Prisma.userUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutInvoiceInput;
    upsert?: Prisma.userUpsertWithoutInvoiceInput;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutInvoiceInput, Prisma.userUpdateWithoutInvoiceInput>, Prisma.userUncheckedUpdateWithoutInvoiceInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type userCreateNestedOneWithoutUser_roleInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutUser_roleInput, Prisma.userUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutUser_roleInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneRequiredWithoutUser_roleNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutUser_roleInput, Prisma.userUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutUser_roleInput;
    upsert?: Prisma.userUpsertWithoutUser_roleInput;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutUser_roleInput, Prisma.userUpdateWithoutUser_roleInput>, Prisma.userUncheckedUpdateWithoutUser_roleInput>;
};
export type userCreateWithoutAudit_logInput = {
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
    invoice?: Prisma.invoiceCreateNestedManyWithoutUserInput;
    user_role?: Prisma.user_roleCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateWithoutAudit_logInput = {
    id?: number;
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
    invoice?: Prisma.invoiceUncheckedCreateNestedManyWithoutUserInput;
    user_role?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
};
export type userCreateOrConnectWithoutAudit_logInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutAudit_logInput, Prisma.userUncheckedCreateWithoutAudit_logInput>;
};
export type userUpsertWithoutAudit_logInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutAudit_logInput, Prisma.userUncheckedUpdateWithoutAudit_logInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutAudit_logInput, Prisma.userUncheckedCreateWithoutAudit_logInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutAudit_logInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutAudit_logInput, Prisma.userUncheckedUpdateWithoutAudit_logInput>;
};
export type userUpdateWithoutAudit_logInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.invoiceUpdateManyWithoutUserNestedInput;
    user_role?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateWithoutAudit_logInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoice?: Prisma.invoiceUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
};
export type userCreateWithoutInvoiceInput = {
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
    audit_log?: Prisma.audit_logCreateNestedManyWithoutUserInput;
    user_role?: Prisma.user_roleCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateWithoutInvoiceInput = {
    id?: number;
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
    audit_log?: Prisma.audit_logUncheckedCreateNestedManyWithoutUserInput;
    user_role?: Prisma.user_roleUncheckedCreateNestedManyWithoutUserInput;
};
export type userCreateOrConnectWithoutInvoiceInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutInvoiceInput, Prisma.userUncheckedCreateWithoutInvoiceInput>;
};
export type userUpsertWithoutInvoiceInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutInvoiceInput, Prisma.userUncheckedUpdateWithoutInvoiceInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutInvoiceInput, Prisma.userUncheckedCreateWithoutInvoiceInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutInvoiceInput, Prisma.userUncheckedUpdateWithoutInvoiceInput>;
};
export type userUpdateWithoutInvoiceInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.audit_logUpdateManyWithoutUserNestedInput;
    user_role?: Prisma.user_roleUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateWithoutInvoiceInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.audit_logUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: Prisma.user_roleUncheckedUpdateManyWithoutUserNestedInput;
};
export type userCreateWithoutUser_roleInput = {
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
    audit_log?: Prisma.audit_logCreateNestedManyWithoutUserInput;
    invoice?: Prisma.invoiceCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateWithoutUser_roleInput = {
    id?: number;
    username: string;
    email: string;
    password_hash: string;
    full_name: string;
    is_active?: boolean;
    created_at?: Date | string;
    audit_log?: Prisma.audit_logUncheckedCreateNestedManyWithoutUserInput;
    invoice?: Prisma.invoiceUncheckedCreateNestedManyWithoutUserInput;
};
export type userCreateOrConnectWithoutUser_roleInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutUser_roleInput, Prisma.userUncheckedCreateWithoutUser_roleInput>;
};
export type userUpsertWithoutUser_roleInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutUser_roleInput, Prisma.userUncheckedUpdateWithoutUser_roleInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutUser_roleInput, Prisma.userUncheckedCreateWithoutUser_roleInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutUser_roleInput, Prisma.userUncheckedUpdateWithoutUser_roleInput>;
};
export type userUpdateWithoutUser_roleInput = {
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.audit_logUpdateManyWithoutUserNestedInput;
    invoice?: Prisma.invoiceUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateWithoutUser_roleInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_log?: Prisma.audit_logUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: Prisma.invoiceUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    audit_log: number;
    invoice: number;
    user_role: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    audit_log?: boolean | UserCountOutputTypeCountAudit_logArgs;
    invoice?: boolean | UserCountOutputTypeCountInvoiceArgs;
    user_role?: boolean | UserCountOutputTypeCountUser_roleArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountAudit_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logWhereInput;
};
export type UserCountOutputTypeCountInvoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.invoiceWhereInput;
};
export type UserCountOutputTypeCountUser_roleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_roleWhereInput;
};
export type userSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    audit_log?: boolean | Prisma.user$audit_logArgs<ExtArgs>;
    invoice?: boolean | Prisma.user$invoiceArgs<ExtArgs>;
    user_role?: boolean | Prisma.user$user_roleArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type userSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type userSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type userSelectScalar = {
    id?: boolean;
    username?: boolean;
    email?: boolean;
    password_hash?: boolean;
    full_name?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type userOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "email" | "password_hash" | "full_name" | "is_active" | "created_at", ExtArgs["result"]["user"]>;
export type userInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    audit_log?: boolean | Prisma.user$audit_logArgs<ExtArgs>;
    invoice?: boolean | Prisma.user$invoiceArgs<ExtArgs>;
    user_role?: boolean | Prisma.user$user_roleArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type userIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type userIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $userPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user";
    objects: {
        audit_log: Prisma.$audit_logPayload<ExtArgs>[];
        invoice: Prisma.$invoicePayload<ExtArgs>[];
        user_role: Prisma.$user_rolePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        username: string;
        email: string;
        password_hash: string;
        full_name: string;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$userPayload, S>;
export type userCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface userDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user'];
        meta: {
            name: 'user';
        };
    };
    findUnique<T extends userFindUniqueArgs>(args: Prisma.SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends userFindFirstArgs>(args?: Prisma.SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends userFindManyArgs>(args?: Prisma.SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends userCreateArgs>(args: Prisma.SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends userCreateManyArgs>(args?: Prisma.SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends userDeleteArgs>(args: Prisma.SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends userUpdateArgs>(args: Prisma.SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends userDeleteManyArgs>(args?: Prisma.SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends userUpdateManyArgs>(args: Prisma.SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends userUpsertArgs>(args: Prisma.SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends userCountArgs>(args?: Prisma.Subset<T, userCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends userGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: userGroupByArgs['orderBy'];
    } : {
        orderBy?: userGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: userFieldRefs;
}
export interface Prisma__userClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    audit_log<T extends Prisma.user$audit_logArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$audit_logArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    invoice<T extends Prisma.user$invoiceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$invoiceArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    user_role<T extends Prisma.user$user_roleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$user_roleArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface userFieldRefs {
    readonly id: Prisma.FieldRef<"user", 'Int'>;
    readonly username: Prisma.FieldRef<"user", 'String'>;
    readonly email: Prisma.FieldRef<"user", 'String'>;
    readonly password_hash: Prisma.FieldRef<"user", 'String'>;
    readonly full_name: Prisma.FieldRef<"user", 'String'>;
    readonly is_active: Prisma.FieldRef<"user", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"user", 'DateTime'>;
}
export type userFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where: Prisma.userWhereUniqueInput;
};
export type userFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where: Prisma.userWhereUniqueInput;
};
export type userFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    cursor?: Prisma.userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type userFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    cursor?: Prisma.userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type userFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    cursor?: Prisma.userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type userCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.userCreateInput, Prisma.userUncheckedCreateInput>;
};
export type userCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.userCreateManyInput | Prisma.userCreateManyInput[];
    skipDuplicates?: boolean;
};
export type userCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    data: Prisma.userCreateManyInput | Prisma.userCreateManyInput[];
    skipDuplicates?: boolean;
};
export type userUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.userUpdateInput, Prisma.userUncheckedUpdateInput>;
    where: Prisma.userWhereUniqueInput;
};
export type userUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.userUpdateManyMutationInput, Prisma.userUncheckedUpdateManyInput>;
    where?: Prisma.userWhereInput;
    limit?: number;
};
export type userUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.userUpdateManyMutationInput, Prisma.userUncheckedUpdateManyInput>;
    where?: Prisma.userWhereInput;
    limit?: number;
};
export type userUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateInput, Prisma.userUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.userUpdateInput, Prisma.userUncheckedUpdateInput>;
};
export type userDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
    where: Prisma.userWhereUniqueInput;
};
export type userDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userWhereInput;
    limit?: number;
};
export type user$audit_logArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type user$invoiceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type user$user_roleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type userDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.userSelect<ExtArgs> | null;
    omit?: Prisma.userOmit<ExtArgs> | null;
    include?: Prisma.userInclude<ExtArgs> | null;
};
export {};
