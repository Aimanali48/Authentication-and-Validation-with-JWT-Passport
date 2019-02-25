const express = require('express')
       router = express.Router()


router.get('/', async (req, res) => {
    res.send('posts succeed')
})

module.exports = router