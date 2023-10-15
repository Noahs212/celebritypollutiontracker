from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Replace 'YOUR_API_KEY' with your actual AviationStack API key
API_KEY = "947ef17ad2420b1a1d3d34058504eac3"
AVIATION_STACK_API_URL = 'http://api.aviationstack.com/v1/flights?access_key=947ef17ad2420b1a1d3d34058504eac3'
FLIGHT_AWARE_API_KEY = '5lGfRMawtHueqNaOk24MgDdwt78R7aDf'

@app.route('/')
def index():
    return 'Welcome to the AviationStack API!'
# Define a route to retrieve flight information
@app.route('/aero', methods=['GET'])
def get_flight():

@app.route('/getflight', methods=['GET'])
def get_historical_flight_info():
    # Define the base URL
    base_url = 'http://api.aviationstack.com/v1/airplanes?access_key=947ef17ad2420b1a1d3d34058504eac3'

    # Make the GET request
    response = requests.get(base_url)
   
    print(response)
    print(response.status_code)
    if response.status_code == 200:
        flight_data = response.json()
        return jsonify(flight_data)
    else:
        return jsonify({'error': 'Failed to retrieve historical flight information'}), 500
    

@app.route('/getflightinfo', methods=['GET'])
def get_flight_info():
    registration_number = "N844UAjhgh"
    

    if not registration_number:
        return jsonify({'error': 'Please provide a registration number'}), 400

    params = {
        'access_key': API_KEY,
        'limit': 20,
        'search': registration_number
    }

    try:
        response = requests.get(AVIATION_STACK_API_URL, params=params)
        data = response.json()

        if response.status_code == 200:
            # Check if there is airplane data in the response
            if data.get('data'):
                return jsonify(data['data'][0])
            else:
                return jsonify({'error': 'No flight information found for the given registration number'}), 404
        else:
            return jsonify({'error': 'Error fetching flight information'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
