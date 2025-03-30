docker.build:
	docker build -t registry.gitlab.com/nersent/cloud/devops-zaliczenie:0.0.1 .

docker.start:
	docker run -it -p 8080:8080 registry.gitlab.com/nersent/cloud/devops-zaliczenie:0.0.1
