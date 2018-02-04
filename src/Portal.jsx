/**
 * @class Portal
 * @description a portal element that puts the tooltip contents at the top of the document tree, outside the react app
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Portal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);

    this.portalElement = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.portalElement);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.portalElement);
  }

  render() {
    return ReactDOM.createPortal(<div className={this.props.className}>{this.props.children}</div>, this.portalElement);
  }
}

export default Portal;
