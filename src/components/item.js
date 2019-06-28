import React from 'react';
import '../css/baitap.css';

class Item extends React.Component {
    data() {
        var result = this.props.click(this.refs.input.value);
        //console.log(x);
        this.refs.output.value = result;
    }
    render() {
         // var abc = this.props.click("s");
         // console.log("abc " + abc);
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
                          <td>{this.props.td4}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="clear" />
                  </div>
                  <form action="true">
                    <div className="form1">
                      <textarea rows={8} cols={80} defaultValue={""} ref="input" />
                      <button type="button" onClick={this.data.bind(this)}>Click</button>
                      <textarea rows={8} cols={80} defaultValue={""} ref="output" />
                    </div>
                  </form>
                </div>
            </div>
        );
    }
}

export default Item;