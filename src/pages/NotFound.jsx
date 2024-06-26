import { Link } from "react-router-dom"
import { FaExclamationTriangle } from "react-icons/fa"

const NotFound = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className="text-8xl text-yellow-500 mb-6" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">頁面不存在</p>
      <Link
        to="/"
        className="text-white bg-teal-700 hover:bg-teal-900 rounded-md px-3 py-2 mt-4"
        >回去
        </Link>
    </section>

  )
}

export default NotFound