const pool = require('../config/database');
const blogQueries = require('./queries/blog.queries');

const getBlogs = async () => {
    try {
        const result = await pool.query(blogQueries.GET_ALL_BLOGS);
        return result.rows;
    } catch (error) {
        console.error('Error fetching blogs:', error);
        throw error;
    }
};

const createBlog = async (blogData) => {
    try {
        const { name, email, position, department } = blogData;
        const result = await pool.query(
            blogQueries.CREATE_BLOG,
            [name, email, position, department]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error creating blog:', error);
        throw error;
    }
};

const updateBlog = async (id, blogData) => {
    try {
        const { name, email, position, department } = blogData;
        const result = await pool.query(
            blogQueries.UPDATE_BLOG,
            [name, email, position, department, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error updating blog:', error);
        throw error;
    }
};

const deleteBlog = async (id) => {
    try {
        const result = await pool.query(blogQueries.DELETE_BLOG, [id]);
        return result.rows[0];
    } catch (error) {
        console.error('Error deleting blog:', error);
        throw error;
    }
};

module.exports = {
    getBlogs,
    createBlog,
    updateBlog,
    deleteBlog
}; 