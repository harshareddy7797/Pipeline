pipeline {
   agent any
   
   stages {
        stage('Cleanup') {
         steps {
            cleanWs()
         }
      }
      stage('Welcome') {
         steps {
            echo 'Welcome'
         }
      }
      stage('Codecheckout') {
         steps {
           git branch: 'main', url: 'https://github.com/harshareddy7797/Pipeline.git'
         }
      }
   }
}
      
