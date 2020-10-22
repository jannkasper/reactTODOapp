import React from "react";
import {VISIBILITY_FILTERS} from '../constants/VisibilityFilters'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';



const Footer = ({deleteCompleted, setFilter, completedCount, currentFilter}) => {
    return (
    <div>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            {Object.keys(VISIBILITY_FILTERS)
                .map(filterKey =>
                    <Button
                        key={VISIBILITY_FILTERS[filterKey]}
                        disabled={currentFilter == VISIBILITY_FILTERS[filterKey]}
                        onClick={() => setFilter(VISIBILITY_FILTERS[filterKey])}>
                            {VISIBILITY_FILTERS[filterKey]}
                    </Button>
                )}
        </ButtonGroup>
        { completedCount ?
            <Button
                startIcon={<DeleteIcon />}
                variant="contained"
                color="secondary"
                size="small"
                onClick={() => deleteCompleted()}>
                    Remove completed
            </Button> : null }
    </div>
    )
};


export default Footer
