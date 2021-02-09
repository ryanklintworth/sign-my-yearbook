import axios from 'axios';

const url = 'http://localhose:5000/posts';

const fetchPosts = () => axios.get(url);