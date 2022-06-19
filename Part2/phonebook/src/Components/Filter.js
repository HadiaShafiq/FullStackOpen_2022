const Filter = (props) => {

    const keyword = props.keyword
    return (
        <div>
            filter shown
            <input
                value={keyword}
                onChange={props.handleKeywordChange}
            />
        </div>
    )
}

export default Filter