import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      error: false,
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3000/blogs')
      .then(({ data }) => this.setState({ blogs: [...data] }))
      .catch(() => this.setState({ error: true }));
  }
  render() {
    const { blogs } = this.state;
    return (
      <div>
        <h1>Blogs</h1>
        <ul>
          {blogs && blogs.map(blog => <li key={blog.id}>{blog.title}</li>)}
        </ul>
      </div>
    );
  }
}
