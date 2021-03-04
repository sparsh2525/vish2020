from flask import Flask , request
from flask_cors import CORS
from flask_mysqldb import MySQL

import pickle
import numpy as np

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

model = pickle.load(open('VMode.pkl' , 'rb'))

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'Kunal@1999'
app.config['MYSQL_DB'] = 'CBASE'

mysql = MySQL(app)

@app.route('/', methods = ['POST'])
def index():
    data = request.get_json()
    features = [int(x) for x in data]
    fin = [np.array(features)]

    prediction = model.predict_proba(fin)
    output='{0:.{1}f}'.format(prediction[0][1], 2)

    #print(output)
    return '{}'.format(output)

@app.route('/insert' , methods = ['POST'])
def insert():
    data = request.get_json()
    print(data)
    cur = mysql.connection.cursor()
    #Execute statement : cur.execute(quer)
    mysql.connection.commit()
    cur.close()
    return '<h1>Kunal</h1>'
    
if __name__ == '__main__':
    app.run(debug = True)