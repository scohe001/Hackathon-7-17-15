import json

fhand = open('database.json', 'r')
data = json.loads(str(fhand.read()))
fhand.close()

data["NumPeopleToday"] = 0

fhand = open('database.json', 'w')
fhand.write(json.dumps(data))
fhand.close()
