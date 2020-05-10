import React from 'react';
import './components.css';

const space_v = (
  <div className="columns">
    <div className="column"></div>
  </div>
);

const space_h_2 = (
  <div className="column is-2"></div>
);

class AboutPage extends React.Component {

  componentDidMount() {
    this.props.handleChangeURL(window.location.pathname);
  }

  render() {
    return (
      <div className="has-background-white">
        {space_v}
        {space_v}
        <div className="columns">
          {space_h_2}
          <div className="column">
            <div className="content is-small">
              <p className="is-size-4 theme">Who are we</p>
              <p className="is-size-6 has-text-grey">
                (text holder) Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis a condimentum vitae sapien pellentesque. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.
                Massa id neque aliquam vestibulum morbi blandit. Cursus turpis massa tincidunt dui. Enim sit amet venenatis urna cursus.
                Diam in arcu cursus euismod quis viverra nibh cras. Cras tincidunt lobortis feugiat vivamus at augue.
                Ut faucibus pulvinar elementum integer enim.
              </p>
            </div>
          </div>
          {space_h_2}
        </div>
        {space_v}
        <div className="columns">
          {space_h_2}
          <div className="column">
            <div className="content is-small">
              <p className="is-size-4 theme">Why choose us</p>
              <p className="is-size-6 has-text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis a condimentum vitae sapien pellentesque. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.
                Massa id neque aliquam vestibulum morbi blandit. Cursus turpis massa tincidunt dui. Enim sit amet venenatis urna cursus.
                Diam in arcu cursus euismod quis viverra nibh cras. Cras tincidunt lobortis feugiat vivamus at augue.
              </p>
            </div>
          </div>
          <div className="column">
            <figure class="image is-3by2">
              <img src="https://bulma.io/images/placeholders/256x256.png" alt="placeholder" />
            </figure>
          </div>
          {space_h_2}
        </div>
        {space_v}
        {space_v}
      </div>
    )
  }
}

export default AboutPage;