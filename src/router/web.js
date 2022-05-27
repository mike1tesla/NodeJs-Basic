import express from 'express'
import homeController from "../controller/homeController"

let router = express.Router(); 
//hàm express.Router() giúp chương trình cố gắng cho hiểu rằng 
//đang định nghĩa ra một đường link trên website, tạo 1 route

const initWebRouter = (app) => {
    // Lấy dữ liệu file views tại homeController
    router.get('/', homeController.getHomepage); 
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.get('/about', (req, res) => {
        res.send('NODEJS')
    })

    return app.use('/', router);
}

export default initWebRouter;