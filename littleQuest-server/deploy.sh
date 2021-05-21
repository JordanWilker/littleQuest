dotnet publish -c Release
docker build -t littleQuest .
docker tag littleQuest registry.heroku.com/littleQuest-130/web
docker push registry.heroku.com/littleQuest-130/web
heroku container:release web -a littleQuest-130
echo press any key
read end