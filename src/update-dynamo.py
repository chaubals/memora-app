import boto3

# Initialize DynamoDB client
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('memora-flashcard-db')

# Scan table and handle pagination (if needed)
response = table.scan()

# Iterate through the items
while True:
    for item in response['Items']:  # Correct key is 'Items', not 'items'
        # Iterate through all attributes in the item
        for key, value in item.items():
            if isinstance(value, str) and value == "C#":  # Check if the value is exactly "C#"
                item[key] = "CSharp"  # Replace "C#" with "CSharp"

        # Update the item in the table
        table.put_item(Item=item)  # Put the updated item back into the table
        print(f"Updated item: {item}")
    
    # Check if there are more items to scan (pagination)
    if 'LastEvaluatedKey' in response:
        response = table.scan(ExclusiveStartKey=response['LastEvaluatedKey'])
    else:
        break
