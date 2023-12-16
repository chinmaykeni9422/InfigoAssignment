import Button from "../Button/Button"

function ImageCardItem({image,des}) {
  return (
    <>
        
        <div className="max-w-sm m-10 bg-white border  border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

            <a href="#" className="grid mt-4 place-content-center">
                <img className="rounded-t-lg" src={image} alt="logo" />
            </a>

            <div className="p-5">

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {des}
                </p>

                <Button label={"Read more"} />
            </div>

        </div>

    </>
  )
}

export default ImageCardItem