### Clear installed chromedriver information
awk '!/\"chromedriver\":/' package.json > temp && mv temp package.json