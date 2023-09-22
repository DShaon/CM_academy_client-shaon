// import React, { useState, useEffect } from "react";
// import { CiViewList } from "react-icons/ci";

// const WithdrawRequest = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [withdrawalRequests, setWithdrawalRequests] = useState([]);

//   const [bankDetails, setBankDetails] = useState({});

//   useEffect(() => {
//     // Fetch withdrawal request data from the API
//     const fetchWithdrawalRequests = async () => {
//       try {
//         const response = await fetch(
//           "https://cm-academy-test-server-production.up.railway.app/getWithdrawRequests"
//         ); // Update the API endpoint as needed
//         if (response.ok) {
//           const data = await response.json();
//           setWithdrawalRequests(data);
//         } else {
//           console.error("Error fetching withdrawal requests");
//         }
//       } catch (error) {
//         console.error("Error fetching withdrawal requests:", error);
//       }
//     };

//     fetchWithdrawalRequests();
//   }, []); // Empty dependency array to run this effect only once on component mount

//   const handleOpenModal = (InstructorEmail) => {
//     // https://cm-academy-test-server-production.up.railway.app/bank-account-setup/instructorEmail
//     fetch(
//       `https://cm-academy-test-server-production.up.railway.app/bank-account-setup/${InstructorEmail}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setBankDetails(data);
//         console.log("data", data);
//       });

//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };
//   return (
//     <div>
//       <h1 className="text-2xl">Withdraw request by instructors to admin</h1>
//       <table className="table-auto w-full">
//         <thead>
//           <tr className="bg-gray-100 text-[#1bbf72ee] font-bold text-lg divide-x-2">
//             <th className="px-4 py-2">Sl</th>
//             <th className="px-4 py-2">Instructor name</th>
//             <th className="px-4 py-2">Email</th>
//             <th className="px-4 py-2">Contact</th>
//             <th className="px-4 py-2">Bank details</th>
//             <th className="px-4 py-2">Withdraw amount</th>
//             <th className="px-4 py-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {withdrawalRequests.map((request, index) => (
//             <tr
//               key={index}
//               className="text-center font-semibold text-sm font-Lexend"
//             >
//               <td className="border px-4 py-2">{index + 1}</td>
//               <td className="border px-4 py-2">{request.name}</td>
//               <td className="border px-4 py-2">{request.email}</td>
//               <td className="border px-4 py-2">{request.phoneNumber}</td>
//               <td className="border px-4 py-2 ">
//                 <button onClick={() => handleOpenModal(request.email)}>
//                   <CiViewList className="text-5xl" />
//                 </button>
//               </td>
//               <td className="border px-6 py-2">{request.totalAmount} tk</td>
//               <td className="border px-6 py-2">
//                 <select className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50">
//                   <option className="p-2" value="pending">
//                     Pending
//                   </option>
//                   <option value="complete">Complete</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="modal modal-middle sm:modal-middle" open>
//             <div method="dialog" className="modal-box bg-slate-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
//               <div className="flex gap-3 items-center mx-auto mb-2">
//                 <h1 className="w-1/2">Account holder Name </h1>
//                 <input
//                   type="text"
//                   placeholder=""
//                   defaultValue={bankDetails[0]?.accountHolderName || ""}
//                   className="w-1/2 input input-bordered h-8"
//                 />
//               </div>
//               <div className="flex gap-3 items-center mx-auto mb-2">
//                 <h1 className="w-1/2">Account No.</h1>
//                 <input
//                   type="text"
//                   placeholder=""
//                   defaultValue={bankDetails[0]?.accountNo || ""}
//                   className="w-1/2 input input-bordered h-8"
//                 />
//               </div>
//               <div className="flex gap-3 items-center mx-auto mb-2">
//                 <h1 className="w-1/2">Routing Number</h1>
//                 <input
//                   type="text"
//                   placeholder=""
//                   defaultValue={bankDetails[0]?.routingNumber || ""}
//                   className="w-1/2 input input-bordered h-8"
//                 />
//               </div>
//               <div className="flex gap-3 items-center mx-auto mb-2">
//                 <h1 className="w-1/2">Bank Name</h1>
//                 <input
//                   type="text"
//                   placeholder=""
//                   defaultValue={bankDetails[0]?.bankName || ""}
//                   className="w-1/2 input input-bordered h-8"
//                 />
//               </div>
//               <div className="flex gap-3 items-center mx-auto mb-2">
//                 <h1 className="w-1/2">Bank Branch Name</h1>
//                 <input
//                   type="text"
//                   placeholder=""
//                   defaultValue={bankDetails[0]?.bankBranchName || ""}
//                   className="w-1/2 input input-bordered h-8"
//                 />
//               </div>
//               <div className="flex gap-3 items-center mx-auto mb-2">
//                 <h1 className="w-1/2">Phone Number</h1>
//                 <input
//                   type="text"
//                   placeholder=""
//                   defaultValue={bankDetails[0]?.phoneNumber || ""}
//                   className="w-1/2 input input-bordered h-8"
//                 />
//               </div>
//               <div className="modal-action">
//                 <button
//                   type="button"
//                   className="btn btn-error"
//                   onClick={handleCloseModal}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WithdrawRequest;

import React, { useState, useEffect } from "react";
import { CiViewList } from "react-icons/ci";

const WithdrawRequest = () => {
  const [showModal, setShowModal] = useState(false);
  const [withdrawalRequests, setWithdrawalRequests] = useState([]);

  const [bankDetails, setBankDetails] = useState({});

  useEffect(() => {
    // Fetch withdrawal request data from the API
    const fetchWithdrawalRequests = async () => {
      try {
        const response = await fetch(
          "https://cm-academy-test-server-production.up.railway.app/getWithdrawRequests"
        ); // Update the API endpoint as needed
        if (response.ok) {
          const data = await response.json();
          setWithdrawalRequests(data);
        } else {
          console.error("Error fetching withdrawal requests");
        }
      } catch (error) {
        console.error("Error fetching withdrawal requests:", error);
      }
    };

    fetchWithdrawalRequests();
  }, []); // Empty dependency array to run this effect only once on component mount

  const handleOpenModal = (InstructorEmail) => {
    // https://cm-academy-test-server-production.up.railway.app/bank-account-setup/instructorEmail
    fetch(
      `https://cm-academy-test-server-production.up.railway.app/bank-account-setup/${InstructorEmail}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBankDetails(data);
        console.log("data", data);
      });

    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <h1 className="text-2xl">Withdraw request by instructors to admin</h1>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100 text-[#1bbf72ee] font-bold text-lg divide-x-2">
            <th className="px-4 py-2">Sl</th>
            <th className="px-4 py-2">Instructor name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Bank details</th>
            <th className="px-4 py-2">Withdraw amount</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {withdrawalRequests.map((request, index) => (
            <tr
              key={index}
              className="text-center font-semibold text-sm font-Lexend"
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{request.name}</td>
              <td className="border px-4 py-2">{request.email}</td>
              <td className="border px-4 py-2">{request.phoneNumber}</td>
              <td className="border px-4 py-2 ">
                <button onClick={() => handleOpenModal(request.email)}>
                  <CiViewList className="text-5xl" />
                </button>
              </td>
              <td className="border px-6 py-2">{request.totalAmount} tk</td>
              <td className="border px-6 py-2">
                <select className="block w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50">
                  <option className="p-2" value="pending">
                    Pending
                  </option>
                  <option value="complete">Complete</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-middle sm:modal-middle" open>
            <div method="dialog" className="modal-box bg-slate-200 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
              <div className="flex gap-3 items-center mx-auto mb-2">
                <h1 className="w-1/2">Account holder Name </h1>
                <input
                  type="text"
                  placeholder=""
                  defaultValue={bankDetails[0]?.accountHolderName || ""}
                  className="w-1/2 input input-bordered h-8"
                />
              </div>
              <div className="flex gap-3 items-center mx-auto mb-2">
                <h1 className="w-1/2">Account No.</h1>
                <input
                  type="text"
                  placeholder=""
                  defaultValue={bankDetails[0]?.accountNo || ""}
                  className="w-1/2 input input-bordered h-8"
                />
              </div>
              <div className="flex gap-3 items-center mx-auto mb-2">
                <h1 className="w-1/2">Routing Number</h1>
                <input
                  type="text"
                  placeholder=""
                  defaultValue={bankDetails[0]?.routingNumber || ""}
                  className="w-1/2 input input-bordered h-8"
                />
              </div>
              <div className="flex gap-3 items-center mx-auto mb-2">
                <h1 className="w-1/2">Bank Name</h1>
                <input
                  type="text"
                  placeholder=""
                  defaultValue={bankDetails[0]?.bankName || ""}
                  className="w-1/2 input input-bordered h-8"
                />
              </div>
              <div className="flex gap-3 items-center mx-auto mb-2">
                <h1 className="w-1/2">Bank Branch Name</h1>
                <input
                  type="text"
                  placeholder=""
                  defaultValue={bankDetails[0]?.bankBranchName || ""}
                  className="w-1/2 input input-bordered h-8"
                />
              </div>
              <div className="flex gap-3 items-center mx-auto mb-2">
                <h1 className="w-1/2">Phone Number</h1>
                <input
                  type="text"
                  placeholder=""
                  defaultValue={bankDetails[0]?.phoneNumber || ""}
                  className="w-1/2 input input-bordered h-8"
                />
              </div>
              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-error"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawRequest;