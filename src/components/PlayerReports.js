import React, { useState } from 'react';
import './PlayerReports.css';
import axios from 'axios';

const PlayerReports = () => {
  const [playerName, setPlayerName] = useState('');
  const [playerRole, setPlayerRole] = useState('');
  const [summaryLength, setSummaryLength] = useState(100);
  const [playerPhotoUrl, setPlayerPhotoUrl] = useState('');
  const [response, setResponse] = useState('');
  const [filteredPlayers, setFilteredPlayers] = useState([]);

  const playerPhotos = {
    "Abdul Samad": "/images/Abdul Samad.jpeg",
    "Abhishek Sharma": "/images/Abhishek Sharma.jpeg",
    "Abid Mushtaq": "/images/Abid Mushtaq.jpeg",
    "Abhinav Manohar": "/images/Abhinav Manohar.jpeg",
    "Abishek Porel": "/images/Abishek Porel.jpeg",
    "Adam Zampa": "/images/Adam Zampa.jpeg",
    "Aiden Markram": "/images/Aiden Markram.jpeg",
    "Ajay Mandal": "/images/Ajay Mandal.jpeg",
    "Ajinkya Rahane": "/images/Ajinkya Rahane.jpeg",
    "Akash Deep": "/images/Akash Deep.jpeg",
    "Akash Madhwal": "/images/Akash Madhwal.jpeg",
    "Akash Singh": "/images/Akash Singh.jpeg",
    "Alzarri Joseph": "/images/Alzarri Joseph.jpeg",
    "Amit Mishra": "/images/Amit Mishra.jpeg",
    "Andre Russell": "/images/Andre Russell.jpeg",
    "Angkrish Raghuvanshi": "/images/Angkrish Raghuvanshi.jpeg",
    "Anmolpreet Singh": "/images/Anmolpreet Singh.jpeg",
    "Anrich Nortje": "/images/Anrich Nortje.jpeg",
    "Anshul Kamboj": "/images/Anshul Kamboj.jpeg",
    "Anuj Rawat": "/images/Anuj Rawat.jpeg",
    "Anukul Roy": "/images/Anukul Roy.jpeg",
    "Arjun Tendulkar": "/images/Arjun Tendulkar.jpeg",
    "Arshad Khan": "/images/Arshad Khan.jpeg",
    "Arshdeep Singh": "/images/Arshdeep Singh.jpeg",
    "Arshin Kulkarni": "/images/Arshin Kulkarni.jpeg",
    "Ashton Turner": "/images/Ashton Turner.jpeg",
    "Asthutosh Sharma": "/images/Asthutosh Sharma.jpeg",
    "Atharva Taide": "/images/Atharva Taide.jpeg",
    "Avanish Rao Aravelly": "/images/Avanish Rao Aravelly.jpeg",
    "Avesh Khan": "/images/Avesh Khan.jpeg",
    "Axar Patel": "/images/Axar Patel.jpeg",
    "Ayush Badoni": "/images/Ayush Badoni.jpeg",
    "Azmatullah Omarzai": "/images/Azmatullah Omarzai.jpeg",
    "Bhuvneshwar Kumar": "/images/Bhuvneshwar Kumar.jpeg",
    "Cameron Green": "/images/Cameron Green.jpeg",
    "Chetan Sakariya": "/images/Chetan Sakariya.jpeg",
    "Chris Woakes": "/images/Chris Woakes.jpeg",
    "Darshan Nalkande": "/images/Darshan Nalkande.jpeg",
    "Daryl Mitchell": "/images/Daryl Mitchell.jpeg",
    "David Miller": "/images/David Miller.jpeg",
    "David Warner": "/images/David Warner.jpeg",
    "David Willey": "/images/David Willey.jpeg",
    "Deepak Hooda": "/images/Deepak Hooda.jpeg",
    "Deepak Chahar": "/images/Deepak Chahar.jpeg",
    "Devdutt Padikkal": "/images/Devdutt Padikkal.jpeg",
    "Devon Conway": "/images/Devon Conway.jpeg",
    "Dewald Brevis": "/images/Dewald Brevis.jpeg",
    "Dhruv Jurel": "/images/Dhruv Jurel.jpeg",
    "Dilshan Madushanka": "/images/Dilshan Madushanka.jpeg",
    "Dinesh Karthik": "/images/Dinesh Karthik.jpeg",
    "Donovan Ferreira": "/images/Donovan Ferreira.jpeg",
    "Dushmantha Chameera": "/images/Dushmantha Chameera.jpeg",
    "Faf du Plessis": "/images/Faf du Plessis.jpeg",
    "Fazalhaq Farooqi": "/images/Fazalhaq Farooqi.jpeg",
    "Gerald Coetzee": "/images/Gerald Coetzee.jpeg",
    "Glenn Maxwell": "/images/Glenn Maxwell.jpeg",
    "Glenn Phillips": "/images/Glenn Phillips.jpeg",
    "Hardik Pandya": "/images/Hardik Pandya.jpeg",
    "Harpreet Singh": "/images/Harpreet Singh.jpeg",
    "Harpreet Brar": "/images/Harpreet Brar.jpeg",
    "Harry Brook": "/images/Harry Brook.jpeg",
    "Harshal Patel": "/images/Harshal Patel.jpeg",
    "Harshit Rana": "/images/Harshit Rana.jpeg",
    "Heinrich Klaasen": "/images/Heinrich Klaasen.jpeg",
    "Himanshu Sharma": "/images/Himanshu Sharma.jpeg",
    "Ishan Kishan": "/images/Ishan Kishan.jpeg",
    "Ishant Sharma": "/images/Ishant Sharma.jpeg",
    "Jake Fraser-McGurk": "/images/Jake Fraser-McGurk.jpeg",
    "Jason Behrendorff": "/images/Jason Behrendorff.jpeg",
    "Jasprit Bumrah": "/images/Jasprit Bumrah.jpeg",
    "Jayant Yadav": "/images/Jayant Yadav.jpeg",
    "Jaydev Unadkat": "/images/Jaydev Unadkat.jpeg",
    "Jhathavedh": "/images/Jhathavedh.jpeg",
    "Jhye Richardson": "/images/Jhye Richardson.jpeg",
    "Jitesh Sharma": "/images/Jitesh Sharma.jpeg",
    "Jonny Bairstow": "/images/Jonny Bairstow.jpeg",
    "Jos Buttler": "/images/Jos Buttler.jpeg",
    "Joshua Little": "/images/Joshua Little.jpeg",
    "KS Bharat": "/images/KS Bharat.jpeg",
    "Kagiso Rabada": "/images/Kagiso Rabada.jpeg",
    "Kane Williamson": "/images/Kane Williamson.jpeg",
    "Karn Sharma": "/images/Karn Sharma.jpeg",
    "Kartik Tyagi": "/images/Kartik Tyagi.jpeg",
    "Khaleel Ahmed": "/images/Khaleel Ahmed.jpeg",
    "KL Rahul": "/images/KL Rahul.jpeg",
    "Kohli": "/images/Virat Kohli.jpeg",
    "Krishnappa Gowtham": "/images/Krishnappa Gowtham.jpeg",
    "Krunal Pandya": "/images/Krunal Pandya.jpeg",
    "Kuldeep Yadav": "/images/Kuldeep Yadav.jpeg",
    "Kuldeep Sen": "/images/Kuldeep Sen.jpeg",
    "Kumar Kartikeya": "/images/Kumar Kartikeya.jpeg",
    "Kumar Kushagra": "/images/Kumar Kushagra.jpeg",
    "Kunal Singh Rathore": "/images/Kunal Singh Rathore.jpeg",
    "Lalit Yadav": "/images/Lalit Yadav.jpeg",
    "Liam Livingstone": "/images/Liam Livingstone.jpeg",
    "Lockie Ferguson": "/images/Lockie Ferguson.jpeg",
    "Maheesh Theekshana": "/images/Maheesh Theekshana.jpeg",
    "Mahipal Lomror": "/images/Mahipal Lomror.jpeg",
    "Manav Suthar": "/images/Manav Suthar.jpeg",
    "Manimaran Siddharth": "/images/Manimaran Siddharth.jpeg",
    "Manish Pandey": "/images/Manish Pandey.jpeg",
    "Manoj Bhandage": "/images/Manoj Bhandage.jpeg",
    "Marco Jansen": "/images/Marco Jansen.jpeg",
    "Marcus Stoinis": "/images/Marcus Stoinis.jpeg",
    "Matheesha Pathirana": "/images/Matheesha Pathirana.jpeg",
    "Matthew Wade": "/images/Matthew Wade.jpeg",
    "Mayank Agarwal": "/images/Mayank Agarwal.jpeg",
    "Mayank Dagar": "/images/Mayank Dagar.jpeg",
    "Mayank Markande": "/images/Mayank Markande.jpeg",
    "Mayank Yadav": "/images/Mayank Yadav.jpeg",
    "Mitchell Marsh": "/images/Mitchell Marsh.jpeg",
    "Mitchell Santner": "/images/Mitchell Santner.jpeg",
    "Mitchell Starc": "/images/Mitchell Starc.jpeg",
    "Moeen Ali": "/images/Moeen Ali.jpeg",
    "Mohammed Shami": "/images/Mohammed Shami.jpeg",
    "Mohammed Siraj": "/images/Mohammed Siraj.jpeg",
    "Mohammad Nabi": "/images/Mohammad Nabi.jpeg",
    "Mohit Sharma": "/images/Mohit Sharma.jpeg",
    "Mohsin Khan": "/images/Mohsin Khan.jpeg",
    "MS Dhoni": "/images/MS Dhoni.jpeg",
    "Mujeeb Ur Rahman": "/images/Mujeeb Ur Rahman.jpeg",
    "Mukesh Choudhary": "/images/Mukesh Choudhary.jpeg",
    "Mukesh Kumar": "/images/Mukesh Kumar.jpeg",
    "Mustafizur Rahman": "/images/Mustafizur Rahman.jpeg",
    "Naman Dhir": "/images/Naman Dhir.jpeg",
    "Nandre Burger": "/images/Nandre Burger.jpeg",
    "Nathan Ellis": "/images/Nathan Ellis.jpeg",
    "Navdeep Saini": "/images/Navdeep Saini.jpeg",
    "Naveen-ul-Haq": "/images/Naveen-ul-Haq.jpeg",
    "Nehal Wadhera": "/images/Nehal Wadhera.jpeg",
    "Nicholas Pooran": "/images/Nicholas Pooran.jpeg",
    "Nishant Sindhu": "/images/Nishant Sindhu.jpeg",
    "Nitish Kumar Reddy": "/images/Nitish Kumar Reddy.jpeg",
    "Nitish Rana": "/images/Nitish Rana.jpeg",
    "Noor Ahmad": "/images/Noor Ahmad.jpeg",
    "Nuwan Thushara": "/images/Nuwan Thushara.jpeg",
    "Pat Cummins": "/images/Pat Cummins.jpeg",
    "Phil Salt": "/images/Phil Salt.jpeg",
    "Piyush Chawla": "/images/Piyush Chawla.jpeg",
    "Prabhsimran Singh": "/images/Prabhsimran Singh.jpeg",
    "Prashant Chopra": "/images/Prashant Chopra.jpeg",
    "Prasidh Krishna": "/images/Prasidh Krishna.jpeg",
    "Pravin Dubey": "/images/Pravin Dubey.jpeg",
    "Prince Choudhary": "/images/Prince Choudhary.jpeg",
    "Prerak Mankad": "/images/Prerak Mankad.jpeg",
    "Prithvi Shaw": "/images/Prithvi Shaw.jpeg",
    "Quinton de Kock": "/images/Quinton de Kock.jpeg",
    "Rachin Ravindra": "/images/Rachin Ravindra.jpeg",
    "Rahmanullah Gurbaz": "/images/Rahmanullah Gurbaz.jpeg",
    "Rahul Chahar": "/images/Rahul Chahar.jpeg",
    "Rahul Tewatia": "/images/Rahul Tewatia.jpeg",
    "Rahul Tripathi": "/images/Rahul Tripathi.jpeg",
    "Rajan Kumar": "/images/Rajan Kumar.jpeg",
    "Rajan Patidar": "/images/Rajan Patidar.jpeg",
    "Rajvardhan Hangargekar": "/images/Rajvardhan Hangargekar.jpeg",
    "Ramandeep Singh": "/images/Ramandeep Singh.jpeg",
    "Rashid Khan": "/images/Rashid Khan.jpeg",
    "Rasikh Dar": "/images/Rasikh Dar.jpeg",
    "Ravi Bishnoi": "/images/Ravi Bishnoi.jpeg",
    "Ravichandran Ashwin": "/images/Ravichandran Ashwin.jpeg",
    "Ravindra Jadeja": "/images/Ravindra Jadeja.jpeg",
    "Reece Topley": "/images/Reece Topley.jpeg",
    "Ricky Bhui": "/images/Ricky Bhui.jpeg",
    "Rilee Rossouw": "/images/Rilee Rossouw.jpeg",
    "Rinku Singh": "/images/Rinku Singh.jpeg",
    "Rishabh Pant": "/images/Rishabh Pant.jpeg",
    "Rishi Dhawan": "/images/Rishi Dhawan.jpeg",
    "Riyan Parag": "/images/Riyan Parag.jpeg",
    "Robbin Minz": "/images/Robbin Minz.jpeg",
    "Rohit Sharma": "/images/Rohit Sharma.jpeg",
    "Romario Shepherd": "/images/Romario Shepherd.jpeg",
    "Rovman Powell": "/images/Rovman Powell.jpeg",
    "Ruturaj Gaikwad": "/images/Ruturaj Gaikwad.jpeg",
    "Sai Kishore": "/images/Sai Kishore.jpeg",
    "Sai Sudharsan": "/images/Sai Sudharsan.jpeg",
    "Sakib Hussain": "/images/Sakib Hussain.jpeg",
    "Sam Curran": "/images/Sam Curran.jpeg",
    "Sammer Rizvi": "/images/Sammer Rizvi.jpeg",
    "Sandeep Sharma": "/images/Sandeep Sharma.jpeg",
    "Sanju Samson": "/images/Sanju Samson.jpeg",
    "Sanvir Singh": "/images/Sanvir Singh.jpeg",
    "Saurav Chauhan": "/images/Saurav Chauhan.jpeg",
    "Shahbaz Ahmed": "/images/Shahbaz Ahmed.jpeg",
    "Shahrukh Khan": "/images/Shahrukh Khan.jpeg",
    "Shai Hope": "/images/Shai Hope.jpeg",
    "Shaik Rasheed": "/images/Shaik Rasheed.jpeg",
    "Shamar Joseph": "/images/Shamar Joseph.jpeg",
    "Shams Mulani": "/images/Shams Mulani.jpeg",
    "Shardul Thakur": "/images/Shardul Thakur.jpeg",
    "Shashank Singh": "/images/Shashank Singh.jpeg",
    "Sherfane Rutherford": "/images/Sherfane Rutherford.jpeg",
    "Shikhar Dhawan": "/images/Shikhar Dhawan.jpeg",
    "Shimron Hetmyer": "/images/Shimron Hetmyer.jpeg",
    "Shivalik Sharma": "/images/Shivalik Sharma.jpeg",
    "Shivam Dube": "/images/Shivam Dube.jpeg",
    "Shivam Mavi": "/images/Shivam Mavi.jpeg",
    "Shivam singh": "/images/Shivam singh.jpeg",
    "Shreyas Iyer": "/images/Shreyas Iyer.jpeg",
    "Shreyas Gopal": "/images/Shreyas Gopal.jpeg",
    "Shubham Dubey": "/images/Shubham Dubey.jpeg",
    "Shubman Gill": "/images/Shubman Gill.jpeg",
    "Sikandar Raza": "/images/Sikandar Raza.jpeg",
    "Simarjeet Singh": "/images/Simarjeet Singh.jpeg",
    "Spencer Johnson": "/images/Spencer Johnson.jpeg",
    "Sunil Narine": "/images/Sunil Narine.jpeg",
    "Sumit Kumar": "/images/Sumit Kumar.jpeg",
    "SuryaKumar Yadav": "/images/SuryaKumar Yadav.jpeg",
    "Suyash Sharma": "/images/Suyash Sharma.jpeg",
    "Sushant Mishra": "/images/Sushant Mishra.jpeg",
    "Suyash Prabhudessai": "/images/Suyash Prabhudessai.jpeg",
    "Swapnil Singh": "/images/Swapnil Singh.jpeg",
    "Swastik Chikara": "/images/Swastik Chikara.jpeg",
    "T Natarajan": "/images/T Natarajan.jpeg",
    "Tanay Thyagarajan": "/images/Tanay Thyagarajan.jpeg",
    "Tilak Varma": "/images/Tilak Varma.jpeg",
    "Tim David": "/images/Tim David.jpeg",
    "Tom Curran": "/images/Tom Curran.jpeg",
    "Tom Kohler-Cadmore": "/images/Tom Kohler-Cadmore.jpeg",
    "Travis Head": "/images/Travis Head.jpeg",
    "Trent Boult": "/images/Trent Boult.jpeg",
    "Tristan Stubbas": "/images/Tristan Stubbas.jpeg",
    "Tushar Deshpande": "/images/Tushar Deshpande.jpeg",
    "Umesh Yadav": "/images/Umesh Yadav.jpeg",
    "Umran Malik": "/images/Umran Malik.jpeg",
    "Upendra Yadav": "/images/Upendra Yadav.jpeg",
    "Vaibhav Arora": "/images/Vaibhav Arora.jpeg",
    "Venkatesh Iyer": "/images/Venkatesh Iyer.jpeg",
    "Varun Chakaravarthy": "/images/Varun Chakaravarthy.jpeg",
    "Vicky Ostwal": "/images/Vicky Ostwal.jpeg",
    "Vidwath Kaverappa": "/images/Vidwath Kaverappa.jpeg",
    "Vijay Shankar": "/images/Vijay Shankar.jpeg",
    "Virat Kohli": "/images/Virat Kohli.jpeg",
    "Virat": "/images/Virat Kohli.jpeg",
    "Vishnu Vinod": "/images/Vishnu Vinod.jpeg",
    "Vishwanath Pratp Singh": "/images/Vishwanath Pratp Singh.jpeg",
    "Vyshak Vijay Kumar": "/images/Vyshak Vijay Kumar.jpeg",
    "Wanindu Hasaranga": "/images/Wanindu Hasaranga.jpeg",
    "Washington Sundar": "/images/Washington Sundar.jpeg",
    "Will Jacks": "/images/Will Jacks.jpeg",
    "Yash Dayal": "/images/Yash Dayal.jpeg",
    "Yash Dhull": "/images/Yash Dhull.jpeg",
    "Yash Thakur": "/images/Yash Thakur.jpeg",
    "Yashavi Jaiswal": "/images/Yashavi Jaiswal.jpeg",
    "Yudhvir Singh Charak": "/images/Yudhvir Singh Charak.jpeg",
    "Yuzvendra Chahal": "/images/Yuzvendra Chahal.jpeg",
};


const handleNameChange = (event) => {
  const selectedName = event.target.value;
  setPlayerName(selectedName);
  if (selectedName) {
    const filtered = Object.keys(playerPhotos).filter((name) =>
      name.toLowerCase().startsWith(selectedName.toLowerCase())
    );
    setFilteredPlayers(filtered);
  } else {
    setFilteredPlayers([]);
  }
};

const handleRoleChange = (event) => {
  setPlayerRole(event.target.value);
};

const handleSummaryLengthChange = (event) => {
  setSummaryLength(event.target.value);
};

const handleGenerate = async (e) => {
  e.preventDefault();
  try {
    const result = await axios.post('https://e3ba-34-19-44-165.ngrok-free.app/query', {
      query: playerName
    });
    setResponse(result.data.answer);
    const photoUrl = playerPhotos[playerName] || 'https://via.placeholder.com/150';
    setPlayerPhotoUrl(photoUrl);
  } catch (error) {
    console.error('Error querying the backend:', error);
    setResponse('Error querying the backend. Please check the console for more details.');
  }
};

return (
  <div className="player-reports-container">
    <div className="form-container">
      <h2>Player Report</h2>
      <form onSubmit={handleGenerate}>
        <div className="form-group">
          <label>
            Player Name:
            <input
              type="text"
              value={playerName}
              onChange={handleNameChange}
              list="playerNameSuggestions"
            />
            <datalist id="playerNameSuggestions">
              {filteredPlayers.map((name) => (
                <option key={name} value={name} />
              ))}
            </datalist>
          </label>
        </div>
      
        <button type="submit">Generate</button>
      </form>
    </div>
    <div className="summary-display1">
      {response && (
        <>
          <div className="player-photo">
            <img src={playerPhotoUrl} alt="Player" />
          </div>
          <div className="summary-display">
            <h3>Summary:</h3>
            <p>{response}</p>
          </div>
        </>
      )}
    </div>
  </div>
);
};

export default PlayerReports;