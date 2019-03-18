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
			steps {
				script {
                    method_remote_deploy()
                }
            }
        }
    }
}


def method_remote_deploy() {
	withCredentials([
		sshUserPrivateKey(credentialsId: 'boardme_api_cluster_auth', usernameVariable: 'USER', keyFileVariable: 'KEYFILE')
	]) {
	
		def remote = [:]
		remote.user = "${USER}"
		remote.host = "${HOST_ADDRESS}"
		remote.name = "${HOST_NAME}"
		remote.allowAnyHosts = true
		remote.identityFile = "${KEYFILE}"
		
		
		stage('Remote SSH Test') {
		    sshCommand remote: remote, command: "docker login -u boardme -p \"${PASS}\""
		    sshPut remote: remote, from: 'docker-cloud.yml', into: '.'
		    sshScript remote: remote, script: "jenkins/deploy/deploy.sh"
		}
	}
}
