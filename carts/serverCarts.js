import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cartsRoutes from './routes/carts.routes';

const app = express();

app.set('port', process.env.PORT || 3500);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/carts', cartsRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

export default app;