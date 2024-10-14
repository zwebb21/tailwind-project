// ContentList.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContentList = () => {
  return (
<>
<div class='row mt-5 p-5' >

<div class="col-lg-4">

  <div class="card bg-dark text-white">
    <img class="card-img-top" src="/img/background1.jpg" alt="" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text">Last updated 3 mins ago</small>
    </div>
  </div>


</div>

                    <div class='col-lg-4'>

                    <div class="card bg-dark text-white">
    <img class="card-img-top" src="/img/background2.jpg" alt="" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text">Last updated 3 mins ago</small>
    </div>
  </div>
                    </div>

                                                                    <div class='col-lg-4'>

                                                                    <div class="card bg-dark text-white">
    <img class="card-img-top" src="/img/background3.jpg" alt="" />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-white">Last updated 3 mins ago</small>
    </div>
  </div>

                                                                    </div>

</div>

</>  





);
};

export default ContentList;
