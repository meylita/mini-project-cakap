# How to run
1. 'npm install' for install library
2. 'ng serve' for running project. Navigate to `http://localhost:4200/`

# Description of the project
1. Data API from https://api.github.com/users, 
2. database field login, example: mojombo for input username in http://localhost:4200/signin
3. In page first input username, then click submit then direct to Profile Page
4. In profile page, can see data the information about that users, also can see
button repository and back. If click Back then redirect into first page, If click
repository button got redirection into My Repositories Page
5. In my repository page, can see list of that user repositories.
   In each repositories thumbnail can see below:
- Owner and repository name
- Total starts
- Total watch
- Total fork
- Project language
- Project size
- Forking URL
- Description (if description is NULL, “Description is not
available for this project” message)

# How to build
1. npm run build
2. copy folder 'mini-project' from dist folder, move to server

 or

 1. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
