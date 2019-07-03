import React from 'react';
import '../css/baitap.css';
import Item from './item';
import Header from './header.js';

class Baitap extends React.Component {
    constructor(props) {
        super(props);
        this.bai8 = this.bai8.bind(this);
        this.bai9 = this.bai9.bind(this);
        this.bai10 = this.bai10.bind(this);
    }

    bai8(input) {
        if (input.length <= 0) {
            alert("Enter input (number)");
            return "";
        } else if (input > 0) {
            return "Chua lam...!!"
        } else {
            return "Input không hợp lệ (Input là number)";
        }
    }

    bai9(input) {
        var count = 0;
        if (input.length <= 0) {
            alert("Enter input (number)");
            return "";
        } else if (input > 0) {
            for (var i = 1; i <= input; i++) {
                if (input % i === 0) {
                    count++;
                }
            }
            if (count === 3) {
                console.log("YES");
                return "YES";
            } else {
                // console.log("NO" + " - Count = " + count);
                return "NO";
            }
        } else {
            return "Input không hợp lệ (Input là number)";
        }
    }

    bai10(input) {
        //console.log(input);
        if (input.length <= 0) {
            alert("Enter input (number)");
            return "";
        } else if (Number(input) > 0) {
            var st = 0;
            var xx = Number(input);
            console.log(xx);
            for (var i = 1; i <= xx; i++) {
                st += st + i;
                if (st >= xx) {
                    console.log(i);
                    return i;
                    // break;
                }
            }
        } else {
            return "Input không hợp lệ (Input là number)"
        }
    }
    render() {
        var baitap = [{
                title: "8. M O O",
                subtitle: <pre>Những con bò đang chuẩn bị bắt đầu chơi trò “Moo”. Chúng đứng trên một hàng dài, trong 
                đó mỗi con bò trong{"\n"}hàng sẽ nói một chữ cái nhanh nhất có thể. Con bò nào phạm luật đầu tiên thì 
                sẽ thua.{"\n"}Dãy các kí tự “Moo” có thể kéo dài liên tục và không giới hạn. Chúng sẽ bắt đầu như 
                sau:{"\n"}m o o m o o o m o o m o o o o m o o m o o o m o o m o o o o{"\n"}Dãy kí tự được diễn tả như 
                sau: Gọi S(0)là một trong ba kí tự “m o o”. Sau đó dãy kí tự S(k)sẽ bằng dãy S(k-1){"\n"}và thêm vào 
                “m o … o” với k+2 chữ o, và sau đó cộng thêm một lần cho S(k-1). Ví dụ:{"\n"}S(0) = "m o o"{"\n"}S(1)
                 = "m o o m o o o m o o"{"\n"}S(2) = "m o o m o o o m o o m o o o o m o o m o o o m o o"{"\n"}. 
                 Với cách này sẽ tạo được dãy kí tự rất dài, và dãy này sẽ dùng cho game Moo.{"\n"}Cô bò Bessie 
                 muốn biết kí tự thứ N của dãy này là chữ “m” hay chữ “o”. Bạn hãy giúp Bessie nhé!
                 {"\n"}Input{"\n"}*Dòng 1: Gồm một số nguyên N(1 &lt;= N &lt;= 10^9).{"\n"}Output{"\n"}*Dòng 1: 
                 Dòng duy nhất chứa kí tự “m” hoặc “o”.{"\n"}</pre>,
                td1: 11,
                td2: "m",
                td3: "",
                click: this.bai8
            },
            {
                title: "9. Số gần nguyên tố",
                subtitle: <pre>Chúng ta đều biết số nguyên tố là số nguyên dương mà chỉ có duy nhất 2 ước phân biệt. 
                Iron man luôn thích{"\n"}những cái đặc biệt và mới mẻ, và anh ra đưa ra 1 định nghĩa mới “Số gần 
                nguyên tố” – là các số nguyên{"\n"}dương mà có đúng 3 ước phân biệt.{"\n"}Bạn được cho 1 mảng có n 
                phần tử, hãy kiểm tra xem từng phần tử trong mảng có phải là số gần nguyên tố{"\n"}hay không.
                {"\n"}Input{"\n"}Dòng đầu tiên nhập vào số tự nhiên n (1 &lt;= n &lt;= 10^5) là số phần tử của 
                mảng.{"\n"}Dòng tiếp theo nhập n số nguyên dương x[i] (1 &lt;= x[i] &lt;= 10^12){"\n"}Output{"\n"}
                In ra trên n dòng: dòng thứ i in “YES” nếu x[i] là số gần nguyên tố, ngược lại thì in “NO”.{"\n"}
                VD:</pre>,
                td1: 3,
                td2: "",
                td3: "4 5 6",
                td4: "YES NO NO",
                click: this.bai9
            },
            {
                title: "10. Tính sát thương",
                subtitle: <pre>Ursa là một hero rất bá đạo trong DotA, anh có kỹ năng gia tăng sức mạnh sau mỗi cú 
                đánh theo công thức:{"\n"}Di = Di-1 + i với i là số thứ tự cú đánh và Di là lượng sát thương gây 
                ra sau cú đánh đó, với i = 1 thì{"\n"}Di = 1.{"\n"}Thanh mới tập chơi DotA và chơi một hero có 
                lượng máu cơ bản là X. Hero của Thanh không chịu được{"\n"}đòn đánh có sát thương lớn hơn X. 
                Bạn hãy giúp Thanh tính xem có thể chịu được tối đa bao nhiêu cú đánh{"\n"}của Ursa.{"\n"}
                Input{"\n"}Dòng duy nhất chứa số X (1 &lt;= X &lt;= 10000).{"\n"}Output{"\n"}In ra số cú đánh 
                tối đa mà hero của Sơn có thể chịu được.{"\n"}VD: {"\n"}VD:</pre>,
                td1: 1,
                td2: 1,
                td3: "",
                td4: "",
                click: this.bai10
            }
        ];

        console.log(this.props.isShow);
        let elements = baitap.map((baitap, index) => {
            if (this.props.isShow) {
                if (index % 2 === 0) {
                    return <Item key={index} 
                            title={baitap.title} 
                            subtitle={baitap.subtitle}
                            td1={baitap.td1}
                            td2={baitap.td2}
                            td3={baitap.td3}
                            td4={baitap.td4}
                            click={baitap.click} />
                } else {
                    return "";
                }
            } else {
                return <Item key={index} 
                            title={baitap.title} 
                            subtitle={baitap.subtitle}
                            td1={baitap.td1}
                            td2={baitap.td2}
                            td3={baitap.td3}
                            td4={baitap.td4}
                            click={baitap.click} />
            }
        });

        let elm = null;
        if (this.props.isShow) {
            elm = "";
        } else {
            elm = <Header />
        }
        return (
            <div>
                {elm}
                <h1>Phùng Bá Dự</h1>
                {elements}
            </div>
        );
    }
}

export default Baitap;