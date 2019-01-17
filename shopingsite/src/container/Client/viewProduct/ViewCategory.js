import React, { Component } from 'react'
import './ViewPrdouct.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProdctAction from '../../action/CategorySelect';
import { Checkbox } from 'material-ui';
const img1 = require('../../../Image/1.jpg');
class ClientViewCategory extends Component {
    componentDidMount = () => {
        this.props.action.fetchCategory.FetchCategory();        
    }
    render() {
        debugger
        let data, data2
        if(this.props.category  ){
            data2 = this.props.category.map(data => {
                return <div className="p"><input type="radio" name="gender" value="other" /> {data.Category_Name} </div>
            })
        }
        return (
                <div style={{ float: "left" }}>
                    <div className="categort" >Category Name</div>
                    {data2}
                </div>
                
        );
    }
}
const mapStateToProps = (state) => {
    return {
        category: state.category.category,
    }
}
const mapDispatchToProps = dispatch => ({
    action: {
        fetchCategory: bindActionCreators(ProdctAction, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientViewCategory)
