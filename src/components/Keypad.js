import React from 'react';

export default class EyesOnMe extends React.Component {
    
    handleKeyUp = () => {
        console.log("Entering password...")
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    onKeyUp={this.handleKeyUp}
                />
            </div>
        )
    }
}