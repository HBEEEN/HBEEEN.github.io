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

class ServicesPage extends React.Component {

  componentDidMount() {
    this.props.handleChangeURL(window.location.pathname);
  }

  render() {
    return (
      <div className="has-background-white">
        {space_v}
        <div className="columns">
          {space_h_2}
          <div className="column">
            <p className="is-size-4 theme">Our Services</p>
          </div>
          {space_h_2}
        </div>
        <div className="columns">
          {space_h_2}
          <div className="column">
            <div className="content is-small">
              <p className="is-size-6 theme">Service 1</p>
              <p className="is-size-6 has-text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis a condimentum vitae sapien pellentesque. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.
                Massa id neque aliquam vestibulum morbi blandit.
              </p>
            </div>
          </div>
          <div className="column is-2">
            <figure class="image is-1by1">
              <img src="https://bulma.io/images/placeholders/256x256.png" alt="placeholder" />
            </figure>
          </div>
          {space_h_2}
        </div>
        <div className="columns">
          {space_h_2}
          <div className="column">
            <div className="content is-small">
              <p className="is-size-6 theme">Service 2</p>
              <p className="is-size-6 has-text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis a condimentum vitae sapien pellentesque. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.
                Massa id neque aliquam vestibulum morbi blandit.
              </p>
            </div>
          </div>
          <div className="column is-2">
            <figure class="image is-1by1">
              <img src="https://bulma.io/images/placeholders/256x256.png" alt="placeholder" />
            </figure>
          </div>
          {space_h_2}
        </div>
        <div className="columns">
          {space_h_2}
          <div className="column">
            <div className="content is-small">
              <p className="is-size-6 theme">Service 3</p>
              <p className="is-size-6 has-text-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis a condimentum vitae sapien pellentesque. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.
                Massa id neque aliquam vestibulum morbi blandit.
              </p>
            </div>
          </div>
          <div className="column is-2">
            <figure class="image is-1by1">
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

export default ServicesPage;