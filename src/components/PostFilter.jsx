import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";
import styles from '../styles/MySortPosts.module.css';


const PostFilter = ({filter, setFilter}) => {
    return (
        <div  className={styles['sort-posts']}>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search..."
            />
            <MySelect className={styles['my-select-posts']}
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue="Sorting"
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'},
                ]}
            />
        </div>
    );
};

export default PostFilter;
