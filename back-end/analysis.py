import os
from dotenv import load_dotenv
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS

load_dotenv()
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
if not OPENAI_API_KEY:
    raise ValueError(
        'OpenAI API key not found. Please set the OPENAI_API_KEY environment variable.')

app = Flask(__name__)
cors = CORS(app)

openai.api_key = OPENAI_API_KEY
openai.organization = 'org-OFE4WerWKWdfics5VXzrOu6e'
MODEL = "gpt-3.5-turbo"


@app.route('/analyze', methods=['POST'])
def analyze_job_description():
    final_results = list()
    job_description = request.json['job_description']
    prompts = [
        'Summarize this job description for an applicant:',
        'I am applying for this job, what could be possible questions for this job description:',
    ]

    for prompt in prompts:
        prompt_with_description = prompt + ' ' + job_description
        completions = openai.ChatCompletion.create(
            model=MODEL,
            temperature=0.3,
            messages=[{"role": "user", "content": prompt_with_description}],
            stop=None,
            timeout=15,
        )
        final_results.append(completions.choices[0].message.content)
    return jsonify([{
        'summary': final_results[0],
        'questions': final_results[1],
    }])


if __name__ == '__main__':
    app.run()
