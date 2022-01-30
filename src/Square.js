import React from 'react';

class Square extends React.Component {
    
    render() {
        const style = {

            background: "#fff",
            border: "1px solid #999",
            float: "left",
            fontSize: "24px",
            fontWeight: "bold",
            lineHeight: "34px",
            marginRight: "-1px",
            marginTop: "-1px",
            padding:"0",
            textAlign: "center",
            width: "100px",
            height: "100px",
            backgroundColor:" rgb(42, 18, 148)",
    
    
        }
        return (
            <button style={style} onClick={this.props.onClick}>{this.props.value}</button>
        )
    }
}
export default Square;