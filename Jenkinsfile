pipeline {
  environment{
    GIT_BRANCH = "main"
    IMAGE_NAME = "azevedoc/leo-web-app"
    CONTAINER_NAME = "leo-demo-test"
    DOCKER_PORTS_EXPOSED = "5000:5500"
  }
   agent any
   stages {
     stage('Cloning Git') {
       steps{
         git(
            url: 'https://gitlab.com/leonardo.dmeirelles/pdf-generator.git',
            branch: "${GIT_BRANCH}"
         )
        }
       }
     stage('Building image') {
       steps {
         sh "docker build . -t $IMAGE_NAME"
       }
     }
     stage('Running image') {
       steps {
         sh "docker run -p $DOCKER_PORTS_EXPOSED -d --name $CONTAINER_NAME $IMAGE_NAME"
       }
     }
    }
}
