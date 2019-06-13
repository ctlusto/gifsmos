import React, { Component } from 'react';
import './GenerateGifForm.css';
import ColorPicker from './ColorPicker';

class GenerateGifForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showColor: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputUpdate = this.handleInputUpdate.bind(this);
    this.renderColorPicker = this.renderColorPicker.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleGenerateGIF();
  }

  handleInputUpdate(evt) {
    if (evt.target.name === 'caption') {
      this.props.updateText(evt.target.value);
    }

    if (evt.target.name === 'name') {
      this.props.updateGIFFileName(evt.target.value);
    }

    if (evt.target.name === 'placement') {
      let values = evt.target.value.split('-');
      let positionObj = {
        textAlign: values[1],
        textBaseline: values[0]
      };

      this.props.updateTextPosition(positionObj);
    }
  }

  renderColorPicker() {
    this.setState(state => ({
      showColor: !state.showColor
    }));
  }

  render() {
    let colorPicker = (
      <ColorPicker
        updateTextColor={this.props.updateTextColor}
        textColor={this.props.fontColor}
      />
    );

    let colorPickerBg = { backgroundColor: this.props.fontColor };
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="GenerateGifForm-input"
          name="name"
          onChange={this.handleInputUpdate}
          placeholder="pick a name for your GIF"
          value={this.props.gifFileName}
        />
        <input
          className="GenerateGifForm-input"
          name="caption"
          onChange={this.handleInputUpdate}
          placeholder="add caption"
          value={this.props.caption}
        />
        <select
          type="select"
          className="GenerateGifForm-input"
          name="placement"
          onChange={this.handleInputUpdate}
          defaultValue={'DEFAULT'}
        >
          <option disabled value="DEFAULT">
            pick a text position
          </option>
          <option value="bottom-center">Bottom Center</option>
          <option value="top-center">Top Center</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="top-left">Top Left</option>
          <option value="bottom-right">Bottom Right</option>
          <option value="top-right"> Top Right</option>
        </select>
        <div
          style={colorPickerBg}
          onClick={this.renderColorPicker}
          className="colorPicker"
        >
          <p>pick a title color</p>
        </div>
        {this.state.showColor ? colorPicker : null}
        <button
          className="GenerateGifForm-button"
          aria-label="generate gif"
          type="submit"
        >
          Generate!
        </button>
      </form>
    );
  }
}

export default GenerateGifForm;
