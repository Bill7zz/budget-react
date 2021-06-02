import { useEffect, useState } from 'react';

import { Container } from 'semantic-ui-react';
import './App.css';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import ModalEdit from './components/ModalEdit';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [entryId, setEntryId] = useState();
  const [entries, setEntries] = useState(initialEntries);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryId) {
      // is the modal is been closedd
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }

    // I will disable the next line to remove the warning about the dependencies on hooks
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  // will run the arrow funcion every time the value "isOpen" changes
  // if we pass a empty array, it will run just on startup

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });

    setTotal(totalIncomes - totalExpenses);
    setIncomeTotal(totalIncomes);
    setExpenseTotal(totalExpenses);
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntry();
  }

  function editEntry(id) {
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense('');
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={`$ ${total}`} size="small" />

      <DisplayBalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
      <MainHeader title="History" type="h3" />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        description={description}
        value={value}
        isExpens={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        addEntry={addEntry}
      />

      <ModalEdit
        description={description}
        value={value}
        isExpense={isExpense}
        isOpen={isOpen}
        setValue={setValue}
        setDescription={setDescription}
        setIsExpense={setIsExpense}
        setIsOpen={setIsOpen}
      />
    </Container>
  );
}

export default App;

// using var we can declare de variable on the botton of the file
var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000,
    isExpense: false,
  },
  {
    id: 2,
    description: 'Water bill',
    value: 20,
    isExpense: true,
  },
  {
    id: 3,
    description: 'rent',
    value: 300,
    isExpense: true,
  },
  {
    id: 4,
    description: 'Power bill',
    value: 50,
    isExpense: true,
  },
];
