'use client'
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
const Providers = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>
        {children}
        <ToastContainer />
        </Provider>;
}

export default Providers