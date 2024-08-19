import express from "express";
const router = express.Router();

router.get('/customjokes', async(req, res) => {
    const jokes = [
        {
            id : 1,
            title : "joke1",
            content : "joke one"
        },
        {
            id : 2,
            title : "joke2",
            content : "joke two"
        }
    ] 

    res.send(jokes);
});

export default router;