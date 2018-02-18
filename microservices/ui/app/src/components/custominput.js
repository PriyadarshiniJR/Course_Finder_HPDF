import Autosuggest from 'react-autosuggest';
import React from 'react';
import '../App.css';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'List all the course providers',
  },
  {
    name: 'Who are the available course providers?',
  },
  {
    name: 'Give me a list of all course providers',
  },
  {
    name: 'What courses does Nptel provide',
  },
  {
    name: 'What courses does Udemy provide',
  },
  {
    name: 'What courses does edx provide',
  },
  {
    name: 'What courses does Udacity provide',
  },
  {
    name: 'What courses are provided by Nptel',
  },
  {
    name: 'What courses are provided by Udemy',
  },
  {
    name: 'What courses are provided by edX',
  },
  {
    name: 'What courses are provided by Udacity',
  },
  {
    name: 'What courses are provided by Class Central',
  },
  {
    name: 'How long is Introduction To modern Application Development Course',
  },
  {
    name: 'How long is Computer Architecture Course',
  },
  {
    name: 'How long is Python course',
  },
  {
    name: 'What is the duration of Python Course'
  },
  {
    name: 'What are the courses under Web Development',
  },
   {
    name: 'What are the courses under Artificial Intelligence',
  },
  {
    name: 'What are the courses under Competitive Programming',
  },
  {
    name: 'What is the link of Java course',
  },
  {
    name: 'Where can I take Java Course',
  },
  {
    name: 'Who are the instructors of reactjs course',
  },
  {
    name: 'What are the courses for Web Development',
  },
  {
    name: 'What courses are available for Machine Learning',
  },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

export default class CustomInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionSelected= (e, {suggestion}) => {
    // console.log(suggestion)
    this.props.onSubmit(suggestion["name"])
  }

  handleKeyPress = (e) => {
    if(e.key==='Enter'||e.which===13) {
   // { console.log(e.target.value)
       this.props.onSubmit(e.target.value)}
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Type here",
      value,
      onChange: this.onChange,
      onKeyPress:this.handleKeyPress
    };

    return (
      <Autosuggest 
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} 
        onSuggestionSelected={this.onSuggestionSelected}
        
        />
    );
  }
}


