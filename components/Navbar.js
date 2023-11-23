// import React from "react";
// import { BsSearch } from "react-icons/bs";
// import { ImCart } from "react-icons/im";
// import { FiMenu } from "react-icons/fi";

// const Navbar = () => {
//   return (
//     <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
//       <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
//         <h1 className="text-2xl uppercase font-bold">AllôGroup</h1>
//         <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
//           <li className="navbarLi">Acceuil</li>
//           <li className="navbarLi">A propos</li>
//           <li className="navbarLi">Qu'en disent-ils</li>
//           <li className="navbarLi">Contact</li>
//           <li className="navbarLi">Boutique</li>
//         </ul>
//         <div className="hidden lg:inline-flex gap-8 items-center">
//           {/* <BsSearch className="text-xl hover:text-hoverColor" /> */}
//           <div className="relative">
//             <ImCart className="text-xl" />
//             <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
//               0
//             </span>
//           </div>
//           <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
//             Tableau de Bord
//           </button>
//         </div>
//         <div className="inline-flex lg:hidden">
//           <FiMenu className="text-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




// import React from "react";
// import { BsSearch } from "react-icons/bs";
// import { ImCart } from "react-icons/im";
// import { FiMenu } from "react-icons/fi";

// const Navbar = () => {
//   return (
//     <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
//       <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
//         <h1 className="text-2xl uppercase font-bold">AllôGroup</h1>
//         <ul className="hidden lg:inline-flex items-center gap-8 uppercase text-sm font-semibold">
//           <li className="navbarLi">Acceuil</li>
//           <li className="navbarLi">A propos</li>
//           <li className="navbarLi">Qu'en disent-ils</li>
//           <li className="navbarLi">Contact</li>
//           <li className="navbarLi">Boutique</li>
//           <div className="relative">
//             <ImCart className="text-xl" />
//             <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
//               0
//             </span>
//           </div>
//         </ul>
//         <div className="hidden lg:inline-flex gap-8 items-center">
//           {/* <BsSearch className="text-xl hover:text-hoverColor" /> */}
//           <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
//             Tableau de Bord
//           </button>
//         </div>
//         <div className="inline-flex lg:hidden">
//           <FiMenu className="text-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;





// import React from "react";
// import { BsSearch } from "react-icons/bs";
// import { ImCart } from "react-icons/im";
// import { FiMenu } from "react-icons/fi";

// const Navbar = () => {
//   return (
//     <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
//       <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
//         <h1 className="text-2xl font-bold">AllôGroup</h1>
//         <ul className="hidden lg:inline-flex items-center gap-8 text-sm font-semibold">
//           <li className="navbarLi">Acceuil</li>
//           <li className="navbarLi">A propos</li>
//           <li className="navbarLi">Qu'en disent-ils</li>
//           <li className="navbarLi">Contact</li>
//           <li className="navbarLi">Boutique</li>
//           <div className="relative">
//             <ImCart className="text-xl" />
//             <span className="w-4 h-4 bg-yellow-600 text-white rounded-full absolute left-0 -bottom-2 text-xs flex items-center justify-center">
//               0
//             </span>
//           </div>
//         </ul>
//         <div className="hidden lg:inline-flex gap-8 items-center">
//           {/* <BsSearch className="text-xl hover:text-hoverColor" /> */}
//           <button className="w-48 h-14 bg-white text-black uppercase text-sm font-semibold rounded-md hover:bg-darkRed hover:text-white duration-300">
//             Tableau de Bord
//           </button>
//         </div>
//         <div className="inline-flex lg:hidden">
//           <FiMenu className="text-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// Dans votre fichier components/Navbar.js

// Dans votre fichier components/Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/">
          <a className="logo">Grilli</a>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/menu">
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


