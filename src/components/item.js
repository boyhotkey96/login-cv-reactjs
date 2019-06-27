import React from 'react';
import '../css/baitap.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.bai8 = this.bai8.bind(this);
        this.bai9 = this.bai9.bind(this);
        this.bai10 = this.bai10.bind(this);
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
    bai10() {
        if (this.refs.input10.value.length <= 0) {
            alert("Enter input (number)");
        } else if (parseInt(this.refs.input10.value) > 0) {
            var st = 0;
            var xx = parseInt(this.refs.input10.value);
            console.log(xx);
            for (var i = 1; i <= xx; i++) {
                st += st + i;
                if (st >= xx) {
                    console.log(i);
                    this.refs.output10.value = i;
                    break;
                }
            }
        } else {
            this.refs.output10.value = "Input không hợp lệ (Input là number)"
        }
    }
    render() {
        // var abc = this.props.click;
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
                          <td>{this.props.td1}</td>
                          <td>{this.props.td2}</td>
                        </tr>
                        <tr>
                          <td>{this.props.td3}</td>
                          <td />
                        </tr>
                      </tbody>
                    </table>
                    <div className="clear" />
                  </div>
                  <form action="true">
                    <div className="form1">
                      <textarea rows={8} cols={80} defaultValue={""} ref={this.props.input} />
                      <button type="button" onClick={() => this.props.click }>Click {this.props.click}</button>
                      <textarea rows={8} cols={80} defaultValue={""} ref={this.props.output} />
                    </div>
                  </form>
                </div>
            </div>
        );
    }
}

export default Item;