import os
from dotenv import load_dotenv
import openai
from flask import Flask, request, jsonify

load_dotenv()

OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')

if not OPENAI_API_KEY:
    raise ValueError('OpenAI API key not found. Please set the OPENAI_API_KEY environment variable.')

app = Flask(__name__)
openai.api_key = OPENAI_API_KEY

@app.route('/analyze', methods=['POST'])
def analyze_job_description():
    job_description = request.json['job_description']
    prompt = f"Analyze the following job description:\n{job_description}\n\n"
    completions = openai.Completion.create(
        engine='text-davinci-002',
        prompt=prompt,
        max_tokens=1024,
        n=1,
        stop=['\n'],
    )
    analysis = completions.choices[0].text
    return jsonify({'analysis': analysis})

if __name__ == '__main__':
    app.run()
