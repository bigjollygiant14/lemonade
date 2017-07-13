import React from 'react'

export class StyleGuide extends React.Component {
  constructor (props, context) {
    super(props, context)

    this.state = {}
  }

  render () {
    return (
      <div className="style-guide">
        <section id="headers" className="style-guide__section">
          <h1>H1 Text</h1>
          <h2>H2 Text</h2>
          <h3>H3 Text</h3>
          <h4>H4 Text</h4>
          <h5>H5 Text</h5>
          <h6>H6 Text</h6>
          <p>P text</p>
          <div>Div Text</div>
        </section>

        <section id="forms" className="style-guide__section">
          <form className="form">
            <div className="form__form-group">
              <input className="form__input" id="formInput" type="text" placeholder="Input Placeholder"/>
              <label className="form__label" htmlFor="formInput">Label</label>
            </div>
          </form>
        </section>
      </div>
    )
  }
}

export default StyleGuide
