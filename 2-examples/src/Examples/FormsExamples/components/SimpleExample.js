import React from 'react';

function SimpleExample() {
  const [name, setName] = React.useState('Peter');
  const [gender, setGender] = React.useState('unknown');
  const [children, setChildren] = React.useState(true);
  const [country, setCountry] = React.useState('VN');

  const handleSubmit = (e) => {
    // event of form
    e.preventDefault();
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Children:', children);
    console.log('Country:', country);
  };

  return (
    <div className=' d-flex justify-content-center m-3'>
      <div className='border border-light rounded p-3'>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Name'
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <hr />

          <input
            type='radio'
            name='gender'
            value={gender}
            onChange={(e) => {
              setGender('man');
            }}
          />
          <label htmlFor='gender'>Man</label>

          <input
            type='radio'
            name='gender'
            value={gender}
            onChange={(e) => {
              setGender('woman');
            }}
          />
          <label htmlFor='gender'>Woman</label>

          <input
            type='radio'
            name='gender'
            value={gender}
            onChange={(e) => {
              setGender('unknown');
            }}
          />
          <label htmlFor='gender'>Unknown</label>
          <hr />
          
          <input
            type='checkbox'
            name='children'
            value={children}
            onChange={(e) => {
              setChildren(e.target.checked);
            }}
          />
          <label htmlFor='children'>Children</label>
          <hr />
          <select
            name='country'
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          >
            <option value='VN'>Vietnam</option>
            <option value='US'>United State</option>
            <option value='JP'>Japan</option>
          </select>
          <hr />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SimpleExample;
