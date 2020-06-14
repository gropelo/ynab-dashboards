import React from 'react';
import { Error } from '../Error';

interface IProps {}

interface IState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      console.info('render2');
      return <Error />;
    }

    return this.props.children;
  }
}