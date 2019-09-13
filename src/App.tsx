import React from 'react'
import TextInput from '@components/TextInput'
import Header from '@components/Header'
import './App.css'
import {StoreState} from "@redux/Store";
import {connect} from "react-redux";

interface ReduxProps {
    lesson: string | undefined
}

class App extends React.Component<ReduxProps> {

    render() {
        return (
            <div className="app">
            <Header/>
            {this.props.lesson && <TextInput/>}
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): ReduxProps => {
    return {
        lesson: state.lessonState.lesson,
    }
};

export default connect(mapStateToProps, null)(App)
