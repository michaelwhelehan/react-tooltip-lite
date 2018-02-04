/**
 * @class Portal
 * @description a portal element that puts the tooltip contents at the top of the document tree, outside the react app
 */

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const modalRoot = typeof document != 'undefined' ? document.getElementById('modal-root') : null;

class Portal extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props);

    this.portalElement = typeof document != 'undefined' ? document.createElement('div') : null;
    if (this.portalElement) {
      this.portalElement.setAttribute('class', 'tooltip-hidden'); 
    }
  }

  componentDidMount() {
    if (modalRoot) {
      modalRoot.appendChild(this.portalElement);
    }
  }

  componentWillUnmount() {
    if (modalRoot) {
      modalRoot.removeChild(this.portalElement);
    }
  }

  render() {
    if (!this.portalElement) {
      return null;
    }
    return ReactDOM.createPortal(<div className={this.props.className}>{this.props.children}</div>, this.portalElement);
  }
}

export default Portal;
