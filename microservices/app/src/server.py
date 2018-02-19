# Importing necessary classes and methods
from flask import Flask,request,render_template,redirect,jsonify
from urllib.parse import unquote
from wit import Wit
import json

# Creating an instance of Flask class
app = Flask(__name__)
@app.route('/')
def start():
	return "Welcome to the application."

# Displaying a textbox, sending the data as POST to another endpoint
# Log the data to stdout
# This endpoint accepts both GET and POST requests
@app.route('/query')
def input_func():
	input_text = request.args.get('input')
	print(input_text)
	input_text = unquote(input_text)
	print(input_text)
	#input_text = request.form['input']
	if input_text.strip() != "":
		# The client access token of the wit.ai app
		access_token = "EJGNYVPJ7SXYETU2FAHNRCYAQJGR7YO7"
		# Creating a client instance and passing the input
		client = Wit(access_token)
		resp = client.message(input_text)
		confidence = 0
		value = "None"
		data = {} 

		for i in resp["entities"]:
			temp = resp["entities"][i][0]["confidence"]
			if temp > confidence:
				confidence = temp
				entity = i
				value = resp["entities"][i][0]["value"]

			# The entity identified from the given input
			if confidence > 0:
				data["entity"] = entity
				data["value"] = value
				return jsonify(data)

# Run the file
if __name__ == '__main__':
    app.run()