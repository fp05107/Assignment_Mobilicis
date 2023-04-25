import './App.css';
import Filters from './Components/Filters';
import UserTable from './Components/UserTable';

function App() {
  const handleEdit = (userId) => {
    // Logic for handling edit user action
    console.log(`Editing user with ID: ${userId}`);
  };

  // Delete user event handler
  const handleDelete = (userId) => {
    // Logic for handling delete user action
    console.log(`Deleting user with ID: ${userId}`);
  };
  const users = [
    {
      "id": 1,
      "first_name": "Inglis",
      "last_name": "McMurty",
      "email": "imcmurty0@youku.com",
      "gender": "Male",
      "income": 1.36,
      "city": "Las Flores",
      "car": "Hummer",
      "quote": "optimize web-enabled relationships",
      "phone_price": 22236
  },
  {
      "id": 2,
      "first_name": "Hersh",
      "last_name": "Reynault",
      "email": "hreynault1@jimdo.com",
      "gender": "Male",
      "income": 0.36,
      "city": "Lianran",
      "car": "Mazda",
      "quote": "deploy revolutionary eyeballs",
      "phone_price": 56191
  },
  {
      "id": 3,
      "first_name": "Morissa",
      "last_name": "Blew",
      "email": "mblew2@rediff.com",
      "gender": "Female",
      "income": 8.11,
      "city": "Platagata",
      "car": "Pontiac",
      "quote": "synthesize enterprise solutions",
      "phone_price": 96796
  },
  {
      "id": 4,
      "first_name": "Nicko",
      "last_name": "Chetwind",
      "email": "nchetwind3@ow.ly",
      "gender": "Male",
      "income": 0.26,
      "city": "Shancheng",
      "car": "Mercury",
      "quote": "envisioneer dot-com users",
      "phone_price": 63907
  },
  {
      "id": 5,
      "first_name": "Darn",
      "last_name": "Chisolm",
      "email": "dchisolm4@163.com",
      "gender": "Male",
      "income": 7.54,
      "city": "Honggang",
      "car": "Subaru",
      "quote": "benchmark user-centric niches",
      "phone_price": 26268
  },
  {
      "id": 6,
      "first_name": "Christine",
      "last_name": "Duggan",
      "email": "cduggan5@cloudflare.com",
      "gender": "Female",
      "income": 7.46,
      "city": "Liangshuihe",
      "car": "Mazda",
      "quote": "innovate dynamic partnerships",
      "phone_price": 26859
  },
  {
      "id": 7,
      "first_name": "Peg",
      "last_name": "Francke",
      "email": "pfrancke6@goodreads.com",
      "gender": "Female",
      "income": 2.73,
      "city": "Medvedok",
      "car": "Lexus",
      "quote": "repurpose strategic markets",
      "phone_price": 33302
  },
  {
      "id": 8,
      "first_name": "Marris",
      "last_name": "Leabeater",
      "email": "mleabeater7@blogspot.com",
      "gender": "Female",
      "income": 6.23,
      "city": "Harrisburg",
      "car": "Cadillac",
      "quote": "optimize leading-edge interfaces",
      "phone_price": 54406
  },
  {
      "id": 9,
      "first_name": "Wernher",
      "last_name": "Rowles",
      "email": "wrowles8@alexa.com",
      "gender": "Male",
      "income": 4.42,
      "city": "Kadaka",
      "car": "Mercedes-Benz",
      "quote": "repurpose one-to-one applications",
      "phone_price": 56341
  },
  {
      "id": 10,
      "first_name": "Bennie",
      "last_name": "Steadman",
      "email": "bsteadman9@constantcontact.com",
      "gender": "Male",
      "income": 9.13,
      "city": "Luisiana",
      "car": "Lincoln",
      "quote": "implement out-of-the-box web services",
      "phone_price": 20938
  },
  {
      "id": 11,
      "first_name": "Quinn",
      "last_name": "Janny",
      "email": "qjannya@tumblr.com",
      "gender": "Male",
      "income": 4.11,
      "city": "Tungawan",
      "car": "Chevrolet",
      "quote": "maximize ubiquitous mindshare",
      "phone_price": 77055
  },
  {
      "id": 12,
      "first_name": "Cassy",
      "last_name": "Armes",
      "email": "carmesb@illinois.edu",
      "gender": "Female",
      "income": 8.25,
      "city": "Guli",
      "car": "Scion",
      "quote": "reinvent visionary experiences",
      "phone_price": 71103
  },
  {
      "id": 13,
      "first_name": "Byrom",
      "last_name": "Martynov",
      "email": "bmartynovc@disqus.com",
      "gender": "Male",
      "income": 4.18,
      "city": "Fès",
      "car": "Dodge",
      "quote": "iterate integrated bandwidth",
      "phone_price": 16984
  },
  {
      "id": 14,
      "first_name": "Alain",
      "last_name": "Fairlam",
      "email": "afairlamd@tamu.edu",
      "gender": "Genderqueer",
      "income": 9.62,
      "city": "Myitkyina",
      "car": "Maybach",
      "quote": "reintermediate web-enabled infrastructures",
      "phone_price": 77643
  },
  {
      "id": 15,
      "first_name": "Bald",
      "last_name": "Worsham",
      "email": "bworshame@cbc.ca",
      "gender": "Male",
      "income": 4.74,
      "city": "Kalininaul",
      "car": "Volkswagen",
      "quote": "revolutionize 24/365 interfaces",
      "phone_price": 8378
  },
  {
      "id": 16,
      "first_name": "Rivkah",
      "last_name": "Skip",
      "email": "rskipf@infoseek.co.jp",
      "gender": "Female",
      "income": 7.24,
      "city": "Lau",
      "car": "Chevrolet",
      "quote": "grow viral systems",
      "phone_price": 27098
  },
  {
      "id": 17,
      "first_name": "Mandi",
      "last_name": "Lindroos",
      "email": "mlindroosg@bizjournals.com",
      "gender": "Female",
      "income": 6.62,
      "city": "Xingdian",
      "car": "Pontiac",
      "quote": "visualize impactful vortals",
      "phone_price": 95048
  },
  {
      "id": 18,
      "first_name": "Dredi",
      "last_name": "Allans",
      "email": "dallansh@youku.com",
      "gender": "Female",
      "income": 0.53,
      "city": "Huacapampa",
      "car": "Chevrolet",
      "quote": "syndicate collaborative web services",
      "phone_price": 85932
  },
  {
      "id": 19,
      "first_name": "Ginger",
      "last_name": "Frean",
      "email": "gfreani@nba.com",
      "gender": "Male",
      "income": 1.04,
      "city": "Talisay",
      "car": "Mercedes-Benz",
      "quote": "morph granular e-tailers",
      "phone_price": 53043
  },
  {
      "id": 20,
      "first_name": "Fergus",
      "last_name": "Masham",
      "email": "fmashamj@shutterfly.com",
      "gender": "Male",
      "income": 3.82,
      "city": "Budapest",
      "car": "Lexus",
      "quote": "facilitate strategic niches",
      "phone_price": 77228
  }
  ];
  return (
    <div className="App"> 
      <Filters />
      <UserTable users={users} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
