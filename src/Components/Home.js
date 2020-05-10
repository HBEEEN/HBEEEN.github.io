import React from 'react';
import './components.css';

import Img1 from "./Dipsy.jpg";
import Img2 from "./Lala.jpg";
import Img3 from "./Tinkywinky.jpg";
import Img4 from "./cover.jpg";

// const coverImg = {
//   backgroundImage: 'url(' + Cover + ')',
// };

const space_v = (
  <div className="columns">
    <div className="column"></div>
  </div>
);

const space_h_2 = (
  <div className="column is-2"></div>
);

// const space_h_1 = (
//   <div className="column is-1"></div>
// );


const section_1 = (
  <div class="hero has-background-warning is-medium" >
    <div class="hero-body">
      <div class="container">
        <div className="columns">
          <div className="column">
            <h1 class="theme text-title">
              Your Problem is Our Concern
            </h1>
            <h2 class="theme text-subtitle">
              Let find solution with us
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="column">

          </div>
        </div>

      </div>
    </div>
  </div>
);

const section_2 = (
  <div className="has-background-white">
    {space_v}
    {space_v}
    <div className="columns">
      {space_h_2}
      <div className="column">
        <div className="content is-small">
          <p className="is-size-4 theme">Expertise Services For Your Need</p>
          <p className="is-size-6 has-text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Venenatis a condimentum vitae sapien pellentesque. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. 
          Massa id neque aliquam vestibulum morbi blandit. Cursus turpis massa tincidunt dui. Enim sit amet venenatis urna cursus. 
          Diam in arcu cursus euismod quis viverra nibh cras. Cras tincidunt lobortis feugiat vivamus at augue. 
          Ut faucibus pulvinar elementum integer enim. Et malesuada fames ac turpis egestas integer eget. 
          Gravida in fermentum et sollicitudin ac orci. Ante metus dictum at tempor commodo. 
          </p>
        </div>
      </div>
      <div className="column">
        <figure class="image is-4by3">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="placeholder"/>
        </figure>
      </div>
      {space_h_2}
    </div>
    {space_v}
    <div className="columns">
      {space_h_2}
      <div className="column">
        <figure class="image is-3by2">
          <img src="https://bulma.io/images/placeholders/256x256.png" alt="placeholder"/>
        </figure>
      </div>
      <div className="column">
        <div className="content is-small">
          <p className="is-size-4 theme">Same but on other side</p>
          <p className="is-size-6 has-text-grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Venenatis a condimentum vitae sapien pellentesque. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. 
          Massa id neque aliquam vestibulum morbi blandit. Cursus turpis massa tincidunt dui. Enim sit amet venenatis urna cursus. 
          Diam in arcu cursus euismod quis viverra nibh cras. Cras tincidunt lobortis feugiat vivamus at augue. 
          </p>
        </div>
      </div>
      {space_h_2}
    </div>
    {space_v}
    {space_v}
  </div>
);

const section_3 = (
  <div className="has-background-white-ter">
    {space_v}
    <div className="columns">
      <div className="column has-text-centered">
        <span className="is-size-3 theme">Explore Our Services</span>
      </div>
    </div>
    <div className="columns">
      {space_h_2}
      <div className="column">
        <div className="tile is-ancestor card-padding">
          <div class="tile is-parent">
            <article class="tile is-child card">
              <div class="card-content">
                <p class="subtitle">Facilities Management</p>
              </div>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={Img1} alt="Placeholder" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Facilities thing blah blah blah
                </div>
                <div class="content">
                  <a className="has-text-info" href="/Services">Learn More</a>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child card">
              <div class="card-content">
                <p class="subtitle">Test Equipment</p>
              </div>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={Img2} alt="Placeholder" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  Test thing blah blah blah
                </div>
                <div class="content">
                  <a className="has-text-info" href="/Services">Learn More</a>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child card">
              <div class="card-content">
                <p class="subtitle">Consultant</p>
              </div>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={Img3} alt="Placeholder" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  something blah blah blah
                </div>
                <div class="content">
                  <a className="has-text-info" href="/Services">Learn More</a>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child card">
              <div class="card-content">
                <p class="subtitle">More</p>
              </div>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img src={Img4} alt="Placeholder" />
                </figure>
              </div>
              <div class="card-content">
                <div class="content">
                  something blah blah blah
                </div>
                <div class="content">
                  <a className="has-text-info" href="/Services">Learn More</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      {space_h_2}
    </div>
    {space_v}
  </div>
);

const section_4 = (
  <section class="hero has-background-white-ter">
  <div class="hero-body">
    <div class="container">

    </div>
  </div>
</section>
);

class Home extends React.Component {

  render() {
    return (
      <div>
        {section_1}
        {section_2}
        {section_3}
        {section_4}

      </div>
    )
  }
}

export default Home;