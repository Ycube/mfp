import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: ''
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const selected = this.getSelectedFromProps(nextProps);
        this.setState({
           selected: selected
        });
    }
    
    handleChange = (e) => {
        if (this.props.onChange) {
            const change = {
              oldValue: this.state.selected,
              newValue: e.target.value
            }
            this.props.onChange(change);
        }
        this.setState({selected: e.target.value});
    }

    getSelectedFromProps(props) {
        let selected;
        if (props.value === null && props.options.length !== 0) {
            selected = props.options[0][props.valueField];
        } else {
            selected = props.value;
        }
        return selected;
    }

    render() {
        const options = this.props.options.map((option) => {
            return (
                <option key={option[this.props.valueField]} value={option[this.props.valueField]}>
                    {option[this.props.labelField]}
                </option>
            )
        });
        return (
            <select 
                className='form-control' 
                value={this.state.selected} 
                onChange={this.handleChange}>
                {options}
            </select>
        )
    }

};

Dropdown.propTypes = {
    options: React.PropTypes.array.isRequired,
    value: React.PropTypes.oneOfType(
        [
            React.PropTypes.number,
            React.PropTypes.string
        ]
    ),
    valueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    onChange: React.PropTypes.func
}

export default Dropdown;