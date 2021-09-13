import * as React from 'react';
import './App.css';
import {TVChartContainer} from './components/TVChartContainer/index';
import {useState} from "react";
import {TreeSelect} from "antd";
import {useLocation} from "react-router-dom";

const { TreeNode } = TreeSelect;

const App = () => {
    const location = useLocation();
	const [value, setValue] = useState(undefined);
	const onChange = () => {
		setValue(value);
	};

    return (
        <div className={'App'}>
            <header>
                <TreeSelect
                    showSearch
                    style={{ width: '500px' }}
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    onChange={onChange}
                >
                    <TreeNode value="parent 1" title="parent 1">
                        <TreeNode value="parent 1-0" title="parent 1-0">
                            <TreeNode value="leaf1" title="leaf1" />
                            <TreeNode value="leaf2" title="leaf2" />
                        </TreeNode>
                        <TreeNode value="parent 1-1" title="parent 1-1">
                            <TreeNode value="leaf3" title={<b style={{ color: '#08c' }}>leaf3</b>} />
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>
            </header>
            <TVChartContainer/>
        </div>
    );
}

export default App;
