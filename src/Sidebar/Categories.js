import React, {useEffect} from 'react';
import {getCategories} from './../actions';
import {useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const CategoryColor = styled.span`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    display: inline-block;
    background-color: ${props => props.inputColor || "white"};
    margin-right: 10px;
`
const CategoryItem = styled.div`
    cursor: pointer;
`

export default function Categories() {
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, []);
    return (
        <div>
            {categories.categoryList ? categories.categoryList.map(item => {
                return (
                    <CategoryItem key={item.id} className="text-secondary">
                        <CategoryColor inputColor={item.color}> </CategoryColor>
                        {item.name}
                    </CategoryItem>
                )
            }) : '' }
        </div>
    )
}
