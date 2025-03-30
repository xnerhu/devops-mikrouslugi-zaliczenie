pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
          steps {
              script {
                  sh 'npm install pnpm --global'
                  sh 'pnpm install'
              }
          }
        }

        stage('Lint') {
          steps {
              script {
                  sh 'pnpm run lint'
              }
          }
        }

        stage('Test') {
          steps {
              script {
                  sh 'pnpm test'
              }
          }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    def appImage = docker.build("registry.gitlab.com/nersent/cloud/devops-zaliczenie:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d --name node-app-test -p 8080:8080 registry.gitlab.com/nersent/cloud/devops-zaliczenie:${env.BUILD_NUMBER}"
                    
                    sh "docker ps -a"
                }
            }
        }

        stage('Status test') {
            steps {
                script {
                    sh 'curl -f http://localhost:8080 || exit 1'
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh "docker rm -f node-app-test"
                }
            }
        }

        // stage('Push to Registry') {
        //     steps {
        //         script {
        //             // withCredentials([usernamePassword(credentialsId: 'dockerHubCreds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
        //             //     sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
        //             // }
        //             sh "docker push registry.gitlab.com/nersent/cloud/devops-zaliczenie:${env.BUILD_NUMBER}"
        //         }
        //     }
        // }
    }
}
