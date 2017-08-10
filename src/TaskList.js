import React from 'react';
import {connect} from 'react-redux';
/* import * as actions from './thunks';*/
import * as actions from './actions';

const TaskList = ({tasks, refresh}) => (
    <div>
        <ul>
            {tasks && tasks.map(task => <li>{task.title}</li>)}
        </ul>
        <button onClick={refresh}>Refresh</button>
    </div>
);

const mapStateToProps = state => ({
    tasks: state.tasks.tasks
});


const ConnectedTaskList = connect(mapStateToProps, actions)(TaskList);

export default ConnectedTaskList;
