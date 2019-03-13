import React from 'react'
import { Button, Icon, List,
  Item, Label, Image,
  Container, Divider } from 'semantic-ui-react'
import Master from '../layouts/master'
import shortParagraph from '../../assets/images/work4.jpg'
import avatar from '../../assets/images/work1.jpg'

const Yellow = (props) => {
    return (
      <Master >
          <Label>
          <Icon name='mail' /> 23
        </Label>
         <Image src={shortParagraph} size='small' />
         <div>
            <Button animated>
              <Button.Content visible>Next</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
            <Button animated='vertical'>
              <Button.Content hidden>Shop</Button.Content>
              <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
            <Button animated='fade'>
              <Button.Content visible>Sign-up for a Pro account</Button.Content>
              <Button.Content hidden>$12.99 a month</Button.Content>
            </Button>
          </div>

          <Item.Image src={avatar} />

          <div>
          <List>
            <List.Item>
              <List.Icon name='users' />
              <List.Content>Semantic UI</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='marker' />
              <List.Content>New York, NY</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' />
              <List.Content>
                <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='linkify' />
              <List.Content>
                <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
              </List.Content>
            </List.Item>
          </List>
          </div>

         
          <div>
    <Container textAlign='left'>Left Aligned</Container>
    <Container textAlign='center'>Center Aligned</Container>
    <Container textAlign='right'>Right Aligned</Container>
    <Container textAlign='justified'>
      <b>Justified</b>
      <Divider />
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies nisi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies nisi.
      </p>
    </Container>
          </div>
      </Master>
    );
  }

  export default Yellow