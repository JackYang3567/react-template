import React from 'react'
import {
  Header, Card, Icon } from 'semantic-ui-react'
import Master from '../layouts/master'

const description = [
  'Anakin is a Jedi string with the force.',
  'Qui Gon Jin brought him before the council believing him to be the chosen one.',
].join(' ')

const CardExtraContent = () => (
  <Master text style={{ marginTop: '7em' }}>
    <Header as='h1'>Card page</Header>
    <Card>
      <Card.Content header='About Anakin' />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='user' />
        4 Friends
      </Card.Content>
    </Card>

    <Card>
      <Card.Content header='About Anakin' />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='user' />
        4 Friends
      </Card.Content>
    </Card>

    <Card>
      <Card.Content header='About Anakin' />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='user' />
        4 Friends
      </Card.Content>
    </Card>

    <Card>
      <Card.Content header='About Anakin' />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='user' />
        4 Friends
      </Card.Content>
    </Card>
    </Master>
)

export default CardExtraContent