import { Container } from 'semantic-ui-react';

import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader title='Budget'/>
      <DisplayBalance title='Your Balance' value='2,550.53' size='small' />

      <DisplayBalances />

      <MainHeader title='History' type='h3' />
      <EntryLine description='Income' value='$10'/>
      <EntryLine description='Expense' value='$10' isExpense/>

      <MainHeader title='Add new transaction' type='h3'/>
      <NewEntryForm/>
    </Container>
  );
}

export default App;
