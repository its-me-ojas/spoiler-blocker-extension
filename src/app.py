from flask import Flask, request, jsonify
from spoiler_blocker import spoiler_blocker

app = Flask(__name__)


@app.route('/detect_spoiler', methods=['POST'])
def detect_spoiler():
    data = request.json
    text = data['text']
    spoiler_words = data['spoiler_words']
    result = spoiler_blocker(text, spoiler_words)
    return jsonify({'spoiler_detected': result})


if __name__ == '__main__':
    app.run(port=5001)
