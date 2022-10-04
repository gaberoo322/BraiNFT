// import type { NftsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query NftsQuery($wallet: String!) {
    getNfts(wallet: $wallet) {
      ownedNfts {
        id {
          tokenId
        }
        title
        description
        media {
          gateway
        }
        metadata {
          name
          description
          image
          external_url
          attributes {
            value
            trait_type
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (res: CellSuccessProps<any>) => {
  return (
    <ul>
      {res.getNfts.ownedNfts.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
