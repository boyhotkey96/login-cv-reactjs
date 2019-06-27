import React from 'react';
import '../css/baitap.css';

class Bai8 extends React.Component {
    constructor(props) {
        super(props);
        this.bai8 = this.bai8.bind(this);
    }
    bai8() {
        if (this.refs.input8.value.length <= 0) {
            alert("Enter input (number)");
        } else if (this.refs.input8.value > 0) {
            this.refs.output8.value = "Chua lam...!!"
        } else {
            this.refs.output8.value = "Input không hợp lệ (Input là number)";
        }
    }
    render() {
        return (
            <div>
                {/* Item */}
                <div className="baitap">
                  <h2>{this.props.title}</h2>
                  <div className="bt">
                    <p>{this.props.subtitle}
                    </p>
                    <table>
                      <thead>
                        <tr>
                          <th>Input</th>
                          <th>Output</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>11</td>
                          <td>m</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="clear" />
                  </div>
                  <form action="true">
                    <div className="form1">
                      <textarea id="input8" rows={8} cols={80} defaultValue={""} ref="input8" />
                      <button type="button" id="click8" onClick={this.bai8}>Click</button>
                      <textarea id="output8" rows={8} cols={80} defaultValue={""} ref="output8" />
                    </div>
                  </form>
                </div>
            </div>
        );
    }
}

export default Bai8;