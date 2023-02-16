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
             sh 'docker build . -t image1'
         }
      }
   }
}
