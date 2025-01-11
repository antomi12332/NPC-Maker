/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date wihout time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `account` collection */
  deleteFromaccountCollection: AccountDeleteResponse;
  /** Deletes zero or more records from the `culture` collection */
  deleteFromcultureCollection: CultureDeleteResponse;
  /** Deletes zero or more records from the `history` collection */
  deleteFromhistoryCollection: HistoryDeleteResponse;
  /** Deletes zero or more records from the `location` collection */
  deleteFromlocationCollection: LocationDeleteResponse;
  /** Deletes zero or more records from the `npcs` collection */
  deleteFromnpcsCollection: NpcsDeleteResponse;
  /** Deletes zero or more records from the `order_history` collection */
  deleteFromorder_historyCollection: Order_HistoryDeleteResponse;
  /** Deletes zero or more records from the `organization` collection */
  deleteFromorganizationCollection: OrganizationDeleteResponse;
  /** Deletes zero or more records from the `projects` collection */
  deleteFromprojectsCollection: ProjectsDeleteResponse;
  /** Deletes zero or more records from the `quests` collection */
  deleteFromquestsCollection: QuestsDeleteResponse;
  /** Deletes zero or more records from the `token_packs` collection */
  deleteFromtoken_packsCollection: Token_PacksDeleteResponse;
  /** Adds one or more `account` records to the collection */
  insertIntoaccountCollection?: Maybe<AccountInsertResponse>;
  /** Adds one or more `culture` records to the collection */
  insertIntocultureCollection?: Maybe<CultureInsertResponse>;
  /** Adds one or more `history` records to the collection */
  insertIntohistoryCollection?: Maybe<HistoryInsertResponse>;
  /** Adds one or more `location` records to the collection */
  insertIntolocationCollection?: Maybe<LocationInsertResponse>;
  /** Adds one or more `npcs` records to the collection */
  insertIntonpcsCollection?: Maybe<NpcsInsertResponse>;
  /** Adds one or more `order_history` records to the collection */
  insertIntoorder_historyCollection?: Maybe<Order_HistoryInsertResponse>;
  /** Adds one or more `organization` records to the collection */
  insertIntoorganizationCollection?: Maybe<OrganizationInsertResponse>;
  /** Adds one or more `projects` records to the collection */
  insertIntoprojectsCollection?: Maybe<ProjectsInsertResponse>;
  /** Adds one or more `quests` records to the collection */
  insertIntoquestsCollection?: Maybe<QuestsInsertResponse>;
  /** Adds one or more `token_packs` records to the collection */
  insertIntotoken_packsCollection?: Maybe<Token_PacksInsertResponse>;
  /** Updates zero or more records in the `account` collection */
  updateaccountCollection: AccountUpdateResponse;
  /** Updates zero or more records in the `culture` collection */
  updatecultureCollection: CultureUpdateResponse;
  /** Updates zero or more records in the `history` collection */
  updatehistoryCollection: HistoryUpdateResponse;
  /** Updates zero or more records in the `location` collection */
  updatelocationCollection: LocationUpdateResponse;
  /** Updates zero or more records in the `npcs` collection */
  updatenpcsCollection: NpcsUpdateResponse;
  /** Updates zero or more records in the `order_history` collection */
  updateorder_historyCollection: Order_HistoryUpdateResponse;
  /** Updates zero or more records in the `organization` collection */
  updateorganizationCollection: OrganizationUpdateResponse;
  /** Updates zero or more records in the `projects` collection */
  updateprojectsCollection: ProjectsUpdateResponse;
  /** Updates zero or more records in the `quests` collection */
  updatequestsCollection: QuestsUpdateResponse;
  /** Updates zero or more records in the `token_packs` collection */
  updatetoken_packsCollection: Token_PacksUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromaccountCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AccountFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromcultureCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CultureFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromhistoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<HistoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromlocationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<LocationFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromnpcsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<NpcsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromorder_HistoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Order_HistoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromorganizationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprojectsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjectsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromquestsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<QuestsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromtoken_PacksCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Token_PacksFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoaccountCollectionArgs = {
  objects: Array<AccountInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntocultureCollectionArgs = {
  objects: Array<CultureInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntohistoryCollectionArgs = {
  objects: Array<HistoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntolocationCollectionArgs = {
  objects: Array<LocationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntonpcsCollectionArgs = {
  objects: Array<NpcsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoorder_HistoryCollectionArgs = {
  objects: Array<Order_HistoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoorganizationCollectionArgs = {
  objects: Array<OrganizationInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprojectsCollectionArgs = {
  objects: Array<ProjectsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoquestsCollectionArgs = {
  objects: Array<QuestsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntotoken_PacksCollectionArgs = {
  objects: Array<Token_PacksInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateaccountCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AccountFilter>;
  set: AccountUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatecultureCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<CultureFilter>;
  set: CultureUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatehistoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<HistoryFilter>;
  set: HistoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatelocationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<LocationFilter>;
  set: LocationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatenpcsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<NpcsFilter>;
  set: NpcsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateorder_HistoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Order_HistoryFilter>;
  set: Order_HistoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateorganizationCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<OrganizationFilter>;
  set: OrganizationUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprojectsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProjectsFilter>;
  set: ProjectsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatequestsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<QuestsFilter>;
  set: QuestsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatetoken_PacksCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Token_PacksFilter>;
  set: Token_PacksUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `account` */
  accountCollection?: Maybe<AccountConnection>;
  /** A pagable collection of type `culture` */
  cultureCollection?: Maybe<CultureConnection>;
  /** A pagable collection of type `history` */
  historyCollection?: Maybe<HistoryConnection>;
  /** A pagable collection of type `location` */
  locationCollection?: Maybe<LocationConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `npcs` */
  npcsCollection?: Maybe<NpcsConnection>;
  /** A pagable collection of type `order_history` */
  order_historyCollection?: Maybe<Order_HistoryConnection>;
  /** A pagable collection of type `organization` */
  organizationCollection?: Maybe<OrganizationConnection>;
  /** A pagable collection of type `projects` */
  projectsCollection?: Maybe<ProjectsConnection>;
  /** A pagable collection of type `quests` */
  questsCollection?: Maybe<QuestsConnection>;
  /** A pagable collection of type `token_packs` */
  token_packsCollection?: Maybe<Token_PacksConnection>;
};


/** The root type for querying data */
export type QueryAccountCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
};


/** The root type for querying data */
export type QueryCultureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CultureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CultureOrderBy>>;
};


/** The root type for querying data */
export type QueryHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<HistoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HistoryOrderBy>>;
};


/** The root type for querying data */
export type QueryLocationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LocationOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryNpcsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NpcsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NpcsOrderBy>>;
};


/** The root type for querying data */
export type QueryOrder_HistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Order_HistoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Order_HistoryOrderBy>>;
};


/** The root type for querying data */
export type QueryOrganizationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationOrderBy>>;
};


/** The root type for querying data */
export type QueryProjectsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProjectsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};


/** The root type for querying data */
export type QueryQuestsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<QuestsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QuestsOrderBy>>;
};


/** The root type for querying data */
export type QueryToken_PacksCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Token_PacksFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Token_PacksOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Account = Node & {
  __typename?: 'account';
  created_at: Scalars['Datetime']['output'];
  display_name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organization?: Maybe<Organization>;
  organization_id?: Maybe<Scalars['UUID']['output']>;
  tokens: Scalars['BigInt']['output'];
  user_id: Scalars['UUID']['output'];
};

export type AccountConnection = {
  __typename?: 'accountConnection';
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
};

export type AccountDeleteResponse = {
  __typename?: 'accountDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Account>;
};

export type AccountEdge = {
  __typename?: 'accountEdge';
  cursor: Scalars['String']['output'];
  node: Account;
};

export type AccountFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AccountFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  display_name?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AccountFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AccountFilter>>;
  organization_id?: InputMaybe<UuidFilter>;
  tokens?: InputMaybe<BigIntFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type AccountInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
  tokens?: InputMaybe<Scalars['BigInt']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AccountInsertResponse = {
  __typename?: 'accountInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Account>;
};

export type AccountOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  display_name?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  organization_id?: InputMaybe<OrderByDirection>;
  tokens?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type AccountUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  organization_id?: InputMaybe<Scalars['UUID']['input']>;
  tokens?: InputMaybe<Scalars['BigInt']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AccountUpdateResponse = {
  __typename?: 'accountUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Account>;
};

export type Culture = Node & {
  __typename?: 'culture';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  project_id: Scalars['UUID']['output'];
  projects?: Maybe<Projects>;
  user_id: Scalars['UUID']['output'];
};

export type CultureConnection = {
  __typename?: 'cultureConnection';
  edges: Array<CultureEdge>;
  pageInfo: PageInfo;
};

export type CultureDeleteResponse = {
  __typename?: 'cultureDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Culture>;
};

export type CultureEdge = {
  __typename?: 'cultureEdge';
  cursor: Scalars['String']['output'];
  node: Culture;
};

export type CultureFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<CultureFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<CultureFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<CultureFilter>>;
  project_id?: InputMaybe<UuidFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type CultureInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type CultureInsertResponse = {
  __typename?: 'cultureInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Culture>;
};

export type CultureOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  project_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type CultureUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type CultureUpdateResponse = {
  __typename?: 'cultureUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Culture>;
};

export type History = Node & {
  __typename?: 'history';
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  project_id: Scalars['UUID']['output'];
  projects?: Maybe<Projects>;
  title: Scalars['String']['output'];
  user_id: Scalars['UUID']['output'];
};

export type HistoryConnection = {
  __typename?: 'historyConnection';
  edges: Array<HistoryEdge>;
  pageInfo: PageInfo;
};

export type HistoryDeleteResponse = {
  __typename?: 'historyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<History>;
};

export type HistoryEdge = {
  __typename?: 'historyEdge';
  cursor: Scalars['String']['output'];
  node: History;
};

export type HistoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<HistoryFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<HistoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<HistoryFilter>>;
  project_id?: InputMaybe<UuidFilter>;
  title?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type HistoryInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type HistoryInsertResponse = {
  __typename?: 'historyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<History>;
};

export type HistoryOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  project_id?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type HistoryUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type HistoryUpdateResponse = {
  __typename?: 'historyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<History>;
};

export type Location = Node & {
  __typename?: 'location';
  created_at: Scalars['Datetime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['BigInt']['output'];
  location_name: Scalars['String']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  npcsCollection?: Maybe<NpcsConnection>;
  project_id: Scalars['UUID']['output'];
  projects?: Maybe<Projects>;
  user_id: Scalars['UUID']['output'];
};


export type LocationNpcsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<NpcsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<NpcsOrderBy>>;
};

export type LocationConnection = {
  __typename?: 'locationConnection';
  edges: Array<LocationEdge>;
  pageInfo: PageInfo;
};

export type LocationDeleteResponse = {
  __typename?: 'locationDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Location>;
};

export type LocationEdge = {
  __typename?: 'locationEdge';
  cursor: Scalars['String']['output'];
  node: Location;
};

export type LocationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<LocationFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  location_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<LocationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<LocationFilter>>;
  project_id?: InputMaybe<UuidFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type LocationInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  location_name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type LocationInsertResponse = {
  __typename?: 'locationInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Location>;
};

export type LocationOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  location_name?: InputMaybe<OrderByDirection>;
  project_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type LocationUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  location_name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type LocationUpdateResponse = {
  __typename?: 'locationUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Location>;
};

export type Npcs = Node & {
  __typename?: 'npcs';
  created_at: Scalars['Datetime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  dialog?: Maybe<Scalars['String']['output']>;
  id: Scalars['BigInt']['output'];
  location?: Maybe<Location>;
  location_id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  npc_name?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['UUID']['output'];
};

export type NpcsConnection = {
  __typename?: 'npcsConnection';
  edges: Array<NpcsEdge>;
  pageInfo: PageInfo;
};

export type NpcsDeleteResponse = {
  __typename?: 'npcsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Npcs>;
};

export type NpcsEdge = {
  __typename?: 'npcsEdge';
  cursor: Scalars['String']['output'];
  node: Npcs;
};

export type NpcsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<NpcsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  dialog?: InputMaybe<StringFilter>;
  id?: InputMaybe<BigIntFilter>;
  location_id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<NpcsFilter>;
  npc_name?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<NpcsFilter>>;
  user_id?: InputMaybe<UuidFilter>;
};

export type NpcsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dialog?: InputMaybe<Scalars['String']['input']>;
  location_id?: InputMaybe<Scalars['BigInt']['input']>;
  npc_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type NpcsInsertResponse = {
  __typename?: 'npcsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Npcs>;
};

export type NpcsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  description?: InputMaybe<OrderByDirection>;
  dialog?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  location_id?: InputMaybe<OrderByDirection>;
  npc_name?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type NpcsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dialog?: InputMaybe<Scalars['String']['input']>;
  location_id?: InputMaybe<Scalars['BigInt']['input']>;
  npc_name?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type NpcsUpdateResponse = {
  __typename?: 'npcsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Npcs>;
};

export type Order_History = Node & {
  __typename?: 'order_history';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
};

export type Order_HistoryConnection = {
  __typename?: 'order_historyConnection';
  edges: Array<Order_HistoryEdge>;
  pageInfo: PageInfo;
};

export type Order_HistoryDeleteResponse = {
  __typename?: 'order_historyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History>;
};

export type Order_HistoryEdge = {
  __typename?: 'order_historyEdge';
  cursor: Scalars['String']['output'];
  node: Order_History;
};

export type Order_HistoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Order_HistoryFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Order_HistoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Order_HistoryFilter>>;
};

export type Order_HistoryInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Order_HistoryInsertResponse = {
  __typename?: 'order_historyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History>;
};

export type Order_HistoryOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type Order_HistoryUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
};

export type Order_HistoryUpdateResponse = {
  __typename?: 'order_historyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Order_History>;
};

export type Organization = Node & {
  __typename?: 'organization';
  accountCollection?: Maybe<AccountConnection>;
  created_at: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  organization_name: Scalars['String']['output'];
};


export type OrganizationAccountCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AccountFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
};

export type OrganizationConnection = {
  __typename?: 'organizationConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
};

export type OrganizationDeleteResponse = {
  __typename?: 'organizationDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organization>;
};

export type OrganizationEdge = {
  __typename?: 'organizationEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type OrganizationFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<OrganizationFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<OrganizationFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<OrganizationFilter>>;
  organization_name?: InputMaybe<StringFilter>;
};

export type OrganizationInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  organization_name?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationInsertResponse = {
  __typename?: 'organizationInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organization>;
};

export type OrganizationOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  organization_name?: InputMaybe<OrderByDirection>;
};

export type OrganizationUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  organization_name?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationUpdateResponse = {
  __typename?: 'organizationUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Organization>;
};

export type Projects = Node & {
  __typename?: 'projects';
  background?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['Datetime']['output'];
  cultureCollection?: Maybe<CultureConnection>;
  historyCollection?: Maybe<HistoryConnection>;
  id: Scalars['UUID']['output'];
  locationCollection?: Maybe<LocationConnection>;
  modified_at?: Maybe<Scalars['Datetime']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  project_id: Scalars['BigInt']['output'];
  project_name: Scalars['String']['output'];
  questsCollection?: Maybe<QuestsConnection>;
  short_description?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['UUID']['output'];
};


export type ProjectsCultureCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<CultureFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CultureOrderBy>>;
};


export type ProjectsHistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<HistoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HistoryOrderBy>>;
};


export type ProjectsLocationCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<LocationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LocationOrderBy>>;
};


export type ProjectsQuestsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<QuestsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QuestsOrderBy>>;
};

export type ProjectsConnection = {
  __typename?: 'projectsConnection';
  edges: Array<ProjectsEdge>;
  pageInfo: PageInfo;
};

export type ProjectsDeleteResponse = {
  __typename?: 'projectsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Projects>;
};

export type ProjectsEdge = {
  __typename?: 'projectsEdge';
  cursor: Scalars['String']['output'];
  node: Projects;
};

export type ProjectsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProjectsFilter>>;
  background?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  modified_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProjectsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProjectsFilter>>;
  project_id?: InputMaybe<BigIntFilter>;
  project_name?: InputMaybe<StringFilter>;
  short_description?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type ProjectsInsertInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  modified_at?: InputMaybe<Scalars['Datetime']['input']>;
  project_name?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProjectsInsertResponse = {
  __typename?: 'projectsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Projects>;
};

export type ProjectsOrderBy = {
  background?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  modified_at?: InputMaybe<OrderByDirection>;
  project_id?: InputMaybe<OrderByDirection>;
  project_name?: InputMaybe<OrderByDirection>;
  short_description?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type ProjectsUpdateInput = {
  background?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  modified_at?: InputMaybe<Scalars['Datetime']['input']>;
  project_name?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProjectsUpdateResponse = {
  __typename?: 'projectsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Projects>;
};

export type Quests = Node & {
  __typename?: 'quests';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  objective: Scalars['String']['output'];
  project_id: Scalars['UUID']['output'];
  projects?: Maybe<Projects>;
  reward: Scalars['String']['output'];
  title: Scalars['String']['output'];
  user_id: Scalars['UUID']['output'];
};

export type QuestsConnection = {
  __typename?: 'questsConnection';
  edges: Array<QuestsEdge>;
  pageInfo: PageInfo;
};

export type QuestsDeleteResponse = {
  __typename?: 'questsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Quests>;
};

export type QuestsEdge = {
  __typename?: 'questsEdge';
  cursor: Scalars['String']['output'];
  node: Quests;
};

export type QuestsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<QuestsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<QuestsFilter>;
  objective?: InputMaybe<StringFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<QuestsFilter>>;
  project_id?: InputMaybe<UuidFilter>;
  reward?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type QuestsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  reward?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type QuestsInsertResponse = {
  __typename?: 'questsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Quests>;
};

export type QuestsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  objective?: InputMaybe<OrderByDirection>;
  project_id?: InputMaybe<OrderByDirection>;
  reward?: InputMaybe<OrderByDirection>;
  title?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type QuestsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['UUID']['input']>;
  reward?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type QuestsUpdateResponse = {
  __typename?: 'questsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Quests>;
};

export type Token_Packs = Node & {
  __typename?: 'token_packs';
  created_at: Scalars['Datetime']['output'];
  id: Scalars['BigInt']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  pack_name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  token_amount: Scalars['BigInt']['output'];
};

export type Token_PacksConnection = {
  __typename?: 'token_packsConnection';
  edges: Array<Token_PacksEdge>;
  pageInfo: PageInfo;
};

export type Token_PacksDeleteResponse = {
  __typename?: 'token_packsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Token_Packs>;
};

export type Token_PacksEdge = {
  __typename?: 'token_packsEdge';
  cursor: Scalars['String']['output'];
  node: Token_Packs;
};

export type Token_PacksFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Token_PacksFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<BigIntFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Token_PacksFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Token_PacksFilter>>;
  pack_name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  token_amount?: InputMaybe<BigIntFilter>;
};

export type Token_PacksInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  pack_name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  token_amount?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Token_PacksInsertResponse = {
  __typename?: 'token_packsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Token_Packs>;
};

export type Token_PacksOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  pack_name?: InputMaybe<OrderByDirection>;
  price?: InputMaybe<OrderByDirection>;
  token_amount?: InputMaybe<OrderByDirection>;
};

export type Token_PacksUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  pack_name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  token_amount?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Token_PacksUpdateResponse = {
  __typename?: 'token_packsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Token_Packs>;
};
