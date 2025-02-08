const { getBlogs } = require('../model/blogs');
const router = express.Router();

const baseURL = process.env.API_BASE_URL;
const config = {
    headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`,
        'Content-Type': 'application/json'
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await getBlogs();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const createNewBlog = async (req, res) => {
    try {
        const blogData = {
            name: req.body.name,
            email: req.body.email,
            position: req.body.position,
            department: req.body.department
        };

        if (!blogData.name || !blogData.email || !blogData.position || !blogData.department) {
            return res.status(400).json({ 'message': 'All fields are required.' });
        }

        const newBlog = await createBlog(blogData);
        res.status(201).json(newBlog);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateBlog = async (req, res) => {
    try {
        const id = parseInt(req.params.id); // Assuming ID comes from URL parameter
        const blogData = {
            name: req.body.name,
            email: req.body.email,
            position: req.body.position,
            department: req.body.department
        };

        // Validate required fields
        if (!blogData.name || !blogData.email || !blogData.position || !blogData.department) {
            return res.status(400).json({ 'message': 'All fields are required.' });
        }

        const updatedBlog = await updateBlog(id, blogData);

        if (!updatedBlog) {
            return res.status(404).json({ "message": `Blog ID ${id} not found` });
        }
        res.status(201).json(updatedBlog);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteBlog = async (req, res) => {
    try {
        const id = parseInt(req.params.id); // Assuming ID comes from URL parameter
        const deletedBlog = await deleteBlog(id);

        if (!deletedBlog) {
            return res.status(404).json({ "message": `Blog ID ${id} not found` });
        }

        res.status(201).json(deletedBlog);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


module.exports = {
    getAllBlogs,
    createNewBlog,
    updateBlog,
    deleteBlog,
}