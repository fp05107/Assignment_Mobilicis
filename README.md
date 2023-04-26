<h1>User Management System</h1>
<h3>Description</h3>
This Is a Simple User Management System Where Admin can check Users Data and modify it accordingly.
<!DOCTYPE html>
<html>

<head>
    <title>User Management API</title>
</head>

<body>
    <h1>User Management API</h1>
    <p>This is a RESTful API for managing users. It provides various endpoints to retrieve user data based on different filters.</p>


<h2>Endpoints</h2>
<h3>Get All Users</h3>
<p><strong>Endpoint:</strong> /</p>
<p><strong>Method:</strong> GET</p>
<p><strong>Description:</strong> Fetches all users with pagination support.</p>
<p><strong>Query Parameters:</strong></p>
<ul>
  <li><strong>page (optional):</strong> Page number for pagination. Default is 1.</li>
  <li><strong>limit (optional):</strong> Number of records per page. Default is 5.</li>
</ul>
<p><strong>Response:</strong></p>
<ul>
  <li><strong>Status Code:</strong> 200 for success, 404 for not found</li>
  <li><strong>Body:</strong> Array of user objects</li>
</ul>
<h3>Get Users by Income and Car</h3>
<p><strong>Endpoint:</strong> /usersByIncomeAndCar</p>
<p><strong>Method:</strong> GET</p>
<p><strong>Description:</strong> Fetches users based on income and car filters with pagination support.</p>
<p><strong>Query Parameters:</strong></p>
<ul>
  <li><strong>page (optional):</strong> Page number for pagination. Default is 1.</li>
  <li><strong>limit (optional):</strong> Number of records per page. Default is 10.</li>
</ul>
<p><strong>Response:</strong></p>
<ul>
  <li><strong>Status Code:</strong> 200 for success, 404 for not found</li>
  <li><strong>Body:</strong> Array of user objects</li>
</ul>
<h3>Get Users by Phone Price</h3>
<p><strong>Endpoint:</strong> /usersByPhonePrice</p>
<p><strong>Method:</strong> GET</p>
<p><strong>Description:</strong> Fetches users based on phone price filter with pagination support.</p>
<p><strong>Query Parameters:</strong></p>
<ul>
  <li><strong>page (optional):</strong> Page number for pagination. Default is 1.</li>
  <li><strong>limit (optional):</strong> Number of records per page. Default is 10.</li>
</ul>
<p><strong>Response:</strong></p>
<ul>
  <li><strong>Status Code:</strong> 200 for success, 404 for not found</li>
  <li><strong>Body:</strong> Array of user objects</li>
</ul>
<h3>Get Users by Last Name starting with "M"</h3>
<p><strong>Endpoint:</strong> /usersByLastNameM</p>
<p><strong>Method:</strong> GET</p>
<p><strong>Description:</strong> Fetches users based on last name filter with pagination support.</p>
<p><strong>Query Parameters:</strong></p>
<ul>
  <li><strong>page (optional):</strong> Page number for pagination. Default is 1.</li>
  <li><strong>limit (optional):</strong> Number of records per page. Default is 10.</li>
</ul>
<p><strong>Response:</strong></p>
<ul>
  <li><strong>Status Code:</strong> 200 for success, 500 for internal server error</li>
  <li><strong>Body:</strong> Array of user objects</li>
</ul>
<h3>Get Users by Car Brand and Email without Digits</h3>
<p><strong>Endpoint:</strong> /usersByCarBrandAndEmailWithoutDigits</p>
<p><strong>Method:</strong> GET</p>
<p><strong>Description:</strong> Fetches users based on car brand and email filters without digits with pagination support.</p>
<p><strong>Query Parameters:</strong></p>
<ul>
  <li><strong>page (optional):</strong> Page number for pagination. Default is 1.</li>
  <li><strong>limit (optional):</strong> Number of records per page. Default is 10.</li>
</ul>
<p><strong>Response:</strong></p>
<ul>
  <li><strong>Status Code:</strong> 200 for success, 404 for not found</li>
  <li><strong>Body:</strong> Array of user objects</li>
</ul>
<h2>Conclusion</h2>
<p>This is the documentation for the User Management API. Please use the provided endpoints and request formats to interact with the API and manage users in the system.</p>
</body>
</html>
