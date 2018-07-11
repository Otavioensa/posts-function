dynamodb:
	@docker-compose up -d dynamodb

application:
	@docker-compose up -d application

default: application dynamodb

setupdb:
	@docker-compose exec application node src/database/scripts/create-posts-table

test: dynamodb application setupdb
	@docker-compose exec application npm run test

lint:
	@docker-compose run --rm application npm run lint