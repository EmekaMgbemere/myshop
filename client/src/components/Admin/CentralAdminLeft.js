import { useReducer, React } from "react";
import {Link} from 'react-router-dom';


const initialState = { 
    centraladmin: 'centraladmin', 
    shops: 'shops', 
    products: 'products',
    users: 'users',
    specialoffers: 'specialoffers',
    customertestimonials: 'customertestimonials',
    featuredbrands: 'featuredbrands',
    blog: 'blog'
   };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "products":
          return { ...state, products: action.payload };
      case "users":
        return { ...state, users: action.payload };
      case "shops":
        return { ...state, shops: action.payload };
      case "specialoffers":
        return { ...state, specialoffers: action.payload };
      case "customertestimonials":
        return { ...state, customertestimonials: action.payload };
      case "featuredbrands":
        return { ...state, featuredbrands: action.payload };
      case "blog":
        return { ...state, blog: action.payload };
      default:
        return state;
    }
  };


export default function CentralAdminLeft() {

const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className=''>
    <div className='centraladminleft clearlink'>
      
        <div className="">
          <button class="btn btn-outline-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">MENU</button>
        </div>
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header" >
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdroped with scrolling</h5>
              <button type="button" class="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        <div class="offcanvas-body" >
            <Link 
                  value={state.products}
                  name='product link'
                  onClick={(e) =>
                  dispatch({ type: "products", payload: e.target.value })
                  }
                  to={'/products'}
              >
                <div className='centraladminleftLink' >
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                      <div className='mt-1 mx-2'>
                            Products
                      </div>
                </div>
            </Link>   
            <Link 
                  value={state.users}
                  name="users"
                  onClick={(e) =>
                    dispatch({ type: "users", payload: e.target.value })
                  }
                  to={'/users'}
                >
          <div className='centraladminleftLink'>
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
              </div>
                <div className='mt-1 mx-2'>
                      Users
                </div>
          </div>
            </Link>
            <Link 
                value={state.shops}
                name="shops"
                onClick={(e) =>
                  dispatch({ type: "shops", payload: e.target.value })
                }
                to={'/shops'}
            >
          <div className='centraladminleftLink'>
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
                      <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
              </div>
                    
              <div className='mt-1 mx-2'>
                      Shops
                </div>
          </div>
            </Link>
            <Link 
                  value={state.specialoffers}
                  name="specialoffers"
                  onClick={(e) =>
                    dispatch({ type: "specialoffers", payload: e.target.value })
                  }
                  to={'/specialoffers'}
              >
                <div className='centraladminleftLink'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                    </div>
                    <div className='mt-1 mx-2'>
                            Special Offers
                      </div>
                </div>
            </Link>
            <Link 
                      value={state.customertestimonials}
                      name="customertestimonials"
                      onClick={(e) =>
                        dispatch({ type: "customertestimonials", payload: e.target.value })
                      }
                      to={'/customertestimonials'}
                  >
                <div className='centraladminleftLink'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                        </svg>
                    </div>
                    <div className='mt-1 mx-2'>
                            Customer Testimonials
                      </div>
                </div>
            </Link>
            <Link 
                          value={state.featuredbrands}
                          name="featuredbrands"
                          onClick={(e) =>
                            dispatch({ type: "featuredbrands", payload: e.target.value })
                          }
                          to={'/featuredbrands'}
                      >
            <div className='centraladminleftLink'>
                <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                      </svg>
                </div>
                <div className='mt-1 mx-2'>
                      
                        Featured Brands
                  </div>
            </div>
            </Link>
            <Link 
                          value={state.blog}
                          name="blog"
                          onClick={(e) =>
                            dispatch({ type: "blog", payload: e.target.value })
                          }
                          to={'/blog'}
                      >
            <div className='centraladminleftLink'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>

                </div>
                <div className='mt-1 mx-2'>
                      
                        Blog
                  </div>
            </div>
          </Link>
        </div>
        </div>
</div>
   </div>
  )
}







// import { useReducer, React } from "react";
// import {Link} from 'react-router-dom';


// const initialState = { 
//     centraladmin: 'centraladmin', 
//     shops: 'shops', 
//     products: 'products',
//     users: 'users',
//     specialoffers: 'specialoffers',
//     customertestimonials: 'customertestimonials',
//     featuredbrands: 'featuredbrands',
//     blog: 'blog'
//    };
  
//   const reducer = (state, action) => {
//     switch (action.type) {
//       case "products":
//           return { ...state, products: action.payload };
//       case "users":
//         return { ...state, users: action.payload };
//       case "shops":
//         return { ...state, shops: action.payload };
//       case "specialoffers":
//         return { ...state, specialoffers: action.payload };
//       case "customertestimonials":
//         return { ...state, customertestimonials: action.payload };
//       case "featuredbrands":
//         return { ...state, featuredbrands: action.payload };
//       case "blog":
//         return { ...state, blog: action.payload };
//       default:
//         return state;
//     }
//   };


// export default function CentralAdminLeft() {

// const [state, dispatch] = useReducer(reducer, initialState);


//   return (
//     <div className='centraladminleft clearlink'>
//             <Link 
//                   value={state.products}
//                   name='product link'
//                   onClick={(e) =>
//                   dispatch({ type: "products", payload: e.target.value })
//                   }
//                   to={'/products'}
//               >
//                 <div className='centraladminleftLink' >
//                             <div className=''>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
//                                   <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
//                                 </svg>
//                             </div>
//                       <div className='mt-1 mx-2'>
//                             Products
//                       </div>
//                 </div>
//             </Link>   
//             <Link 
//                   value={state.users}
//                   name="users"
//                   onClick={(e) =>
//                     dispatch({ type: "users", payload: e.target.value })
//                   }
//                   to={'/users'}
//                 >
//           <div className='centraladminleftLink'>
//               <div>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
//                     <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
//                   </svg>
//               </div>
//                 <div className='mt-1 mx-2'>
//                       Users
//                 </div>
//           </div>
//             </Link>
//             <Link 
//                 value={state.shops}
//                 name="shops"
//                 onClick={(e) =>
//                   dispatch({ type: "shops", payload: e.target.value })
//                 }
//                 to={'/shops'}
//             >
//           <div className='centraladminleftLink'>
//               <div>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
//                       <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
//                   </svg>
//               </div>
                    
//               <div className='mt-1 mx-2'>
//                       Shops
//                 </div>
//           </div>
//             </Link>
//             <Link 
//                   value={state.specialoffers}
//                   name="specialoffers"
//                   onClick={(e) =>
//                     dispatch({ type: "specialoffers", payload: e.target.value })
//                   }
//                   to={'/specialoffers'}
//               >
//                 <div className='centraladminleftLink'>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
//                           <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
//                         </svg>
//                     </div>
//                     <div className='mt-1 mx-2'>
//                             Special Offers
//                       </div>
//                 </div>
//           </Link>
//           <Link 
//                     value={state.customertestimonials}
//                     name="customertestimonials"
//                     onClick={(e) =>
//                       dispatch({ type: "customertestimonials", payload: e.target.value })
//                     }
//                     to={'/customertestimonials'}
//                 >
//               <div className='centraladminleftLink'>
//                   <div>
//                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
//                       </svg>
//                   </div>
//                   <div className='mt-1 mx-2'>
//                           Customer Testimonials
//                     </div>
//               </div>
//           </Link>
//           <Link 
//                         value={state.featuredbrands}
//                         name="featuredbrands"
//                         onClick={(e) =>
//                           dispatch({ type: "featuredbrands", payload: e.target.value })
//                         }
//                         to={'/featuredbrands'}
//                     >
//           <div className='centraladminleftLink'>
//               <div>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
//                       <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
//                     </svg>
//               </div>
//               <div className='mt-1 mx-2'>
                    
//                       Featured Brands
//                 </div>
//           </div>
//           </Link>
//           <Link 
//                         value={state.blog}
//                         name="blog"
//                         onClick={(e) =>
//                           dispatch({ type: "blog", payload: e.target.value })
//                         }
//                         to={'/blog'}
//                     >
//           <div className='centraladminleftLink'>
//               <div>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{ width: '25px', height: '25px' }}>
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
//                   </svg>

//               </div>
//               <div className='mt-1 mx-2'>
                    
//                       Blog
//                 </div>
//           </div>
//         </Link>
//    </div>
//   )
// }




