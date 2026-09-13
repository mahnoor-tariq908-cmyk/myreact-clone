function Student() {
    return (
        <div className="flex justify-center items-center gap-6 min-h-screen bg-gray-100">

            {/* Card 1 */}
            <div className="w-80 h-80 p-6 bg-white border-2 border-blue-200 rounded-2xl shadow-lg text-center
            hover:shadow-2xl hover:-translate-y-3 hover:border-blue-500 hover:bg-blue-50
            transition-all duration-500 ease-in-out">

                <h2 className="text-2xl font-bold mb-3 text-blue-600">
                    Student1
                </h2>

                <p className="text-gray-500 mb-3">
                    Student ID: 12345
                </p>

                <p className="text-gray-600 leading-relaxed">
                    A hardworking and motivated student who is interested
                    in learning new skills and improving their knowledge.
                </p>

            </div>


            {/* Card 2 */}
            <div className="w-80 h-80 p-6 bg-white border-2 border-green-200 rounded-2xl shadow-lg text-center
            hover:shadow-2xl hover:-translate-y-3 hover:border-green-500 hover:bg-green-50
            transition-all duration-500 ease-in-out">

                <h2 className="text-2xl font-bold mb-3 text-green-600">
                    Student2
                </h2>

                <p className="text-gray-500 mb-3">
                    Student ID: 76548
                </p>

                <p className="text-gray-600 leading-relaxed">
                    A friendly and responsible student who enjoys
                    learning new things and working with others.
                </p>

            </div>


            {/* Card 3 */}
            <div className="w-80 h-80 p-6 bg-white border-2 border-purple-200 rounded-2xl shadow-lg text-center
            hover:shadow-2xl hover:-translate-y-3 hover:border-purple-500 hover:bg-purple-50
            transition-all duration-500 ease-in-out">

                <h2 className="text-2xl font-bold mb-3 text-purple-600">
                    Student3
                </h2>

                <p className="text-gray-500 mb-3">
                    Student ID: 45678
                </p>

                <p className="text-gray-600 leading-relaxed">
                    A dedicated student who is interested in
                    technology, programming, and improving
                    their skills.
                </p>

            </div>

        </div>
    )
}

export default Student;