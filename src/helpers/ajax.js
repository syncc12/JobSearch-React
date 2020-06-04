const ajaxPath = (endpoint) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return 'http://localhost:8080/' + endpoint;
  } else {
    return 'https://jobsearch-react.herokuapp.com/' + endpoint;
  }
    
};

export default ajaxPath;