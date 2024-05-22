import React, { useEffect } from 'react';
import './SnackBar.scss';

type SnackBarProps = {
    message: string;
    show: boolean;
    onClose: () => void;
}

function Snackbar({ message, show, onClose }: SnackBarProps) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <div className={`snackbar ${show ? 'show' : ''}`}>
            {message}
        </div>
    );
}

export default Snackbar;
