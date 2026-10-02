import {Routes, Route, Navigate} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes.js';
import { SHOP_ROUTE } from '../utils/consts.js';

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/> 
            )}
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/> 
            )}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />}/>
        </Routes>
    )
}

export default AppRouter;