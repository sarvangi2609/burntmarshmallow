// import React, { useEffect, useState } from 'react';

// const NotificationSidebar = ({ showSidebar, setShowSidebar}) => {
//   const [notifications, setNotifications] = useState([]);

  // useEffect(() => {
  //   if (showSidebar) {
  //     fetch(' http://localhost:3000/notifications')
  //       .then(res => res.json())
  //       .then(data => setNotifications(data));
  //   }
  // }, [showSidebar]);

//   return (
//     <div
//       className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transition-transform duration-300 ${
//         showSidebar ? 'translate-x-0' : 'translate-x-full'
//       }`}
//     >
//       <div className="p-4 border-b flex justify-between">
//         <h2>Notifications</h2>
//         <button onClick={setShowSidebar}>✖</button>
//       </div>
//       <ul className="p-4">
//         {notifications.map(n => (
//           <li key={n.id} className="mb-2 border-b pb-2">
//             {n.message}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default NotificationSidebar;

import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function NotificationSidebar({ show, handleClose }) {

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    if (show) {
      fetch(' http://localhost:3000/notifications')
        .then(res => res.json())
        .then(data => setNotifications(data));
    }
  }, [show]);



  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Notifications</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="p-4">
            {notifications.map((n) => (
              <div key={n.id} className="mb-2 border-b pb-2">
                {n.message}
              </div>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
