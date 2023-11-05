

// import React, { useState } from 'react';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="flex justify-center items-center  bg-gray-100  " >
//       <div className="bg-white p-10 rounded shadow-lg w-96">
//         <h2 className="text-3xl font-semibold mb-5 text-center text-gray-800">Register</h2>
//         <form onSubmit={handleSubmit}>
          
//           <div className="mb-2">
//             <label className="block text-sm text-gray-600 mb-2 font-bold">Name</label>
//             <input
//               className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500
//                focus:outline-none focus:shadow-outline"
//               type="text"
//               placeholder="Your Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm text-gray-600 mb-2 font-bold">Email</label>
//             <input
//               className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
//               type="email"
//               placeholder="Your Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm text-gray-600 mb-2 font-bold">Phone Number</label>
//             <input
//               className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
//               type="tel"
//               placeholder="Your Phone Number"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm text-gray-600 mb-2 font-bold">Password</label>
//             <input
//               className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
//               type="password"
//               placeholder="Your Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm text-gray-600 mb-2 font-bold">Confirm Password</label>
//             <input
//               className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
//               type="password"
//               placeholder="Confirm Password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full focus:outline-none focus:shadow-outline"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 ">
      <div className="bg-white p-10  rounded shadow-lg w-96 lg:w-2/3 mt-5">
        <h2 className="text-3xl font-semibold mb-5 text-center text-gray-800">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex items-center mb-2">
            <label className="text-sm text-gray-600 font-bold w-24">Name</label>
            <input
              className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="text-sm text-gray-600 font-bold w-24">Email</label>
            <input
              className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="text-sm text-gray-600 font-bold w-24">Phone Number</label>
            <input
              className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Your Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="text-sm text-gray-600 font-bold w-24">Password</label>
            <input
              className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Your Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mb-2">
            <label className="text-sm text-gray-600 font-bold w-24">Confirm Password</label>
            <input
              className="w-full px-4 py-3 rounded-full text-gray-700 bg-gray-100 placeholder-gray-500 focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-full focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
