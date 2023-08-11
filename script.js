const convertBtn = document.getElementById('convertBtn');
const celsiusInput = document.getElementById('celsius');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    resultDiv.textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  } else {
    resultDiv.textContent = 'Please enter a valid temperature.';
  }
});
