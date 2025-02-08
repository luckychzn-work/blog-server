module.exports = {
    GET_ALL_BLOGS: 'SELECT * FROM blogs',
    CREATE_BLOG: 'INSERT INTO blogs (name, email, position, department) VALUES ($1, $2, $3, $4) RETURNING *',
    UPDATE_BLOG: 'UPDATE blogs SET name = $1, email = $2, position = $3, department = $4 WHERE id = $5 RETURNING *',
    DELETE_BLOG: 'DELETE FROM blogs WHERE id = $1 RETURNING *'
}; 