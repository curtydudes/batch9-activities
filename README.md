## API Wrapper using RAWG.IO
###### Avion School Rails Activity 

![image](https://user-images.githubusercontent.com/81552806/135697249-72df2bf4-1b41-4f83-9dee-3032b4c1bcf6.png)

## References: 
###### API Docs: https://rawg.io/apidocs
###### Documentation link: https://api.rawg.io/docs/

## How to use the RAWG.IO API?
###### Go to RAWG.IO and create an account
###### Push the API Button in the top right and will lead you to another page. Press the said button in the image. 
![image](https://user-images.githubusercontent.com/81552806/135697563-f1cea2f7-9ab0-4ddd-8670-700a8a4493f6.png)
###### This will lead you to the page to get your own API Key. Take note that the key expires in a month after you activate it. 
###### *Highly Recommended: Clone a repository into your work.* 
###### REST is used for this API Wrapper project so go ahead and follow the instructions here: https://rubygems.org/gems/rest-client/versions/2.1.0 to install the REST Gem. 
###### You may read more of the documentation by checking out this link: https://github.com/rest-client/rest-client
###### Once you have everything set and read, run bundle install.
``` 
run bundle install
```
## Using the API Wrapper
###### You may now call on the API from RAWG as you follow the documentation of REST-Client here: https://rubydoc.info/github/rest-client/rest-client/master
###### You may test the API via Postman.

## Checking out my code
###### If you're going to check out my code, these are the routes or data that I got from API to my localhost. 
```
  namespace :api do
    get '/creator-roles' => 'creator_roles#index'
    get '/developers' => 'developers#index'
    get '/genres' => 'genres#index'
    get '/platforms' => 'platforms#index'
    get '/platforms_parents' => 'platforms_parents#index'
    get '/creator-roles' => 'creator_roles#index'
  namespace :rawgames do
      get '/games' => 'games#index'
    end
  end
 ```
 ###### As you noticed, I created another subfolder in my controller folder hence the nesting of :rawgames in the routing. I wanted to experiment on the namespacing assuming that I created another subfolder. I wanted to see what changes will happen. I let the changes stay there so I will also have my own reference. 
