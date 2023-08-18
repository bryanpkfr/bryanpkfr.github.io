import express from 'express';
import ejs from 'ejs';

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

export default app;