import React from "react";

var Form = (properties) => {

    var inputTextHandler = (e)=>{
        properties.setInputText(e.target.value);
    };

    var buttonHandler = ()=>{
        properties.setTodos([...properties.todos,
            {id: Math.random()*100, text: properties.inputText, completed: false}
        ]);
        properties.setInputText("");
    };

    var filterHandler = (e)=>{
        properties.setFilter(e.target.value);
        
    };

    return (
        <form className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-6">
                <div className="input-group input-group-sm">
                <input type="text" className="form-control" onChange={inputTextHandler} value={properties.inputText}/>
                <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={buttonHandler}>Add</button>
                </div>
            </div>

            <div className="col-6">
                <select className="form-select form-select-sm" onChange={filterHandler} id="inlineFormSelectPref">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
};

export default Form;