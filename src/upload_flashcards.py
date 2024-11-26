import boto3
import json

# Initialize DynamoDB resource and the DynamoDB table
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('memora-flashcard-db')

# Load the flashcards data from JSON file
with open('flashcardsData.JSON') as f:
    flashcards_data = json.load(f)

# Loop through the flashcards and put them into DynamoDB
for card in flashcards_data:
    # Assuming 'id' is unique and 'topic' is the partition key
    try:
        response = table.put_item(
            Item={
                'id': card['id'],  # Unique identifier
                'topic': card['topic'],
                'question': card['question'],
                'answer': card['answer'],
            }
        )
        print(f"Successfully inserted flashcard: {card['id']}")
    except Exception as e:
        print(f"Error inserting flashcard {card['id']}: {str(e)}")