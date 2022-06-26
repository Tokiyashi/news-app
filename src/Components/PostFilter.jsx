import React from 'react';
import Select from "./UI/Select/Select";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="filters">
            <input
                placeholder="Поиск..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <Select
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e})}
                defaultValue="Сортировка"
                options={[
                    {value: "creationDate", name: "по дате"},
                    {value: "header", name: "По заголовку"},
                    {value: "likes", name: "Больше всего лайков"}
                ]}/>
        </div>
    );
};

export default PostFilter;