import React, { useState } from 'react';
import SettingsText from '../components/SettingsText';
import SettingsEditor from '../components/SettingsEditor';
// import SettingsLogo from '../components/SettingsLogo';
import RenderingEditor from '../components/RenderingEditor';

const Content = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [text, setText] = useState("Bee TV");
    const [textSize, setTextSize] = useState(30);
    const [textColor, setTextColor] = useState('#7dcb52');
    const [textFont, setTextFont] = useState()


    const toggledState = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const writeText = (e) => {
        setText(e.target.value)
    };

    const changeTextSize = (e) => {
        setTextSize(e.target.value)
    };

    function formatText() {
        const size = textSize;
        return parseInt(size);
    };

    const changeTextColor = (e) => {
        setTextColor(e.target.value)
    }

    const changeTextFont = (e) => {
        setTextFont(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div className="content">
            {isOpen ? <SettingsText
                writeText={writeText}
                changeTextSize={changeTextSize}
                changeTextColor={changeTextColor}
                changeTaxtFont={changeTextFont}
            />
                : <SettingsEditor toggledState={toggledState} />}


            <RenderingEditor
                textFont={textFont}
                textColor={textColor}
                formatText={formatText()}
                text={text}
                isOpen={isOpen} />
        </div>
    );
};

export default Content;