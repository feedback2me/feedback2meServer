import express from 'express';
import logger from '../logger';

const router = express.Router();

// router.use((req, res, next) => {
//     if (!req.user) {
//         res.status(401).json({ error: 'Unauthorized' });
//         return;
//     }

//     next();
// });

router.get('/', async (req, res) => {
    try {
        const message = { message: 'Hello World -- Burak Buruk v2' };
        logger.info(message);

        res.json(message);
    } catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

export default router;
