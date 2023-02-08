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
           git clone https://github.com/harshareddy7797/Pipeline.git
         }
      }
      
      stage('Codebuild') {
         steps {
            echo build
         }
      }
   }
}
      
