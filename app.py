from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>Loan & KYC App organized ✅</h1>"

if __name__ == "__main__":
    app.run()
