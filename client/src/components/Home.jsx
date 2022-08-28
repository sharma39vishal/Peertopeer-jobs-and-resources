import React from 'react'
import Homejobs from './Homejobs';
import Homeresources from './Homeresources';

export default function Home() {
  return (
    <div className='container my-2'>
      <div id="carouselExampleInterval " class="carousel slide rounded" data-bs-ride="carousel">
  <div class="carousel-inner rounded-3">
    <div class="carousel-item active" data-bs-interval="4000">
      <img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/62ecfbc199ef8_1280X_500_Home_banner.png?d=1266x494" class="d-block w-100" alt="p1"/>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/62f216f6757fd_Overall_homepage_banner_1280_x_500.jpeg?d=1266x494" class="d-block w-100" alt="p2"/>
    </div>
    <div class="carousel-item"  data-bs-interval="4000">
      <img src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/630778e831334_Amazon-Smart-launch-kit-rotating.jpeg?d=1266x494" class="d-block w-100" alt="p3"/>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>
<div className='container'>

<div class="alert alert-warning my-2 mx-4">
  <h2><img src='https://img.icons8.com/external-flat-02-chattapat-/344/external-resources-business-management-flat-02-chattapat-.png' width={"50"} /> Some Resources</h2>
</div>
{/* resources */}
<Homeresources/>
<a href='/resources' style={{paddingLeft:"70%"}}>many more...</a>
<br/>
<br/>



<div class="alert alert-danger my-2 mx-4">
  <h2><img src='https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-jobs-job-search-flaticons-lineal-color-flat-icons-10.png' width={"50"} />Some Jobs</h2>
</div>

{/* jobs */}
<Homejobs/>

<a href='/jobs' style={{paddingLeft:"70%"}}>many more...</a>
<br/>
<br/>
<br/>

</div>

    </div>
  )
}
