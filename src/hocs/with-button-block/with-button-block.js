import React, {PureComponent} from 'react';

const withButtonBlock = (Component) => {
  class WithButtonBlock extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isCommentFilled: false,
        isRatingSet: false,
        isSubmitButtonBlocked: true,
      };

      this.unblockButton = this.unblockButton.bind(this);
      this.blockButton = this.blockButton.bind(this);
      this.setRating = this.setRating.bind(this);
      this.checkCommentFilled = this.checkCommentFilled.bind(this);
      this.uncheckCommentFilled = this.uncheckCommentFilled.bind(this);
    }

    unblockButton() {
      this.setState({
        isSubmitButtonBlocked: false,
      });
    }

    blockButton() {
      this.setState({
        isSubmitButtonBlocked: true,
      });
    }

    setRating() {
      this.setState({
        isRatingSet: true
      });
    }

    checkCommentFilled() {
      this.setState({
        isCommentFilled: true
      });
    }

    uncheckCommentFilled() {
      this.setState({
        isCommentFilled: false
      });
    }

    componentDidUpdate() {
      const {isCommentFilled, isRatingSet} = this.state;

      if (isCommentFilled && isRatingSet) {
        this.unblockButton();
      } else {
        this.blockButton();
      }
    }

    render() {
      const {isSubmitButtonBlocked} = this.state;

      return (
        <Component
          {...this.props}
          setRating={this.setRating}
          checkCommentFilled={this.checkCommentFilled}
          uncheckCommentFilled={this.uncheckCommentFilled}
          isSubmitButtonBlocked={isSubmitButtonBlocked}
        />
      );
    }
  }

  return WithButtonBlock;
};

export default withButtonBlock;
