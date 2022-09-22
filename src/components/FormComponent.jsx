import React, { Component } from 'react';
import MathJax from "mathjax3-react";

export class FormComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         commands : '',
         topic: 'React',
         mcq: false,
         records3: '<img alt="Italian Trulli" class="question" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyoAAAAdCAIAAADKPA8YAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgd0lEQVR4nO2deZxO1R/HL5UotGgZJCIlNRRalGhRKqUkSkgUpUhRtqTdksq+DlKW1klFCROKScpeMSVhMgwtqsGMGtPv/Xq+OZ3f3Z4zz51N3c8f83rmPuee5Xu+y+d77znnKfbXX39ZIUKECBEiRIgQIQoKxUL6FSJEiBAhQoQIUZAI6VeIECFChAgRIkSBIqRfIUKECBEiRIgQBYqQfoUIESJEiBAhQhQoQvoVIkSIECFChAhRoHChX7t3705PTy9RokSVKlUOO+wwk1q+/PLLfv36zZ49Ox96mC/46aefdu3adeSRRx577LHlypUzv3H9+vWMdN++fZmZmcOHD69bt25edSn/ag6Op556avny5fStevXqEydOLOzuhChoJCcnjxs3LiUl5c8//7zuuusGDRpU2D0q0vhXiss8LqSlpe3du7dSpUqlSpUKXqzoIHSDCsT6hIQERJGVlTVv3ryjjz46eJ0ow8iRI5OSkojOJUuWnDFjxumnnx71roLnHomJicOGDXv00UevvfbagFX9Q7/WrFmDQN9///1t27aVLVsWY0OmHTt2HDp0KDRF3dCnT58hQ4Y4K0JSGzduDNib/AaDHTNmzIgRIzZv3hwXF7d9+3auwMA6d+7sOihXrF279sILL9y/f/9HH310xRVX5GH38q/mgKBL991335QpU+jeZ599VtjdCVGgePHFF/v37z9t2rQKFSrcdttt8fHxc+bMKexOFV38y8RlGBcEROIHHnhAwid/27RpQybJXbEVKxh8//33rVq1glBCrfxLhm5Qx8yZM5k4Pvz222/B527nzp2XXnppzZo1H3/88bfeemvgwIErV66sU6eOXqaIcI/69euvWrWKDsMcAlb1N/2CjlStWtWKEPzevXuT4qCLzZo127Vr11133TVp0iR1g4jgqKOOKlasmF4Rkvrkk08C9iZfQSbaunVrqGvPnj0ZJkOAbuMFMKcmTZp8+OGH5lXVq1cP5cgPkhRzzfIw75hjjgneB9eq5s+fj5RCvxMQeThNBYOUlJSzzz4bJyDp/rJlywjA1113na3YITeufIKhuA4VmMcFgAtt2rRp27ZtJ0+efPjhhz///POPPPIIMXXx4sXFixfP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"/><br/>'
      }
    }
    
    // handleUsername = event => {
    //     this.setState({
    //         username: event.target.value,
    //     }, () => console.log(this.state.username))
    // }

    handleCommands = event => {
        this.setState({
            commands: event.target.value,
        }, () => console.log(this.state.commands))
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.commands} ${this.state.topic}`);
        event.preventDefault()
    }
  render() {
    return (
        
        <form onSubmit={this.handleSubmit}>
            {this.state.mcq ?
                <div>
                <MathJax.Provider>
    
                    <MathJax.Html html={this.state.records3} />
                </MathJax.Provider>
                </div>
                :
                <div>
                <MathJax.Provider>
    
                    <MathJax.Html html={this.state.records3} />
                    <input type="text" value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value}, ()=>{console.log(this.state.username)})}} />
                </MathJax.Provider>
                </div>
            }
            

            <div>
                <label>User Name</label>
                <input type="text" value={this.state.username} onChange={(e)=>{this.setState({username:e.target.value}, ()=>{console.log(this.state.username)})}} />
            </div>
    
            <div>
                <label>Commands</label>
                <textarea value={this.state.command} onChange={this.handleCommands}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select>
                    <option value='React'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='Vue'>Vue</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
        
    );
  }
}

export default FormComponent;
