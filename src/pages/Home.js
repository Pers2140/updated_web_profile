// Home.js
import React from 'react';
import Projects from '../components/Projects';

function Home({ darkMode, toggleDarkMode }) {
  return (
    <>
      <div className={`container-fluid ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="m-4 p-4 row ">
          <div className="col-md-12 ">
            <h2 className='text-center '>Hey! I'm Darius dfdand I 💓</h2>
          </div>
        </div>
      </div>
      <div className={`container rounded  ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="m-4 p-4 row ">
          <div className="col-md-4 ">
            <img class="img-fluid" src='https://webprofile.d39ose37ksgy0r.amplifyapp.com/Images/gif_logo.gif' alt=''></img>
          </div>
          <div className="col-md-4 ">
            
            <a target="_blank" rel="noreferrer" href="https://docs.google.com/document/d/1NAZlWzrKhIncWEyIT6DWgcUsOteur_7v_I9aa6qfSRs/edit">
            <h2 className='text-center link-underline-opacity-0 '>Resume</h2>
            <img class="img-fluid" src='https://webprofile.d39ose37ksgy0r.amplifyapp.com/Images/resume.svg' alt=''></img>
            </a>
          </div>
          <div className="col-md-4 ">
            <h2 className='text-center'>Current Projects</h2>
            <Projects />
          </div>
        </div>

      </div>
      <div className={`container rounded  ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className='row'>
          <div class="col-12">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active p-4 " id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.
              </div>
              <div class="tab-pane fade p-4" id="list-tasties" role="tabpanel" aria-labelledby="list-tasties-list">
                teasties
              </div>
              <div class="tab-pane fade p-4" id="list-bbq" role="tabpanel" aria-labelledby="list-bbq-list">
                bbq
              </div>
              <div class="tab-pane fade p-4" id="list-rumdone" role="tabpanel" aria-labelledby="list-rumdone-list">
                Rumdone
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
