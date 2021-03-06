'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class Portal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description a portal element that puts the tooltip contents at the top of the document tree, outside the react app
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var modalRoot = typeof document != 'undefined' ? document.getElementById('modal-root') : null;

var Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal(props) {
    _classCallCheck(this, Portal);

    var _this = _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this, props));

    _this.portalElement = typeof document != 'undefined' ? document.createElement('div') : null;
    if (_this.portalElement) {
      _this.portalElement.setAttribute('class', 'tooltip-hidden');
    }
    return _this;
  }

  _createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (modalRoot) {
        modalRoot.appendChild(this.portalElement);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (modalRoot) {
        modalRoot.removeChild(this.portalElement);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.portalElement) {
        return null;
      }
      return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { className: this.props.className },
        this.props.children
      ), this.portalElement);
    }
  }]);

  return Portal;
}(_react2.default.Component);

Portal.propTypes = {
  children: _propTypes2.default.node.isRequired
};
exports.default = Portal;