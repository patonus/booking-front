// import React, { useState } from "react";
// import { useForm } from "react-hook-form";

// const formatDate = (date: Date) => date.toISOString().split("T")[0];
// const ReservationForm = () => {
//   const today = new Date();
//   const tomorrow = new Date(today);
//   tomorrow.setDate(today.getDate() + 1);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm({
//     defaultValues: {
//       start_date: formatDate(today),
//       end_date: formatDate(tomorrow),
//       count: 1,
//     },
//   });
//   const onSubmit = (data: unknown) => {
//     console.log(data);
//   };
//   const startDate = watch("start_date");
//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-md mx-auto p-4 card bg-base-100 shadow-xl mb-6"
//     >
//       <div className="mb-4">
//         <label className="form-control w-full">
//           <div className="label">
//             <span className="label-text">Number of Reservations</span>
//           </div>
//           <input
//             type="number"
//             className="input input-bordered w-full"
//             {...register("count", { required: true, min: 1 })}
//           />
//         </label>

//         {errors.count && (
//           <p className="text-red-500 text-sm">
//             This field is required and must be at least 1.
//           </p>
//         )}
//       </div>
//       <div className="mb-4">
//         <label className="form-control w-full">
//           <div className="label">
//             <span className="label-text">Start Date</span>
//           </div>
//           <input
//             type="date"
//             min={formatDate(today)}
//             {...register("start_date", {
//               required: true,
//               validate: {
//                 todayOrFutureDate: (value) =>
//                   new Date(value).setHours(0, 0, 0, 0) >=
//                     new Date().setHours(0, 0, 0, 0) ||
//                   "Start date cannot be in the past",
//               },
//             })}
//             className="input input-bordered w-full"
//           />
//         </label>

//         {errors.start_date && (
//           <p className="text-red-500 text-sm">Start Date is required.</p>
//         )}
//       </div>
//       <div className="mb-4">
//         <label className="form-control w-full">
//           <div className="label">
//             <span className="label-text"> End Date</span>
//           </div>
//           <input
//             type="date"
//             min={startDate}
//             {...register("end_date", {
//               required: true,
//               validate: {
//                 futureDate: (value) =>
//                   new Date(value) >= new Date() ||
//                   "End date must be in the future",
//                 afterStartDate: (value) =>
//                   new Date(value) > new Date(startDate) ||
//                   "End date must be later than start date",
//               },
//             })}
//             className="input input-bordered w-full"
//           />
//         </label>

//         {errors.end_date && (
//           <p className="text-red-500 text-sm">End Date is required.</p>
//         )}
//       </div>

//       <button type="submit" className="btn btn-primary w-full">
//         Create reservation
//       </button>
//     </form>
//   );
// };

// export default ReservationForm;
