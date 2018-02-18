import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlogPosts } from '../../actions/blogs';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      error: false,
    };
  }
  componentDidMount() {
    this.props.fetchBlogPosts();
  }
  componentWillReceiveProps(nextProps) {
    const blog = nextProps.blog;

    if (blog.posts.length > 0) {
      const blogs = blog.posts;
      this.setState({ blogs });
    }
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

const mapStateToProps = state => ({
  blog: state.blog,
});

const mapDisptachToProps = dispatch => ({
  fetchBlogPosts: () => dispatch(fetchBlogPosts()),
});

export default connect(mapStateToProps, mapDisptachToProps)(Home);
