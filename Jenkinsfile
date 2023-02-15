pipeline {
   agent any
   
   stages {
        stage('Cleanup') {
         steps {
            cleanWs()
         }
      }
      
      stage('Codecheckout') {
         steps {
           git branch: 'main', url: 'https://github.com/harshareddy7797/Pipeline.git'
         }
      }
      
      stage('Codebuild') {
         steps {
            docker build . -t image1
            docker run -dp 8080:8080 --name container1
         }
      }
   }
}
      
