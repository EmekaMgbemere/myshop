import React, { useState, useEffect } from 'react';
import navicon from "../../components/images/4.png"
// import user from "../../components/images/user.svg"


function Nav(){
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [top, setTop] = useState(0);

      
    useEffect(() => {
        
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          setTop(0);
        } else {
          setTop(-120); 
        }
        setPrevScrollpos(currentScrollPos);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollpos]);
  
    // const navbarStyle = {
    //   backgroundColor: '#333',
    //   position: 'fixed',
    //   top: `${top}px`,
    //   width: '100%',
    //   display: 'block',
    //   transition: 'top 0.3s',
    // };

  

    return(
        <div id="navbar" >
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                        <a class="navbar-brand" href="/home">
                            <img src={navicon} alt='navicon' style={{width:"80px", height:"80px"}} class="d-inline-block align-text-top "/>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        {/* <div class="collapse navbar-collapse d-inline-block align-text-top" id="navbarText">
                            <input
                                className="search-box"
                                placeholder="Enter The Title Of Movie"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                />
                            <div className="card-group">
                                {
                                  Data.length && Data.filter((movie) => {
                                  if (query === "") {
                                    return true; 
                                  } else if (movie.Name.toLowerCase().includes(query.toLowerCase())) {
                                    return true; 
                                  } else {
                                    return false;
                                  }
                                }).map((movie) => (
                                <div className="card" key={movie.id}>
                                    <h3>{movie.Name}</h3>
                                    <p>{movie.Director}</p>
                                    <p>{movie.genre}</p>
                                    <p>{movie.ReleaseDate}</p>
                                </div>
                                ))}
                            </div>
                        </div> */}                     
                </div>
                {/* <div className=''>
                    <div class="containerbody">
                      <input class="main"/>
                      <span class="searchicon"></span>
                      <div class="icon-holder">
                          <div class="icon" id="parking">
                          <div class="tooltip">Parking</div>
                          </div>
                          <div class="icon" id="gas">
                          <div class="base"></div>
                          <div class="tooltip">Gas</div>
                          </div>
                          <div class="icon" id="eat">
                          <div class="fork"></div>
                          <div class="knife"></div>
                          <div class="tooltip">Food</div>
                          </div>
                          <div class="icon" id="coffee">
                          <div class="cup"></div>
                          <div class="tooltip">Coffee</div>
                          </div>
                          <div class="icon" id="misc">
                          <div class="dots"></div>
                          <div class="tooltip">Misc</div>
                          </div>
                      </div>
                    </div>
                </div>
                <div class="collapse navbar-collapse d-inline-block align-text-top" id="navbarText">
                    <div class="btn-group">
                        <div class= "dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339c-1.974 0-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601" clip-rule="evenodd"/></svg>                       
                        </div>
                          <ul class="dropdown-menu dropdown-menu-lg-end">
                              <li><button class="dropdown-item" type="button">Login</button></li>
                              <li><button class="dropdown-item" type="button">Signup</button></li>
                          </ul>
                    </div>
                </div> 
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 36 36"><path fill="currentColor" d="M25 12V9.05a7 7 0 1 0-14 0v7a1 1 0 0 0 2 0V14h8v-2h-8V9.05a5 5 0 1 1 10 0V16a1 1 0 1 0 2 0v-2h5v18H6V14h3v-2H4v20.09A1.91 1.91 0 0 0 5.91 34h24.18A1.91 1.91 0 0 0 32 32.09V12Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                </div> */}


<div>
    <nav class="navbar bg-body-tertiary fixed-top">
      <div class="container-fluid">
          <a class="navbar-brand" href="/home">
              <img src={navicon} alt='navicon' style={{width:"80px", height:"80px"}} class="d-inline-block align-text-top "/>
          </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 36 36"><path fill="currentColor" d="M25 12V9.05a7 7 0 1 0-14 0v7a1 1 0 0 0 2 0V14h8v-2h-8V9.05a5 5 0 1 1 10 0V16a1 1 0 1 0 2 0v-2h5v18H6V14h3v-2H4v20.09A1.91 1.91 0 0 0 5.91 34h24.18A1.91 1.91 0 0 0 32 32.09V12Z" class="clr-i-outline clr-i-outline-path-1"/><path fill="none" d="M0 0h36v36H0z"/></svg></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339c-1.974 0-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601" clip-rule="evenodd"/></svg>                       
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
</div>
            </nav>
        </div>
    )
}

export default Nav;
