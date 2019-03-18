pipeline {

    agent any

    environment {
        PASS = credentials('boardme_dockerhub_pw')
		HOST_NAME = 'Boardme API Cluster'
		HOST_ADDRESS = '139.59.181.162'	
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
			withCredentials([
				usernamePassword(credentialsId: boardme_api_cluster_user, usernameVariable: 'USER', passwordVariable: 'PASSWORD')
			]) {
			
				steps {
					def remote = [:]
					remote.user = "${USER}"
					remote.password = "${PASSWORD}"
					remote.host = "${HOST_ADDRESS}"
					remote.name = "${HOST_NAME}"
					remote.allowAnyHosts = true

					sshCommand remote: remote, command: "echo \"Remote test success.. \" > /root/message"
				}
			}
        }
    }
}
