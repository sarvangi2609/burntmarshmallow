
// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { CiUser } from 'react-icons/ci'
// import { Link } from 'react-router-dom'

// export default function UserDropDown() {
//   return (
//     <Menu as="div" className="relative inline-block text-left">
//       <div>
//         <MenuButton className="inline-flex w-full justify-center px-3 py-2" style={{border:"none",backgroundColor:"white"}}>
//           <Link to="/"><CiUser style={{height:"30px",width:"30px",color: "#2f3337"}} /></Link><span style={{display:"block"}}>Account</span>
//         </MenuButton>
//       </div>

//       <MenuItems
//         // transition
//         // className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
//       >
//         <div className="py-1">
//           <MenuItem>
//             <Link
//               to=""
//               className="block px-4 py-2 text-black-800"
//             >
//               <h4 className='text-black-800'>Sign In</h4>
//             </Link>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//             >
//               Duplicate
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//             >
//               Archive
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//             >
//               Move
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//             >
//               Share
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//             >
//               Add to favorites
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
//             >
//               Delete
//             </a>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   )
// }


// import Dropdown from 'react-bootstrap/Dropdown';



export default function UserDropDown() {
    return (
      <>

      <div className="nav-drop">
        <ul className="navdrop-ul">

            <li> <h4>Sign In</h4> 
                <div style={{padding:"10px 0px"}}>View your account and check your order status.</div>
            </li>

            {/* <Dropdown.Divider  /> */}

            <li> <h4>Create Account</h4> 
                <div style={{padding:"10px 0px"}}>Track orders, save items to lists and more!</div>
            </li>

            <hr />

            <li> <h4>My Account</h4> </li>
            <li> <h4>My Order</h4> </li>
            <li> <h4>Explore Pro</h4> </li>
            <li> <h4>Help</h4> </li>

        </ul>
      </div>

      </>
    );
  }
  
