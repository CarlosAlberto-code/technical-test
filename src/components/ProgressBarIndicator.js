import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export const ProgressBarIndicator = ({step}) => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-12">
                    <ProgressBar variant="orange" now={step * 25} />
                </div>
            </div>
        </div>
    )
}
