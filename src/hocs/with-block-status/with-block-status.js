import React, {PureComponent} from 'react';

const withBlockStatus = (Component) => {
  class WithBlockStatus extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isCommentFilled: false,
        isError: false,
        isRatingSet: false,
        isReviewFormBlocked: false,
        isSubmitButtonBlocked: true,
      };

      this.blockButton = this.blockButton.bind(this);
      this.blockForm = this.blockForm.bind(this);
      this.checkCommentFilled = this.checkCommentFilled.bind(this);
      this.setRating = this.setRating.bind(this);
      this.showError = this.showError.bind(this);
      this.unblockButton = this.unblockButton.bind(this);
      this.uncheckCommentFilled = this.uncheckCommentFilled.bind(this);
    }

    blockButton() {
      this.setState({
        isSubmitButtonBlocked: true,
      });
    }

    unblockButton() {
      this.setState({
        isSubmitButtonBlocked: false,
      });
    }

    blockForm() {
      this.setState({
        isReviewFormBlocked: true,
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

    showError() {
      this.setState({
        isError: true,
        isReviewFormBlocked: false
      });
    }

    setRating() {
      this.setState({
        isRatingSet: true
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
      const {isError, isReviewFormBlocked, isSubmitButtonBlocked} = this.state;

      return (
        <Component
          {...this.props}
          blockForm={this.blockForm}
          checkCommentFilled={this.checkCommentFilled}
          isError={isError}
          isReviewFormBlocked={isReviewFormBlocked}
          isSubmitButtonBlocked={isSubmitButtonBlocked}
          setRating={this.setRating}
          showError={this.showError}
          uncheckCommentFilled={this.uncheckCommentFilled}
        />
      );
    }
  }

  return WithBlockStatus;
};

export default withBlockStatus;
