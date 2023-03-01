import React from "react";
import "./../styles/TodoSearch.css";

function TodoSearch({searchValue, setSearchValue}) {
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
        </div>
    );
}

export { TodoSearch }