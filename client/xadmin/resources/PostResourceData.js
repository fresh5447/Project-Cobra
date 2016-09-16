import React from 'react';
import PostResourceForm from './PostResourceForm';
import { browserHistory } from 'react-router';
import ExternalResourceForm from './ExternalResourceForm';
import Loader from '../../widgets/Loader';

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
      resCats: [],
      typeOfResource: null,
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

  handleSubmit(e, kind) {
    console.log('ABIYT TI SIYVGBDSA', kind)
    e.preventDefault();
    const data = {
      title: this.state.title,
      content: this.state.content,
      video: this.state.video,
      link: this.state.link,
      categories: this.state.resCats,
      kind: this.state.typeOfResource
    };
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

  updateTypeOfPost(t) {
    this.setState({ typeOfResource: t })
  }

  showProperForm() {
    if(this.state.typeOfResource === "internal") {
      return (<PostResourceForm
              onFieldChange={(...args) => this.onFieldChange(...args)}
              handleSubmit={this.handleSubmit}
              categories={this.state.categories}
              addToCats={this.addToCats}
              resCats={this.state.resCats}
              content={this.state.content}
            />)
    } else if (this.state.typeOfResource === "external") {
      return (<ExternalResourceForm
              onFieldChange={(...args) => this.onFieldChange(...args)}
              handleSubmit={this.handleSubmit}
              categories={this.state.categories}
              addToCats={this.addToCats}
              resCats={this.state.resCats}
            />)
    } else {
      return <Loader />;
    }
  }

  render() {
    return (
      <div>
      <p>What type of resource?</p>
      <button onClick={this.updateTypeOfPost.bind(this, 'internal')}>Internal Post</button>
      <button onClick={this.updateTypeOfPost.bind(this, 'external')}>External Link</button>
      { this.showProperForm()}

      </div>
    )
  }

}

PostResourceData.displayName = PostResourceData;
PostResourceData.contextTypes = {
  sendNotification: React.PropTypes.func.isRequired
};

export default PostResourceData;
