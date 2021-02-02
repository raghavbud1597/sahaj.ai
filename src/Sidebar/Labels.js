import React, {useEffect} from 'react';
import {getLabels} from './../actions';
import {useSelector, useDispatch } from 'react-redux';

export default function Labels() {
    const labels = useSelector(state => state.labels);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLabels());
    }, []);
    return (
        <div>
            <p className="text-capitalize my-2">Labels</p>
            {labels.labelList ? labels.labelList.map(item => {
                return (
                    <div key={item.id}>
                        {item.name}
                    </div>
                )
            }) : '' }
        </div>
    )
}
