import React from 'react';

class TopBar extends React.Component {
    render() {
        return <header className="mdc-top-app-bar">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" style={{background: "#26a69a"}}>
              <span className="mdc-top-app-bar__title">TinyClipboard 📋</span>
            </section>
          </div>
        </header>
      }
}

export default TopBar;