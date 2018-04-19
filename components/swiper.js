export default ({swiperInfo}) => (
    <div>
        <style scope jsx>{`
                .swiper-img {
                    width: 100%;
                    height: 500px;
                }
                `}
        </style>
        {swiperInfo.map((i) => {
            return (
                <span key={i}>{i}</span>
            )
        })}
    </div>
)