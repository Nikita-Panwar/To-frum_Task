// Import necessary libraries
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS for styling enhancements

const App = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [autocompleteInput, setAutocompleteInput] = useState('');
  const autocompleteOptions = ['UI design', 'UI design practice', 'UI pattern', 'Daily UI'];
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [value, setValue] = useState(0); // State for Value field

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setError(validateEmail(value) ? '' : 'Please provide a valid email address');
  };

  const handleAutocompleteChange = (e) => {
    const value = e.target.value;
    setAutocompleteInput(value);
    setFilteredOptions(
      autocompleteOptions.filter((option) => option.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const incrementValue = () => {
    setValue((prevValue) => (prevValue < 100 ? prevValue + 1 : prevValue));
  };

  const decrementValue = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : prevValue));
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <form>
          {/* Normal, Normal, and Password in one line */}
          <div className="row mb-4">
            <div className="col-md-4">
              <label className="form-label">Normal</label>
              <input type="text" className="form-control custom-input" placeholder="Placeholder text" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Normal</label>
              <input type="text" className="form-control custom-input" placeholder="Placeholder text" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control custom-input"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Focus, Error, and Autocomplete in one line */}
          <div className="row mb-4">
            <div className="col-md-4">
              <label className="form-label">Focus</label>
              <input
                type="text"
                className="form-control custom-input focus"
                placeholder="Placeholder text"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Error</label>
              <input
                type="email"
                className={`form-control custom-input ${error ? 'is-invalid' : ''}`}
                placeholder="Placeholder text"
                value={email}
                onChange={handleEmailChange}
              />
              {error && <div className="text-danger mt-1">{error}</div>}
            </div>
            <div className="col-md-4 position-relative">
              <label className="form-label">Autocomplete</label>
              <input
                type="text"
                className="form-control custom-input"
                placeholder="Search..."
                value={autocompleteInput}
                onChange={handleAutocompleteChange}
              />
              {autocompleteInput && (
                <ul className="list-group position-absolute w-100 custom-dropdown">
                  {filteredOptions.map((option, index) => (
                    <li
                      key={index}
                      className="list-group-item list-group-item-action"
                      onClick={() => setAutocompleteInput(option)}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Active and Date in one line */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Active</label>
              <input type="text" className="form-control custom-input" placeholder="Active input" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-control custom-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          {/* Normal and Value in one line */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="form-label">Normal</label>
              <input type="text" className="form-control custom-input" placeholder="Placeholder text" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Value</label>
              <div className="input-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={decrementValue}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control custom-input text-center"
                  placeholder="0"
                  min="0"
                  max="100"
                  value={value}
                  readOnly
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={incrementValue}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default App;
