import React from "react";
import "./../styles/TodoSearch.css";

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');
    const onSearchValueChange = (e) => {
        setSearchValue(e.target.value);
    };
    return (
        <div className="TodoSearch">
            <input
                placeholder="Task"
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <p>{searchValue}</p>
        </div>
    );
}

export { TodoSearch }