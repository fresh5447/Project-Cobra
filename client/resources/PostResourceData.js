import React from 'react';
import PostResourceForm from './PostResourceForm';
import { browserHistory } from 'react-router';

class PostResourceData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToCats = this.addToCats.bind(this);

    this.state = {
      title: null,
      content: null,
      video: null,
      link: null,
      categories: null,
      internal: null,
      publish: null,
      resCats: []
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

  addToCats(item) {
    this.state.resCats.push(item._id);
    this.context.sendNotification(`${item.name} Added`);
  }

  handleSubmit(e) {
    const int = true ? this.state.internal === "on" : false;
    const pub = true ? this.state.publish === "on" : false;
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content,
      video: this.state.video,
      link: this.state.link,
      internal: int,
      publish: pub,
      categories: this.state.resCats
    };
    console.log('data', data);
    $.ajax({
      url: '/api/v1/resources',
      method: 'POST',
      data
    }).done((d) => {
      this.context.sendNotification("Resource Created");
      this.props.loadStudentResources();
      this.props.toggleComp('all');
    });
  }

  render() {
    return <PostResourceForm
    onFieldChange={(...args) => this.onFieldChange(...args)}
    handleSubmit={this.handleSubmit}
    categories={this.state.categories}
    addToCats={this.addToCats}
    resCats={this.state.resCats}
    content={this.state.content}
    />;
  }

}

PostResourceData.displayName = PostResourceData;
PostResourceData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default PostResourceData;
