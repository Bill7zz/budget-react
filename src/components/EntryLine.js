import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine({description, value, isExpense = false}) {
    return (
        <Segment color={isExpense? 'red' : 'green'}>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>
              {description}
              </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              {value}
              </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}

export default EntryLine
