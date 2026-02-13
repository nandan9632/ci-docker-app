pipeline {
    agent any

    environment {
        IMAGE_NAME = "nandan9632/ci-docker-app"
    }

    stages {

        stage('Clean Workspace') {
            steps {
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
            }
        }
stage('Build Docker Image') {
    steps {
        sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
        sh "docker tag ${IMAGE_NAME}:${BUILD_NUMBER} ${IMAGE_NAME}:latest"
    }
}

        stage('Push Image') {
    steps {
        withCredentials([usernamePassword(
            credentialsId: 'dockerhub-cred',
            usernameVariable: 'DOCKER_USER',
            passwordVariable: 'DOCKER_PASS'
        )]) {
            sh """
                echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin
               docker push ${IMAGE_NAME}:${BUILD_NUMBER}
               docker push ${IMAGE_NAME}:latest
            """
        }
    }
}
        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh """
                        ssh -o StrictHostKeyChecking=no ec2-user@65.2.71.23 "
                            docker pull ${IMAGE_NAME}:latest &&
                            docker rm -f testapp || true &&
                            docker run -d -p 80:80 --name testapp ${IMAGE_NAME}:latest
                        "
                    """
                }
            }
        }
    }
}
