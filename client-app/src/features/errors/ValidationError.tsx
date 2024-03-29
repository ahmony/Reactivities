import React from 'react';
import { Message } from 'semantic-ui-react';

interface Props {
  errors: any;
}

const ValidationError = ({ errors }: Props) => {
  console.log(errors);
  return (
    <Message error>
      {errors && (
        <Message.List>
          {errors.map((err: string, i: number) => (
            <Message.Item key={i}>{err}</Message.Item>
          ))}
        </Message.List>
      )}
    </Message>
  );
};

export default ValidationError;
