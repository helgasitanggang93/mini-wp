# mini-wp

## Signup

- END POINT = /signup

- METHODS = POST

- INPUT = body{name, email, password}

- OUTPUT(SUCCESS) = 201{msg: register success}

- OUTPUT(ERROR) = 400{error}

## Login 

- END POINT = /login

- METHODS = POST

- INPUT = body{email, password}

- OUTPUT(SUCCESS) = 201{msg:you have successly logged in, token}

- OUTPUT(ERROR) = 400{error}

## Upload Photo to GCS
- END POINT = /upload

- METHODS = POST

- INPUT = form-data{image: file}

- OUTPUT(SUCCESS) = 200{msg, link}

- OUTPUT(ERROR) = 400{error}

## Show All User Article
- END POINT = /

- METHODS = GET

- INPUT = -

- OUTPUT(SUCCESS) = 200{_id,title,content,author,image,createdAt, user_Id}

- OUTPUT(ERROR) = 400{error}

## Create Article
- END POINT = /miniwp

- METHODS = POST

- INPUT = body{title, content, image, author}

- OUTPUT(SUCCESS) = 201{_id,title,image,author,content,}

- OUTPUT(ERROR) = 400{error}

## Populate Article/Update
- END POINT = /:id

- METHODS = GET

- INPUT = params{_id}

- OUTPUT(SUCCESS) = 200{_id,title,content,author,image,createdAt, user_Id}

- OUTPUT(ERROR) = 404{error}

## Update Article

- END POINT = /miniwp/:id

- METHODS = PUT

- INPUT = params{id:miniWpID}

- OUTPUT(SUCCESS) = 201{message}

- OUTPUT(ERROR) = 400{error}

## Delete Article

- END POINT = /todos/:id

- METHODS = DELETE

- INPUT = params{id:todoID}

- OUTPUT(SUCCESS) = 201{message}

- OUTPUT(ERROR) = 400{error}

## Google sign in

- END POINT = /gSign

- METHODS = POST

- INPUT = body{email,password}

- OUTPUT(SUCCESS) = 200 { message, token, details }

- OUTPUT(ERROR) = 400{error}




