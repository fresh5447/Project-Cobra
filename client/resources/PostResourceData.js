import React from 'react';
import PostResourceForm from './PostResourceForm';
import { browserHistory } from 'react-router';

class PostResourceData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      title: null,
      link: null,
      desc: null,
      categories: null,
      addCats: null
    };

  }

  componentWillMount() {
    this.getCats();
  }

  onFieldChange(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  getCats() {
    $.ajax({
      url: '/api/v1/cats',
      method: 'GET'
    }).done((d) => this.setState({ categories: d }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      title: this.state.title,
      desc: this.state.desc,
      link: this.state.link,
      newCats: this.state.newCats
    };
    $.ajax({
      url: '/api/v1/resources',
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Resource Created");
      const path = '/resources/all'
      browserHistory.push(path);
    });
  }

  render() {
    return <PostResourceForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    title={this.state.title}
    link={this.state.link}
    desc={this.state.desc}
    categories={this.state.categories}
    newCats={this.state.newCats}
    assignment={this.state.assignment}
    />;
  }

}

PostResourceData.displayName = PostResourceData;
PostResourceData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default PostResourceData;
