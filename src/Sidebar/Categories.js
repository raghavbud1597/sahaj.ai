import React, {useEffect} from 'react';
import {getCategories} from './../actions';
import {useSelector, useDispatch } from 'react-redux';

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
                    <div key={item.id}>
                        {item.name}
                    </div>
                )
            }) : '' }
        </div>
    )
}
