import React from 'react';
import '../css/baitap.css';

class Bai9 extends React.Component {
    constructor(props) {
        super(props);
        this.bai9 = this.bai9.bind(this);
    }
    bai9() {
        var count = 0;
        if (this.refs.input9.value.length <= 0) {
            alert("Enter input (number)");
        } else if (this.refs.input9.value > 0) {
            for (var i = 1; i <= this.refs.input9.value; i++) {
                if (this.refs.input9.value % i === 0) {
                    count++;
                }
            }
            if (count === 3) {
                console.log("YES");
                this.refs.output9.value = "YES";
            } else {
                // console.log("NO" + " - Count = " + count);
                this.refs.output9.value = "NO";
            }
        } else {
            this.refs.output9.value = "Input không hợp lệ (Input là number)";
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
                          <td>3</td>
                          <td>YES</td>
                        </tr>
                        <tr>
                          <td>4 5 6</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                    <div className="clear" />
                  </div>
                  <form action="true">
                    <div className="form1">
                      <textarea id="input9" rows={8} cols={80} defaultValue={""} ref="input9" />
                      <button type="button" id="click9" onClick={this.bai9}>Click</button>
                      <textarea id="output9" rows={8} cols={80} defaultValue={""} ref="output9" />
                    </div>
                  </form>
                </div>
            </div>
        );
    }
}

export default Bai9;