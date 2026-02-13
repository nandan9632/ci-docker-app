pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ci-docker-app .'
            }
        }

        stage('Show Images') {
            steps {
                sh 'docker images'
            }
        }
    }
}
