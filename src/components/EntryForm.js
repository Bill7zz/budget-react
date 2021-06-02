import React from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

export default function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}) {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="new shinny thinh"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="Is expense"
          checked={isExpense}
          onChange={() => setIsExpense((oldstate) => !oldstate)}
        />
      </Segment>
    </>
  );
}
