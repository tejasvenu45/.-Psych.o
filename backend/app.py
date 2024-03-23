from flask import Flask, request, jsonify, redirect, url_for, session
from flask_cors import CORS
from pymongo import MongoClient
from hashlib import sha256
import re

app = Flask(__name__)
client = MongoClient("mongodb://localhost:27017")
db = client['FLASK_DB']
signup = db["signup"]
input = db['prompt']
CORS(app, origins="*")

app.secret_key = "PASSWORD"

@app.route('/')
def home():
    return "<>HOME</>"

@app.route('/name', methods=['POST'])
def name():
    data = request.json
    name = data.get("name")
    if name:
        myname.insert_one({"name": name})
        return jsonify({"message": "Name inserted successfully"}), 200
    else:
         return jsonify({"error": "Name not provided"}), 400

@app.route('/register', methods=['POST'])
def register():
    # name = request.json['name']
    # username = request.json['username']
    email = request.json['email']
    password = request.json['password']
    # phone = request.json["phone"]

    print(email, password)

    if not re.match(r'[^@]+@[^@]+\.[^@]+', email):
        print('Invalid email address')

    elif not password or not email:
        print('Please fill out all the form fields')

    else:
        account1 = signup.find_one({'email': email})
        if account1:
            print('User with the specified credentials already exists.')
            return jsonify({"message": "Cannot insert"}), 404

        else:
            hashed_password = sha256(password.encode()).hexdigest()
            user = {'password': hashed_password, 'email': email}
            signup.insert_one(user)
            return jsonify({"message": "Inserted successfully"}), 200

@app.route('/login', methods=['POST'])
def Login():
    if request.method == 'POST':
        email = request.json["email"]
        password = request.json["password"]

        account = signup.find_one({"email":email})

        if account and account['password'] == sha256(password.encode()).hexdigest():
            session['loggedin'] = True
            session['email'] = account['email']
            print("User successfully logged in")
            return jsonify({"message":"logged in"}), 200
        
        else:
            print("User has not logged in")
            return jsonify({"message":"not logged in"}), 404

@app.route('/chatbot', methods = ['POST'])
def chat():
    try:
        prompt = request.json["prompt"]
        index = request.json["index"]
        print("This is the prompt:", prompt)
        print("PROMPT TYPE - ", type(prompt))
        # if index:
        #     index = index + 1
        return jsonify({"response": prompt}), 200
    except KeyError:
        return jsonify({"error": "Key 'prompt' not found in JSON request"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)

# threading.Thread(target=app.run, kwargs={"use_reloader": False}).start()