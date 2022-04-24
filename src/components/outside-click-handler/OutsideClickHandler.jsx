import {Component, createRef} from "react";

export class OutsideClickHandler extends Component {
  wrapperRef = createRef();

  static defaultProps = {
    onOutsideClick: () => {}
  };

  componentDidMount() {
    document
      .addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount(){
    document
      .removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.wrapperRef.current &&
      !this.wrapperRef.current.contains(event.target)
    ) {
      this.props.onOutsideClick();
    }
  }

  render() {
    const { children } = this.props;

    return <div ref={this.wrapperRef}>{children}</div>;
  }
}
