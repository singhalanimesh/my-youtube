const ButtonsList = () => {
    return (
        <div className="px-4">
            <ul className="flex justify-between">
                <li className="px-3 m-3 ml-0 bg-gray-200 rounded-md">All</li>
                <li className="px-3 m-3 ml-0 bg-gray-200 rounded-md">Gaming</li>
                <li className="px-3 m-3 ml-0 bg-gray-200 rounded-md">News</li>
                <li className="px-3 m-3 ml-0 bg-gray-200 rounded-md">Formula 1</li>
                <li className="px-3 m-3 ml-0 bg-gray-200 rounded-md">Science Fiction</li>
                <li className="px-3 m-3 ml-0 bg-gray-200 rounded-md">IPL</li>
                <li className="px-3 m-3 ml-0 bg-gray-200 rounded-md">Cars</li>
                <li className="px-3 m-3 ml-0 bg-gray-200 rounded-md">Tech</li>
            </ul>
        </div>
    );
};

export default ButtonsList;