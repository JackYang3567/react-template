import React from 'react'
import {
  Container,
  Header
} from 'semantic-ui-react'

const RGB = ({ match: { params } }) => {
    return (
      <Container text style={{
        ...styles.fill,
          ...styles.rgb,
          marginTop: '7em',
          background: `rgb(${params.r}, ${params.g}, ${params.b})`
        }}
      >
       <Header as='h1'>RGB Fill page</Header>
        rgb(
        {params.r}, {params.g}, {params.b})
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

  export default RGB
  