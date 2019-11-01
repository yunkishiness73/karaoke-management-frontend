import React, { Component } from 'react';
import LeftCol from './LeftCol/LeftCol';
import RightCol from './RightCol/RightCol';

class Item extends Component {
    render() {
        return (
            <div className="container-fluid mt-2 pt-2 right_col">
                <div className="col-sm-12">
                    <div className="table-responsive col-sm-12">
                        <div className="row">
                            <LeftCol />
                            <RightCol />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Item;