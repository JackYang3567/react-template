import React from 'react'

import {
  Container,
  Header,
  Card
} from 'semantic-ui-react'
import Button from '../ui/Button'

const href = 'https://react.semantic-ui.com';
const children = <h1>Test</h1>;
const HSL = ({ match: { params } })=> {
    return (
     
      <Container text style={{
        ...styles.fill,
        ...styles.hsl,
        marginTop: '7em',
        background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
      }}
    >
          
      <Header as='h1'>HSL Fill page</Header>
       
       <Button href={href} >   
         {children}
       </Button>
       <Card
                header={`Hello ${params.h}`}
                description={`This route uses your name in the URL params. You are ${params.h}`}
            />
        hsl(
        {params.h}, {params.s}
        %, {params.l}
        %)
      </Container>
    );
  }
  
  

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
    ...styles.fill,
    color: "white",
    paddingTop: "20px",
    fontSize: "30px"
  };

  export default HSL
  