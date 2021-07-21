import React from 'react'

function Pagination(props) {

    const {onLeftClick, onRightClick, page, totalPages} = props;
    
    return (
        <div className="pagination">
            <button onClick={onLeftClick}>Previus</button>
            <div>{page}  de {totalPages}</div>
            <button onClick={onRightClick}>Next</button>
        </div>
    )
}

export default Pagination
