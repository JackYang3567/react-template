import React, { Component } from 'react';
import {
  Header,
  Image
} from 'semantic-ui-react'

import Master from '../layouts/master';
import paragraph from '../../assets/images/paragraph.png';
import mediaParagraph from '../../assets/images/media-paragraph.png'


class Home extends Component {
  render() {
    return (
      
        <Master>
          
            <Header as='h1'>Semantic UI React Fixed Template</Header>
            <p>This is a basic fixed menu template using fixed size containers.</p>
            <p>
            A text container is used for the main container, which is useful for single column layouts.
            </p>

            <Image src={mediaParagraph} style={{ marginTop: '2em' }} />
            <Image src={paragraph} style={{ marginTop: '2em' }} />
            <Image src={paragraph} style={{ marginTop: '2em' }} />
            <Image src={paragraph} style={{ marginTop: '2em' }} />
            <Image src={paragraph} style={{ marginTop: '2em' }} />
            <Image src={paragraph} style={{ marginTop: '2em' }} />
            <Image src={paragraph} style={{ marginTop: '2em' }} />
        </Master>
       
    );
  }
}

export default Home;
