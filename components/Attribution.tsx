import React from "react"

class Attribution extends React.Component {
  render() {
    return (
      <div style={{display: 'flex', paddingBottom: '20px'}}>
        <div style={{flex: 1}}>
          <p>Get the <a href="https://github.com/calvin-fisher/taco" target="_blank">source code</a>.</p>
        </div>
      </div>
    );
  }
}

export default Attribution