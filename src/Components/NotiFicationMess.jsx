import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const NotiFicationMess = ({msg, btn}) => {
    const notify = () => toast(msg);
    const a1 = {
      border : "none",
      outline : "none",
      background : "#1b2226",
      cursor : "pointer",
      color : "#fff",
      padding : "4px 8px"
    }
    return (
      <div>
        <button style={a1} onClick={notify}>{btn===undefined ? "Notify!": btn}</button>
        <ToastContainer />
      </div>
    );
  }