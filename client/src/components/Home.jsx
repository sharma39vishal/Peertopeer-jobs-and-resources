import React from 'react'
import Homejobs from './Homejobs';
import Homeresources from './Homeresources';

export default function Home() {
  return (
    <div className='container my-2'>
      <div id="carouselExampleInterval " class="carousel slide rounded" data-bs-ride="carousel">
  <div class="carousel-inner rounded-3">
    <div class="carousel-item active" data-bs-interval="4000">
      <img src="https://miro.medium.com/max/800/1*ORXgIa-wjtulBmdiXlmDzA.png" class="d-block w-100" alt="p1"/>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="https://media.istockphoto.com/vectors/online-education-abstract-concept-vector-illustrations-vector-id1311607651?k=20&m=1311607651&s=612x612&w=0&h=CZDQg3zAH6-ZmRR5Kbl1-F1QIXsVGZJFEf5APQOc1VE=" class="d-block w-100" alt="p2"/>
    </div>
    <div class="carousel-item"  data-bs-interval="4000">
      <img src="https://4.bp.blogspot.com/-k-MfKyBW8Bk/T2JqHu0t5uI/AAAAAAAAAkQ/-YHfsinUD_Y/s1600/GSoC+logo.png" class="d-block w-100" alt="p3"/>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>
<div className='container'>

<div class="alert alert-warning my-2 mx-4">
  <h2>Some Resources</h2>
</div>
{/* resources */}
<Homeresources/>
<a href='/resources' style={{paddingLeft:"70%"}}>many more...</a>
<br/>
<br/>



<div class="alert alert-danger my-2 mx-4">
  <h2>Some Jobs</h2>
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
