import React, { PureComponent } from "react";

export default class Layout extends PureComponent {
  render() {
    return (
      <div className="layout site">
        {this.props.children}
      </div>
    );
  }
}
