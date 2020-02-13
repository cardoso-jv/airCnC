const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const RejectionController = require('./controllers/RejectionController');
const ApprovalController = require('./controllers/ApprovalController');


const routes = express.Router();
const upload = multer(uploadConfig);

// GET = recuperar , POST = inserir, PUT = modificar, DELETE = deletar
// req.query = acessar query params (filtros, paramentros no url igual _GET[''])
// req.body = acessar body params (parecido com POST)
// req.params = acessar route params (edição e delete)


routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/spots', SpotController.index);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store );
routes.post('/bookings/:booking_id/rejections', RejectionController.store );


module.exports = routes;
