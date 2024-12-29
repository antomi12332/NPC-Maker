import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'

const gqlEndpoint: string = process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!
const anonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!


const config: CodegenConfig = {
  schema: {
    [gqlEndpoint]: {
      headers: {
        apiKey: anonKey
      },
    },
  }, // Using the local endpoint, update if needed
  documents: 'app/**/*.tsx',
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    'app/gql/': {
      preset: 'client',
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
  },
  // hooks: {
  //   afterAllFileWrite: ['npm run prettier'], // optional
  // },
}

export default config
