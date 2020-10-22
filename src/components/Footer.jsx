import React from "react";
import {VISIBILITY_FILTERS} from '../constants/VisibilityFilters'


const Footer = ({deleteCompleted, setFilter, completedCount, currentFilter}) => {
    return (
    <div>
        {Object.keys(VISIBILITY_FILTERS)
            .map(filterKey =>
                <button
                    key={VISIBILITY_FILTERS[filterKey]}
                    disabled={currentFilter == VISIBILITY_FILTERS[filterKey]}
                    onClick={() => setFilter(VISIBILITY_FILTERS[filterKey])}>
                        {VISIBILITY_FILTERS[filterKey]}
                </button>
            )}
        { completedCount ? <button onClick={() => deleteCompleted()}>Clear completed</button> : null }
    </div>
    )
};


export default Footer
