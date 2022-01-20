import "../styles/list.css"

const List = ({ array, setObj }) => {
    return (
        <div className="lists">
            {array.map(options => {
                return (
                    <div key={options.id} className="values">
                        <div className="circle"></div>
                        <p onClick={() => setObj(array[options.id-1])}>{options.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default List