import React from 'react';

const Pagination = ({page, onNext, onPrevious}) => {
    return (
        <div className="d-flex align-items-center">
            <button className="btn btn-primary" onClick={onPrevious} disabled={page <= 1}>{"<"}</button>
            <div className="badge bg-secondary">{page}</div>
            <button className="btn btn-primary" onClick={onNext}>{">"}</button>
        </div>
    );
};

export default Pagination;