import { useEffect } from "react";

type ToastProps = { 
    message: string;
    type: "SUCCESS" | "ERROR";
    onClose: () => void;
};  
const Toast = ({message, type, onClose}: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };  
}, [onClose]);


    const styles = 
        type === "SUCCESS"
         ? "fixed top-4 right-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white max-md"
         : "fixed top-4 right-4 z-50 rounded-md bg-red-500 px-4 py-2 text-white max-md";
    return (
        <div className={styles}>
            <div className = "flex top-5 justify-center items-center rounded shadow-lg text-white">
            <span className = " text-lg font-semibold">{message}</span>
            </div>
        </div>
           
    ) 
};
export default Toast;
