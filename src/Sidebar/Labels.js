import React, {useEffect} from 'react';
import {getLabels} from './../actions';
import {useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Tag from './../images/tag.png';

const LabelBtn = styled.span`
    cursor: pointer;
    border: 1px solid #DCDCDC;
    margin: 10px 2px;
    padding: 4px 6px;
    border-radius: 4px;
    white-space: nowrap;
    line-height: 2;
    background-color: white;
`

export default function Labels() {
    const labels = useSelector(state => state.labels);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLabels());
    }, []);
    return (
        <div>
            <p className="font-weight-bold my-2 text-secondary">LABELS</p>
            {labels.labelList ? labels.labelList.map(item => {
                return (
                    <LabelBtn key={item.id} className="text-secondary">
                        <img src={Tag} alt="Menu Icon" height="15" width="15" className="mr-1"/>
                        {item.name}
                    </LabelBtn>
                )
            }) : '' }
        </div>
    )
}
