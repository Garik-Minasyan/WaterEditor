import React from 'react';

const TextInput = ({ writeText }) => {
    return (
        <div className="textInput">
            <input
                type="text"
                placeholder="Write Text"
                onChange={writeText}
            />
        </div>
    );
};

export default TextInput;