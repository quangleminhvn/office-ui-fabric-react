import * as React from 'react';
import { CompoundButton } from '../../../../Button';
import { Label } from '../../../../Label';
import { IButtonProps } from './IButtonProps';

export class ButtonCompoundExample extends React.Component<IButtonProps, {}> {
  public constructor() {
    super();
  }

  public render() {
    let { disabled } = this.props;

    return (
      <div className='ms-BasicButtonsExample'>
        <Label>Compound button</Label>
        <CompoundButton
          description='You can create a new account here.'
          disabled={ disabled }
        >
          Create account
        </CompoundButton>
      </div>
    );
  }
}