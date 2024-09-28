import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";

function App() {
    return (
        <div className='min-h-screen overflow-hidden'>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='*'
                    element={<Error />}
                />
            </Routes>
        </div>
    );
}

export default App;
