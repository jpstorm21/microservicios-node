import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.set('port', process.env.PORT || 6000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/orders', ordersRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

export default app;