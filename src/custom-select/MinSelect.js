import React, { Component } from "react";
import Select from "react-dropdown-select";
import { options } from "../components/options";

export class MinSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keepSelectedInList: true,
    };
  }
  setValues = (selectValues) => this.setState({ selectValues });

  itemRenderer = ({ item, itemIndex, props, state, methods }) => (
    <div key={item[props.valueField]} onClick={() => methods.addItem(item)}>
      <div style={{ margin: "10px" }}>
        <input type="checkbox" checked={methods.isSelected(item)} />
        &nbsp;&nbsp;&nbsp;{item[props.labelField]}
      </div>
    </div>
  );

  contentRenderer = ({ props, state }) => {
    return (
      <div>
        {state.values.length} of {props.options.length} Selected
      </div>
    );
  };

  render() {
    console.log(
      "selectValues - ",
      this.state.selectValues
        ? this.state.selectValues
        : "selectValues are not defined yet"
    );
    return (
      <div>
        <Select
          options={[
            { label: "a", value: "a" },
            { label: "b", value: "b" },
            { label: "c", value: "c" },
            { label: "d", value: "d" },
            { label: "e", value: "e" },
            { label: "f", value: "f" },
            { label: "g", value: "g" },
            { label: "h", value: "h" },
            { label: "i", value: "i" },
            { label: "j", value: "j" },
            { label: "k", value: "k" },
            { label: "l", value: "l" },
            { label: "m", value: "m" },
            { label: "n", value: "n" },
            { label: "o", value: "o" },
            { label: "p", value: "p" },
            { label: "q", value: "q" },
            { label: "r", value: "r" },
            { label: "s", value: "s" },
            { label: "t", value: "t" },
            { label: "u", value: "u" },
            { label: "v", value: "v" },
            { label: "w", value: "w" },
            { label: "x", value: "x" },
            { label: "y", value: "y" },
            { label: "z", value: "z" },
          ]}
          onChange={(values) => this.setValues(values)}
          multi={true}
          keepSelectedInList={true}
          itemRenderer={(item, itemIndex, props, state, methods) =>
            this.itemRenderer(item, itemIndex, props, state, methods)
          }
          contentRenderer={(innerProps, innerState) =>
            this.contentRenderer(innerProps, innerState)
          }
        />
      </div>
    );
  }
}

export default MinSelect;
