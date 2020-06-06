const ajaxPath = (endpoint) => {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    console.log('endpoint','http://localhost:8080/');
    return 'http://localhost:8080/' + endpoint;
  } else {
    console.log('endpoint','https://jobsearch-react.herokuapp.com/');
    return 'https://jobsearch-react.herokuapp.com/' + endpoint;
  }
    
};

export default ajaxPath;