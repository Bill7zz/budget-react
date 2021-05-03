import { Container, Grid, Header, Statistic, Segment, Icon, Form, Button } from 'semantic-ui-react';

import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1">Buget</Header>

      <Statistic size='small'>
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>

      <Segment textAlign='center' >
        <Grid columns={2} divided >
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{textAlign: 'center'}} >Incoming:</Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
            <Statistic size='tiny' color='red'>
                <Statistic.Label style={{textAlign: 'center'}} >Expensives:</Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>
              Something
              </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              $10,00
              </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>
              Something Else
              </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              $20,00
              </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column textAlign='left' width={10}>
              Something
              </Grid.Column>
            <Grid.Column textAlign='right' width={3}>
              $20,00
              </Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' bordered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>Add new transaction</Header>

      <Form unstackable>
        <Form.Group>
          <Form.Input 
          icon='tags'
          width={12}
          label='Description'
          placeholder='new shinny thinh'/>
          <Form.Input
          width={4}
          label='Value'
          placeholder='100.00'
          icon='dollar'
          iconPosition='left'
          />
        </Form.Group>
        <Button.Group style={{marginTop:20}}>
          <Button>Cancel</Button>
          <Button.Or/>
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>

    </Container>
  );
}

export default App;
