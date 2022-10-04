export const schema = gql`
  type ContractMetadata {
    name: String
    symbol: String
    totalSupply: String
    tokenType: String
  }

  type Attributes {
    value: String
    trait_type: String
  }

  type Metadata {
    name: String
    description: String
    image: String
    external_url: String
    attributes: [Attributes]
  }

  type Media {
    raw: String
    gateway: String
  }

  type TokenUri {
    raw: String
    gateway: String
  }

  type TokenMetadata {
    tokenType: String
  }

  type Id {
    tokenId: String
    tokenMetadata: TokenMetadata
  }

  type Contract {
    address: String
  }

  type OwnedNfts {
    title: String
    description: String
    timeLastUpdated: String
    contractMetadata: ContractMetadata
    metadata: Metadata
    media: [Media]
    tokenUri: TokenUri
    id: Id
    contract: Contract
  }

  type NftData {
    totalCount: Int
    blockHash: String
    ownedNfts: [OwnedNfts]
  }

  # Types with identical fields:
  # Media TokenUri

  type Query {
    getNfts(wallet: String!): NftData! @skipAuth
  }
`
