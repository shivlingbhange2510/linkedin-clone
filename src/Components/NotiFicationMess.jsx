import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const NotiFicationMess = ({msg, btn}) => {
    const notify = () => toast(msg);

    return (
      <div>
        <button onClick={notify}>{btn===undefined ? "Notify!": msg}</button>
        <ToastContainer />
      </div>
    );
  }