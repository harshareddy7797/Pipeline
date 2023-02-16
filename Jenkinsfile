pipeline {
   agent any
   options { 
        skipDefaultCheckout()
        buildDiscarder(logRotator(numToKeepStr: '5', daysToKeepStr: '30'))
    }
   tools {nodejs "node"}
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
             sh 'npm install'
             sh 'node server.js'
         }
      }
   }
}
