import ImageCardItem from "../CardItem/ImageCardItem"


function Card({myData2}) {
  return (
    <>
        <div className="text-center font-serif  text-3xl pt-12">Why choose INFIGON program?</div>
        <div className="flex justify-center">
            {myData2.map((item) => <ImageCardItem image={item.img} des={item.description} />)}  
        </div>

    </>
  )
}

export default Card