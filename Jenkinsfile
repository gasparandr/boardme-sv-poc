pipeline {

    agent any

    environment {
        PASS = credentials('dockerhub-pass')
    }

    stages {

        stage('Build Docker Images') {
            steps {
                sh './jenkins/build/build.sh'
            }

        }

        stage('Push Docker Images') {
            steps {
                sh './jenkins/push/push.sh'
            }
        }

        stage('Test') {
            steps {
                echo 'Fake testing...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy'
            }
        }
    }
}
