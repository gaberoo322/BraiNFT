import { useState } from 'react'

import { Form, TextField, Submit } from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

import NftsCell from 'src/components/NftsCell'

// import AlchemyContext from 'src/contexts/AlchemyContext'

const HomePage: React.FunctionComponent = () => {
  const [address, setAddress] = useState('')

  const onSubmit = (data) => {
    setAddress(data.address)
  }
  return (
    <>
      <MetaTags title="Home" description="BraiNFT Home page" />

      <h1>BraiNFT Home</h1>

      <p>Get NFT Data</p>

      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="address"
          placeholder="Ethereum Address"
          validation={{ required: true }}
        />
        <Submit>Go</Submit>
      </Form>

      {address && <NftsCell wallet={address} />}
    </>
  )
}

export default HomePage
