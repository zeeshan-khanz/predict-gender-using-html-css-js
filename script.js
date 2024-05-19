const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name');
const resultDiv = document.getElementById('result');
const emojiDiv = document.getElementById('emoji');

const maleNames = [
  'Muhammad',
  'Ali',
  'Amir',
  'Hamza',
  'Hassan',
  'Idris',
  'Kareem',
  'Malik',
  'Nasir',
  'Omar',
  'Samir',
  'Zayn',
  'Akram',
  'Bilal',
  'Daniyal',
  'Farid',
  'Marwan',
  'Nazih',
  'Qasim',
  'Suhail',
  'Tariq',
  'Yusuf',
  'Abdullah',
  'Abdul',
  'Ahmed',
  'Ayan',
  'Aziz',
  'Faisal',
  'Hakeem',
  'Ibrahim',
  'Ismail',
  'Jamal',
  'Javed',
  'Khaled',
  'Latif',
  'Majid',
  'zeeshan',
  'Nabil',
  'Rashid',
  'Saad',
  'Tahir',
  'Usman',
  'Waleed',
  'Yasin',
  'Zahid'
];

const femaleNames = [
  'Aisha',
  'Fatima',
  'Aliya',
  'Amina',
  'Fatimah',
  'Hafsa',
  'Haleema',
  'Iman',
  'Jamila',
  'Khadija',
  'Layla',
  'Mahdiya',
  'Maryam',
  'Naima',
  'Nur',
  'Rashida',
  'Safiya',
  'Sara',
  'Sumaya',
  'Ummaya',
  'Zainab',
  'Aida',
  'Bilqees',
  'Dana',
  'Eshal',
  'Fatima',
  'Ghufraan',
  'Hiba',
  'Iffat',
  'Jawairia',
  'Khawla',
  'Lubna',
  'Maheen',
  'Nadia',
  'Omaima',
  'Qurrat',
  'Rabia',
  'Saba',
  'Tahira',
  'Umama',
  'Vasoomeh',
  'Malaikazeeshan',
  'Yasmeen',
  'Zara'

];

nameForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  if (name === '') {
    resultDiv.textContent = 'Please enter a name.';
    return;
  }

  let gender = '';

  if (maleNames.includes(name)) {
    gender = 'Male';
    emojiDiv.textContent = '♂️';
  } else if (femaleNames.includes(name)) {
    gender = 'Female';
    emojiDiv.textContent = '♀️';
  } else {
    gender = 'Unknown';
    emojiDiv.textContent = '🤷';
  }

  resultDiv.textContent = `The name ${name} is ${gender}.`;
});