import React, {PureComponent} from 'react';

const withShowControl = (Component) => {
  class WithShowControl extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isCollapsed: true,
      };

      this._handleShowControlClick = this._handleShowControlClick.bind(this);
    }

    _handleShowControlClick() {
      this.setState({
        isCollapsed: !this.state.isCollapsed
      });
    }

    render() {
      const {isCollapsed} = this.state;
      return (
        <Component
          {...this.props}
          isCollapsed={isCollapsed}
          handleShowUpClick={this._handleShowControlClick}
        />
      );
    }
  }

  return WithShowControl;
};

export default withShowControl;
