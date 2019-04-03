import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import Master from '../layouts/master'

class Blog extends Component {
    render(){
        const name = this.props.match.params.name;
        return(
            <Master text style={{ marginTop: '7em' }}>
                <Card
                    header={`Hello ${name}`}
                    description={`This route uses your name in the URL params. You are ${name}`}
                />
            </Master>
        )
    }
}

export default Blog