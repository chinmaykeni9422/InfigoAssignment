function Carditem({title, label}) {
  return (
    <>     
      <a href="#" className="block max-w-sm p-6  text-center bg-blue-700 ml-4 border border-gray-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">    
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{title}</h5>
        <p className=" text-white font-medium dark:text-gray-400">{label}</p>
      </a>
    </>
  )
}

export default Carditem