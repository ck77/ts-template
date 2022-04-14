import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/home';
import Topic from './page/topic';

const Main: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/topics' element={<Topic />} />
            {/* <Route path='/settings' element={<Settings />} /> */}
        </Routes>
    );
}
export default Main;