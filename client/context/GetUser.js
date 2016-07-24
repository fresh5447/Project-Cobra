import React from 'react';

class GetUser extends React.Component {
  constructor(props) {
    super(props);

    this.getUser = this.getUser.bind(this);
  }

  getChildContext() {
    return {
      getUser: this.getUser
    };
  }

  getUser(cb) {
    $.ajax({
      url: '/getUser',
      method: 'GET'
    }).done((data) => {
      return cb(data)
    });
  }

  render() {
    return (
        <div>
          { this.props.children }
        </div>
      );
  }
}

GetUser.displayName = GetUser;

GetUser.propTypes = {
  children: React.PropTypes.node.isRequired
};

GetUser.childContextTypes = {
  getUser: React.PropTypes.func
};

export default GetUser;
