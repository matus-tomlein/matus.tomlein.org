const $ = require('jquery');

function errorMessageForStatusCode(status) {
	switch (status) {
	case 401: // UNAUTHORIZED
		return ('Please log in to access this page.');

	case 403: // FORBIDDEN
		return ('You are not authorized to access this page.');

	case 404: // NOT FOUND
		return ('Requested item was not found.');

	case 500: // SERVER ERROR
		return ('Internal server error.');

	default:
		return ('Unknown error.');
	}
}

function isHtml(testString) {
	return testString[0] == '<';
}

function httpRequest(type, url, props, callback) {
	$.ajax({
		type: type,
		url: url,
		contentType: props.contentType || 'application/json',
		crossDomain: props.crossDomain ? true : false,
		success: (res) => {
			if (isHtml(res)) {
				callback({ htmlError: res });
			} else {
				callback({ data: res });
			}
		},
		error: (jqXHR) => {
			let error = errorMessageForStatusCode(jqXHR.status);
			callback({ error: error });
		}
	});
}

function formatDate(date) {
  var monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ];

  date = new Date(date);
  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

function setTitle(title) {
  if (title) {
    document.title = title + ' | Matúš Tomlein';
  } else {
    document.title = 'Matúš Tomlein';
  }
}

module.exports = {
  isHtml: isHtml,
  errorMessageForStatusCode: errorMessageForStatusCode,
  httpRequest: httpRequest,
  formatDate: formatDate,
  setTitle: setTitle
};
