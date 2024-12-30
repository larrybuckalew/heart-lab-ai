import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { pool } from '../config/database.js';

const router = express.Router();

router.use(verifyToken);

router.get('/profile', async (req, res) => {
  try {
    const user = await pool.query(
      'SELECT id, email, created_at FROM users WHERE id = $1',
      [req.user.id]
    );

    if (user.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.rows[0]);
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;