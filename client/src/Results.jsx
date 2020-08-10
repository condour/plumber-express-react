import React from 'react';

const Results = ({ passwords }) => {
  console.log(passwords);
  return(
    <div className="results">
    { Array.isArray(passwords) && 
      passwords.map(result => <pre>{result}</pre>)
    }
    </div>
  );
  
}
export default Results;