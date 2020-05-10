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

class ContactPage extends React.Component {

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
          <div className="column is-3">
            <figure class="image is-1by1">
              <img src="https://bulma.io/images/placeholders/256x256.png" alt="placeholder" />
            </figure>
          </div>
          <div className="column">
            <div className="content is-small">
              <p className="is-size-4 theme">Connecting with us</p>
              <div className="is-size-6 has-text-grey">
              <p>
                Address :
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Venenatis a condimentum vitae sapien pellentesque.
              </p>
              <p>
                Phone :
                081-XXX-XXXX
              </p>
              <p>
                Email :
                XXXXX@gmail.com
              </p>
              </div>             
            </div>
          </div>
          {space_h_2}
        </div>
        {space_v}
        {space_v}
        {space_v}
        {space_v}
        {space_v}
        {space_v}
      </div>
    )
  }
}

export default ContactPage;