import React, { Component } from 'react';
import { connect } from 'react-redux'
class Swiper extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { swiperInfo, isLoading, errorMsg } = this.props.swiperInfo;
        console.log(swiperInfo)
        return (
            <div>
                <style scope jsx>{`
                .swiper-img {
                    width: 100%;
                    height: 500px;
                }
                `}
                </style>
                {swiperInfo.swiperInfo.map((i) => {
                    
                    return (
                        <span key={i}>{i}</span>
                    )
                })}
            </div>
        )
    }
}
export default connect((state) => ({ swiperInfo: state.swiperInfo }))(Swiper)